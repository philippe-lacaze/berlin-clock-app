import { TestBed, inject } from '@angular/core/testing';

import { FiveHoursRowService } from './five-hours-row.service';

describe('FiveHoursRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FiveHoursRowService]
    });
  });

  it('should be created', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be OOOO', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    const date = new Date(0, 0, 0, 0, 0, 0);
    expect(service.giveRow(date)).toBe('OOOO');
  }));

  it('23:59:59 should be RRRR', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    const date = new Date(0, 0, 0, 23, 59, 59);
    expect(service.giveRow(date)).toBe('RRRR');
  }));

  it('02:04:00 should be OOOO', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    const date = new Date(0, 0, 0, 2, 4, 0);
    expect(service.giveRow(date)).toBe('OOOO');
  }));

  it('08:23:00 should be ROOO', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    const date = new Date(0, 0, 0, 8, 23, 0);
    expect(service.giveRow(date)).toBe('ROOO');
  }));

  it('16:35:00 should be RRRO', inject([FiveHoursRowService], (service: FiveHoursRowService) => {
    const date = new Date(0, 0, 0, 16, 35, 0);
    expect(service.giveRow(date)).toBe('RRRO');
  }));

});
