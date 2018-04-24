import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class FiveMinutesRowService implements BerlinClockRow {

  private static COMPLETE_ROW = 'YYRYYRYYRYY';

  constructor() {
  }

  public giveRow(date: Date): string {
    const lightsNumber = Math.floor(date.getMinutes() / 5);
    return FiveMinutesRowService.COMPLETE_ROW.substr(0, lightsNumber) + 'O'.repeat(11 - lightsNumber);
  }
}
