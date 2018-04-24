import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class SingleMinutesRowService implements BerlinClockRow{

  constructor() {
  }

  public giveRow(date: Date): string {
    const yNumber = date.getMinutes() % 5;
    return 'Y'.repeat(yNumber) + 'O'.repeat(4 - yNumber);
  }

}
