import { Component, OnInit } from '@angular/core';
import { System } from 'systemjs';
import { Observable} from 'rxjs/Observable';

@Component({
    selector: 'bbb-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        Observable.interval(200).subscribe(
            () => {
                this.resizeFrame();
            }
        );
    }

    private resizeFrame() {

        const frame = document.getElementById('ticket-frame');
        const frameBody = (<HTMLIFrameElement>frame).contentWindow.document.getElementsByTagName('body')[0];

        frame.style.height = frameBody.scrollHeight + 'px';
    }
}
