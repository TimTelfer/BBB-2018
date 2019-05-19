import {Component, OnInit} from '@angular/core';
import { GuestbookMessage } from './guestbook-message.model';
import { GuestbookService } from './guestbook.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'bbb-guestbook',
    templateUrl: './guestbook.component.html',
    styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

    public messages: Array<GuestbookMessage>;

    public guestbookForm: FormGroup;

    constructor(
        private guestbookService: GuestbookService) {

        this.messages = [];
    }

    get name() { return this.guestbookForm.get('name'); }

    get message() { return this.guestbookForm.get('message'); }

    get giphyUrl() { return this.guestbookForm.get('giphyUrl'); }

    ngOnInit() {
        this.subscribeMessages();
        this.createForm();
    }

    signGuestbook() {

        const name = this.guestbookForm.controls.name.value;
        const message = this.guestbookForm.controls.message.value;
        const giphyId = this.guestbookForm.controls.giphyUrl.value
            .replace('https://media.giphy.com/media/', '')
            .replace('/giphy.gif', '')
            .trim();

        const newMessage = new GuestbookMessage('', name, message, giphyId, '');

        this.guestbookService.postMessage(newMessage).subscribe(
            () => {
                if (newMessage.giphyId === '-') {
                    newMessage.giphyId = null;
                }

                this.messages.unshift(newMessage);
                this.createForm();
            },
            (error) => {
                console.error(error);
            });
    }

    private createForm() {
        this.guestbookForm = new FormGroup({
            name: new FormControl('', [
                Validators.required,
                Validators.maxLength(50)
            ]),
            message: new FormControl('', [
                Validators.maxLength(500)
            ]),
            giphyUrl: new FormControl('', [
                Validators.pattern('^https:\\/\\/media\\.giphy\\.com\\/media\\/[a-zA-Z0-9]{1,30}\\/giphy\\.gif\\s*$')
            ])
        });
    }

    private subscribeMessages() {
        this.guestbookService.getMessages()
            .subscribe(messages => {
                messages = messages.sort((m1, m2) => m1.when > m2.when ? -1 : 1);
                this.messages = messages;
            });
    }
}
