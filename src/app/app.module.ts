import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {SingleMinutesRowService} from './services/single-minutes-row.service';
import {FiveMinutesRowService} from './services/five-minutes-row.service';
import {SingleHoursRowService} from './services/single-hours-row.service';
import {FiveHoursRowService} from './services/five-hours-row.service';
import {OneSecondRowService} from './services/one-second-row.service';
import {BerlinClockService} from './services/berlin-clock.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    SingleMinutesRowService,
    FiveMinutesRowService,
    SingleHoursRowService,
    FiveHoursRowService,
    OneSecondRowService,
    BerlinClockService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
