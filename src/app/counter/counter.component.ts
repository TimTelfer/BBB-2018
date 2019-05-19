import { Component, OnInit } from '@angular/core';
import { CounterService } from './counter.service';

@Component({
    selector: 'bbb-counter',
    templateUrl: './counter.component.html',
    styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

    private startingCount = 45823;
    public sinceDate = '04/04/2015';
    public hitCount: number;

    constructor(private counterService: CounterService) {
        this.hitCount = 0;
    }

    ngOnInit() {

        this.counterService.addHit().subscribe(
            () => {
                this.counterService.getCount().subscribe(
                    count => {
                        this.hitCount = count + this.startingCount;
                    }
                );
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
