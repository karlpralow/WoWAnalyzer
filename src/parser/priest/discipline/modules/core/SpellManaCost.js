import SPELLS from 'common/SPELLS';

import CoreSpellManaCost from 'parser/shared/modules/SpellManaCost';

/** The amount of time during which it's impossible a second Penance could have started */
const PENANCE_CHANNEL_TIME_BUFFER = 2500;

class SpellManaCost extends CoreSpellManaCost {

  lastPenanceStartTimestamp = null;
  getHardcodedManaCost(event) {
    const spellId = event.ability.guid;
    let hardcodedCost = super.getHardcodedManaCost(event);
    // Penance does not include the mana cost in the spellId :(
    if (spellId === SPELLS.PENANCE.id) {
      if (!this.lastPenanceStartTimestamp || (event.timestamp - this.lastPenanceStartTimestamp) > PENANCE_CHANNEL_TIME_BUFFER) {
        this.lastPenanceStartTimestamp = event.timestamp;
      // if (event.isInitialPenanceCast) {
        hardcodedCost = SPELLS.PENANCE.manaCost;
      } else {
        // This is a second or later bolt from Penance, it doesn't cost mana.
        hardcodedCost = 0;
      }
    }
    return hardcodedCost;
  }
}

export default SpellManaCost;
