import { TestBed, inject } from '@angular/core/testing';

import { OneSecondRowService } from './one-second-row.service';

describe('OneSecondRowService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneSecondRowService]
    });
  });

  it('should be created', inject([OneSecondRowService], (service: OneSecondRowService) => {
    expect(service).toBeTruthy();
  }));

  it('00:00:00 should be Y', inject([OneSecondRowService], (service: OneSecondRowService) => {
    const date = new Date(0, 0, 0, 0, 0, 0);
    expect(service.giveRow(date)).toBe('Y');
  }));

  it('23:59:59 should be O', inject([OneSecondRowService], (service: OneSecondRowService) => {
    const date = new Date(0, 0, 0, 23, 59, 59);
    expect(service.giveRow(date)).toBe('O');
  }));

});
