import { TestBed, inject } from '@angular/core/testing';

import { BerlinClockService } from './berlin-clock.service';
import {OneSecondRowService} from './one-second-row.service';
import {FiveHoursRowService} from './five-hours-row.service';
import {SingleHoursRowService} from './single-hours-row.service';
import {FiveMinutesRowService} from './five-minutes-row.service';
import {SingleMinutesRowService} from './single-minutes-row.service';

describe('BerlinClockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BerlinClockService,
        OneSecondRowService,
        FiveHoursRowService,
        SingleHoursRowService,
        FiveMinutesRowService,
        SingleMinutesRowService
      ]
    });
  });

  it('should be created', inject([BerlinClockService], (service: BerlinClockService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be YOOOOOOOOOOOOOOOOOOOOOOO', inject([BerlinClockService], (service: BerlinClockService) => {
    const date = new Date(0, 0, 0, 0, 0, 0);
    expect(service.giveRow(date)).toBe('YOOOOOOOOOOOOOOOOOOOOOOO');
  }));

  it('23:59:59 should be ORRRRRRROYYRYYRYYRYYYYYY', inject([BerlinClockService], (service: BerlinClockService) => {
    const date = new Date(0, 0, 0, 23, 59, 59);
    expect(service.giveRow(date)).toBe('ORRRRRRROYYRYYRYYRYYYYYY');
  }));

  it('16:50:06 should be YRRROROOOYYRYYRYYRYOOOOO', inject([BerlinClockService], (service: BerlinClockService) => {
    const date = new Date(0, 0, 0, 16, 50, 6);
    expect(service.giveRow(date)).toBe('YRRROROOOYYRYYRYYRYOOOOO');
  }));

  it('11:37:01 should be ORROOROOOYYRYYRYOOOOYYOO', inject([BerlinClockService], (service: BerlinClockService) => {
    const date = new Date(0, 0, 0, 11, 37, 1);
    expect(service.giveRow(date)).toBe('ORROOROOOYYRYYRYOOOOYYOO');
  }));

});
