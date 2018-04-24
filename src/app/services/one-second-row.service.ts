import { Injectable } from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service donnant la row des secondes.
 */
@Injectable()
export class OneSecondRowService implements BerlinClockRow {

  constructor() { }

  /**
   * Retourne la row des secondes pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row des secondes pour la date donnée.
   */
  public giveRow(date: Date): string {
    const yCount = date.getSeconds() % 2;
    return yCount ? 'O' : 'Y';
  }

}
