import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class FiveHoursRowService implements BerlinClockRow {

  constructor() {
  }

  public giveRow(date: Date): string {
    const lightsNumber = Math.floor(date.getHours() / 5);
    return 'R'.repeat(lightsNumber) + 'O'.repeat(4 - lightsNumber);
  }

}
