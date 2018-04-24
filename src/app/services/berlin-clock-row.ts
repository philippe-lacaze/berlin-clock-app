/**
 * Interface commune des services donnant une row de la berlin clock.
 */
export interface BerlinClockRow {
  /**
   * Retourne la row pour la date donnée.
   * @param {Date} date donnée.
   * @returns {string} la row pour la date donnée.
   */
  giveRow(date: Date): string;
}
