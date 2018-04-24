import {TestBed, inject} from '@angular/core/testing';

import {SingleMinutesRowService} from './single-minutes-row.service';

describe('SingleMinutesRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleMinutesRowService]
    });
  });

  it('should be created', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be OOOO', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    const date = new Date(0, 0, 0, 0, 0, 0);
    expect(service.giveRow(date)).toBe('OOOO');
  }));

  it('23:59:59 should be YYYY', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    const date = new Date(0, 0, 0, 23, 59, 59);
    expect(service.giveRow(date)).toBe('YYYY');
  }));

  it('12:32:00 should be YYOO', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 32, 0);
    expect(service.giveRow(date)).toBe('YYOO');
  }));

  it('12:34:00 should be YYYY', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 34, 0);
    expect(service.giveRow(date)).toBe('YYYY');
  }));

  it('12:35:00 should be OOOO', inject([SingleMinutesRowService], (service: SingleMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 35, 0);
    expect(service.giveRow(date)).toBe('OOOO');
  }));

});
