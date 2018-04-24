import {TestBed, inject} from '@angular/core/testing';

import {FiveMinutesRowService} from './five-minutes-row.service';

describe('FiveMinutesRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiveMinutesRowService]
    });
  });

  it('should be created', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be Ox11', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    const date = new Date(0, 0, 0, 0, 0, 0)
    expect(service.giveRow(date)).toBe('OOOOOOOOOOO');
  }));

  it('23:59:59 should be YYRYYRYYRYY', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    const date = new Date(0, 0, 0, 23, 59, 59)
    expect(service.giveRow(date)).toBe('YYRYYRYYRYY');
  }));

  it('12:04:00 should be OOOOOOOOOOO', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 4, 0)
    expect(service.giveRow(date)).toBe('OOOOOOOOOOO');
  }));

  it('12:23:00 should be YYRYOOOOOOO', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 23, 0)
    expect(service.giveRow(date)).toBe('YYRYOOOOOOO');
  }));

  it('12:35:00 should be YYRYYRYOOOO', inject([FiveMinutesRowService], (service: FiveMinutesRowService) => {
    const date = new Date(0, 0, 0, 12, 35, 0)
    expect(service.giveRow(date)).toBe('YYRYYRYOOOO');
  }));
});
