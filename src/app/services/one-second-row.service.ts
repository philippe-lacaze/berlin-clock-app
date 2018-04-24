import { Injectable } from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

@Injectable()
export class OneSecondRowService implements BerlinClockRow {

  constructor() { }

  public giveRow(date: Date): string {
    const yCount = date.getSeconds() % 2;
    return yCount ? 'O' : 'Y';
  }

}
