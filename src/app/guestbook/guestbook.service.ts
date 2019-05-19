import { Injectable } from '@angular/core';
import { GuestbookMessage } from './guestbook-message.model';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {GuestbookMessageResponse, GuestbookMessageResponseItem} from './guestbook-message-response.model';
import * as moment from 'moment-timezone';
import { UUID } from 'angular2-uuid';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class GuestbookService {

    private url = 'https://5yaidcba56.execute-api.ap-southeast-2.amazonaws.com/prod';
    private pollInterval = 5000;

    constructor(private http: HttpClient) { }

    public getMessages(): Observable<Array<GuestbookMessage>> {

        return Observable.interval(this.pollInterval).startWith(0)
            .switchMap(() => this.http.get(this.url)
                .map((data: GuestbookMessageResponse) => {
                    const messages = [];

                    data.Items.forEach((item: GuestbookMessageResponseItem) => {

                        if (item.giphyId.S === '-') {
                            item.giphyId.S = null;
                        }

                        messages.push(new GuestbookMessage(item.message.S, item.name.S, item.message.S, item.giphyId.S, item.when.S));
                    });

                    return messages;
                }));
    }

    public postMessage(message: GuestbookMessage): Observable<Object> {

        message.messageId = UUID.UUID();
        message.when = moment().tz('Australia/Melbourne').format();
        message.whenDate = new Date(message.when);

        if (message.giphyId === null || message.giphyId === '') {
            message.giphyId = '-';
        }

        if (message.message === null || message.message === '') {
            message.message = '-';
        }

        return this.http.put(this.url, message);
    }
}
