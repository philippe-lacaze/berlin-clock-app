import { TestBed, inject } from '@angular/core/testing';

import { SingleHoursRowService } from './single-hours-row.service';

describe('SingleHoursRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SingleHoursRowService]
    });
  });

  it('should be created', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be OOOO', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    const date = new Date(0, 0, 0, 0, 0, 0);
    expect(service.giveRow(date)).toBe('OOOO');
  }));

  it('23:59:59 should be RRRO', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    const date = new Date(0, 0, 0, 23, 59, 59);
    expect(service.giveRow(date)).toBe('RRRO');
  }));

  it('00:02:04 should be RROO', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    const date = new Date(0, 0, 0, 2, 4, 0);
    expect(service.giveRow(date)).toBe('RROO');
  }));

  it('00:08:23 should be RRRO', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    const date = new Date(0, 0, 0, 8, 23, 0);
    expect(service.giveRow(date)).toBe('RRRO');
  }));

  it('00:14:35 should be RRRR', inject([SingleHoursRowService], (service: SingleHoursRowService) => {
    const date = new Date(0, 0, 0, 14, 35, 0);
    expect(service.giveRow(date)).toBe('RRRR');
  }));
});
