import { Injectable } from '@angular/core';
import {OneSecondRowService} from './one-second-row.service';
import {FiveHoursRowService} from './five-hours-row.service';
import {SingleHoursRowService} from './single-hours-row.service';
import {FiveMinutesRowService} from './five-minutes-row.service';
import {SingleMinutesRowService} from './single-minutes-row.service';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class BerlinClockService {

  private rowServices: BerlinClockRow[] = [];

  constructor(private oneSecondService: OneSecondRowService,
              private fiveHoursService: FiveHoursRowService,
              private singleHoursService: SingleHoursRowService,
              private fiveMinutesService: FiveMinutesRowService,
              private singleMinutesService: SingleMinutesRowService
  ) {
    this.initialize(oneSecondService, fiveHoursService, singleHoursService, fiveMinutesService, singleMinutesService);
  }

  public giveRow(date: Date): string {
    let result = '';
    for (const rowService of this.rowServices) {
      result = result + rowService.giveRow(date);
    }
    return result;
  }

  private initialize(...rowService): void {
    this.rowServices = rowService;
  }

}
