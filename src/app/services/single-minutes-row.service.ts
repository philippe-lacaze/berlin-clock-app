import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service retournant la row des singleMinutes.
 * */
@Injectable()
export class SingleMinutesRowService implements BerlinClockRow {

  constructor() {
  }

  /**
   * Retourne la row des singleMinutes pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row des singleHours pour la date donnée.
   */
  public giveRow(date: Date): string {
    const yNumber = date.getMinutes() % 5;
    return 'Y'.repeat(yNumber) + 'O'.repeat(4 - yNumber);
  }

}
