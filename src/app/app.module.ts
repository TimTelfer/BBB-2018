import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { MainComponent } from './main/main.component';
import { GuestbookComponent } from './guestbook/guestbook.component';
import { NavigationComponent } from './navigation/navigation.component';
import { GuestbookService } from './guestbook/guestbook.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterService } from './counter/counter.service';
import { TicketsComponent } from './tickets/tickets.component';
import { TitleComponent } from './title/title.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { LocationComponent } from './location/location.component';
import { SnowComponent } from './snow/snow.component';


@NgModule({
    declarations: [
        AppComponent,
        CounterComponent,
        GuestbookComponent,
        InfoComponent,
        LineupComponent,
        LocationComponent,
        MainComponent,
        NavigationComponent,
        TicketsComponent,
        TitleComponent,
        SnowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [
        GuestbookService,
        CounterService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
