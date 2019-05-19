import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CounterResponse} from './counter-response.model';
import {CounterHit} from './counter-hit.model';
import {UUID} from 'angular2-uuid';
import * as moment from 'moment-timezone';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CounterService {

    private url = 'https://7zfyr9r6g9.execute-api.ap-southeast-2.amazonaws.com/prod/';
    private pollInterval = 5000;

    constructor(private http: HttpClient) { }

    public getCount(): Observable<number> {

        return Observable.interval(this.pollInterval).startWith(0)
            .switchMap(() => this.http.get(this.url)
                .map((response: CounterResponse) => {
                    return response.Count;
                }));
    }

    public addHit(): Observable<Object> {

        const counterHit = new CounterHit(UUID.UUID(), moment().tz('Australia/Melbourne').format());

        return this.http.put(this.url, counterHit);
    }
}
