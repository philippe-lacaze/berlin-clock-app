import {Injectable} from '@angular/core';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service Retourne la row des FiveMinutes.
 */
@Injectable()
export class FiveMinutesRowService implements BerlinClockRow {

  /**
   * Template de la row complète.
   * @type {string}
   */
  private static COMPLETE_ROW = 'YYRYYRYYRYY';

  constructor() {
  }

  /**
   * Retourne la row des FiveMinutes pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row des FiveMinutes pour la date donnée.
   */
  public giveRow(date: Date): string {
    const lightsCount = Math.floor(date.getMinutes() / 5);
    return FiveMinutesRowService.COMPLETE_ROW.substr(0, lightsCount) + 'O'.repeat(11 - lightsCount);
  }
}
