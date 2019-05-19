import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { TicketsComponent } from './tickets/tickets.component';
import { InfoComponent } from './info/info.component';
import { LineupComponent } from './lineup/lineup.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'info', component: InfoComponent },
    { path: 'lineup', component: LineupComponent },
    { path: 'tickets', component: TicketsComponent },
    { path: 'location', component: LocationComponent },
    { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
