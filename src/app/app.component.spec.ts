import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SingleHoursRowService} from './services/single-hours-row.service';
import {SingleMinutesRowService} from './services/single-minutes-row.service';
import {FiveMinutesRowService} from './services/five-minutes-row.service';
import {FiveHoursRowService} from './services/five-hours-row.service';
import {OneSecondRowService} from './services/one-second-row.service';
import {BerlinClockService} from './services/berlin-clock.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        SingleHoursRowService,
        SingleMinutesRowService,
        FiveMinutesRowService,
        FiveHoursRowService,
        OneSecondRowService,
        BerlinClockService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
