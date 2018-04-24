import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service retournant la row des singleHours.
 */
@Injectable()
export class SingleHoursRowService implements BerlinClockRow {

  constructor() {
  }

  /**
   * Retourne la row des singleHours pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row des singleHours pour la date donnée.
   */
  public giveRow(date: Date): string {
    const yNumber = date.getHours() % 5;
    return 'R'.repeat(yNumber) + 'O'.repeat(4 - yNumber);
  }

}
