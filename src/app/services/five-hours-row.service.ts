import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service donnant la row des FiveHours d'une berlin clock.
 */
@Injectable()
export class FiveHoursRowService implements BerlinClockRow {

  constructor() {
  }

  /**
   * Retourne la row des FiveHours pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row des FiveHours pour la date donnée.
   */
  public giveRow(date: Date): string {
    const lightsCount = Math.floor(date.getHours() / 5);
    return 'R'.repeat(lightsCount) + 'O'.repeat(4 - lightsCount);
  }

}
