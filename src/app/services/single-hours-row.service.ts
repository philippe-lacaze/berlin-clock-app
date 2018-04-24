import { Injectable } from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class SingleHoursRowService implements BerlinClockRow{

  constructor() { }

  public giveRow(date: Date): string {
    const yNumber = date.getHours() % 5;
    return 'R'.repeat(yNumber) + 'O'.repeat(4 - yNumber);
  }

}
