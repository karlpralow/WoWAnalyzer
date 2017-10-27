import React from 'react';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';

import { formatPercentage } from 'common/format';

import Analyzer from 'Parser/Core/Analyzer';

const REGULAR_RADIANCE_COOLDOWN_MS = 18000;
const T212SET_RADIANCE_COOLDOWN_MS = 15000;

class Tier21_2set extends Analyzer {

  _timeSpentWithRadianceOnCD = 0;

  on_initialized() {
    this.active = this.owner.modules.combatants.selected.hasBuff(SPELLS.DISC_PRIEST_T21_2SET_BONUS_PASSIVE.id);
  }

  on_byPlayer_cast(event){

    const spellId = event.ability.guid;
    if (spellId !== SPELLS.POWER_WORD_RADIANCE.id) {
      return;
    }

    if(this.owner.fight.end_time - event.timestamp < T212SET_RADIANCE_COOLDOWN_MS){
      this._timeSpentWithRadianceOnCD += (this.owner.fight.end_time - event.timestamp);
      return;
    }
    this._timeSpentWithRadianceOnCD += T212SET_RADIANCE_COOLDOWN_MS;
  }

  item() {
    return {
      id: `spell-${SPELLS.DISC_PRIEST_T21_2SET_BONUS_PASSIVE.id}`,
      icon: <SpellIcon id={SPELLS.DISC_PRIEST_T21_2SET_BONUS_PASSIVE.id} />,
      title: <SpellLink id={SPELLS.DISC_PRIEST_T21_2SET_BONUS_PASSIVE.id} />,
      result: (
        <span>
          {this._timeSpentWithRadianceOnCD}
        </span>
      ),
    };
  }

  on_finished() {
    console.log(this._timeSpentWithRadianceOnCD);
    console.log(this._radianceCount);
  }

}

export default Tier21_2set;
