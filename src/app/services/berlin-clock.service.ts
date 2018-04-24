import {Injectable} from '@angular/core';
import {OneSecondRowService} from './one-second-row.service';
import {FiveHoursRowService} from './five-hours-row.service';
import {SingleHoursRowService} from './single-hours-row.service';
import {FiveMinutesRowService} from './five-minutes-row.service';
import {SingleMinutesRowService} from './single-minutes-row.service';
import {BerlinClockRow} from './berlin-clock-row';

/**
 * Service central permettant d'obtenir la row complète d'une berlin clock.
 * <p/>
 * Utilise les services :
 * <ul>
 *     <li>OneSecondRowService</li>
 *     <li>FieHoursRowService</li>
 *     <li>SingleHoursRowService</li>
 *     <li>FiveMinutesRowService</li>
 *     <li>SingleMinutesRowService</li>
 * </ul>
 */
@Injectable()
export class BerlinClockService implements BerlinClockRow {

  /**
   * Array des services d'interfaçe BerlinClockRow a appeler pour reconstituer la row complète, dans l'ordre d'appel.
   * @type {Array}
   */
  private rowServices: BerlinClockRow[] = [];

  constructor(private oneSecondService: OneSecondRowService,
              private fiveHoursService: FiveHoursRowService,
              private singleHoursService: SingleHoursRowService,
              private fiveMinutesService: FiveMinutesRowService,
              private singleMinutesService: SingleMinutesRowService) {
    this.initialize(oneSecondService, fiveHoursService, singleHoursService, fiveMinutesService, singleMinutesService);
  }

  /**
   * Retourne la row complète calculée en appelan tous les BerlinClockRow de this.rowServices dans l'ordre,
   * pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row complète
   */
  public giveRow(date: Date): string {
    let result = '';
    for (const rowService of this.rowServices) {
      result = result + rowService.giveRow(date);
    }
    return result;
  }

  /**
   * Initialize l'array interne avec les services donnés.
   * @param rowService donnés.
   */
  private initialize(...rowService): void {
    this.rowServices = rowService;
  }

}
