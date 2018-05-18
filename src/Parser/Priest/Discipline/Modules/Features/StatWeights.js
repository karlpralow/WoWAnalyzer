import SPELLS from 'common/SPELLS';
import STAT from 'Parser/Core/Modules/Features/STAT';
import HIT_TYPES from 'Parser/Core/HIT_TYPES';

import BaseHealerStatValues from 'Parser/Core/Modules/Features/BaseHealerStatValues';
import Combatants from 'Parser/Core/Modules/Combatants';
import CritEffectBonus from 'Parser/Core/Modules/Helpers/CritEffectBonus';
import StatTracker from 'Parser/Core/Modules/StatTracker';

class StatWeights extends BaseHealerStatValues {
  static dependencies = {
    combatants: Combatants,
    critEffectBonus: CritEffectBonus,
    statTracker: StatTracker,
  };

  _isCrit(event) {
    const spellId = event.ability.guid;
    return super._isCrit(event) || spellId === SPELLS.ATONEMENT_HEAL_CRIT.id;
  }

  _prepareResults() {
    return [
      STAT.INTELLECT,
      STAT.CRITICAL_STRIKE,
      STAT.MASTERY,
      STAT.VERSATILITY,
      STAT.LEECH,
    ];
  }

}

export default StatWeights;
