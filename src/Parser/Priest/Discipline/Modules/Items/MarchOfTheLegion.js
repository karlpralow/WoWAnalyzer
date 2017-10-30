import React from 'react';

import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';

import isAtonement from '../Core/isAtonement';
import AtonementSource from '../Features/AtonementSource';

const debug = true;

class MarchOfTheLegion extends Analyzer {
  static dependencies = {
    combatants: Combatants,
    atonementSource: AtonementSource,
  };

  healing = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasFinger(ITEMS.RING_OF_LOOMING_MENACE.id) && this.combatants.selected.hasNeck(ITEMS.CHAIN_OF_SCORCHED_BONES.id);
  }

  on_byPlayer_heal(event) {
    if (!isAtonement(event)) {
      return;
    }
    const combatant = this.combatants.players[event.targetID];
    if (!combatant) {
      // If combatant doesn't exist it's probably a pet, this shouldn't be noteworthy.
      debug && console.log('Skipping Atonement heal event since combatant couldn\'t be found:', event);
      return;
    }
    if (this.atonementSource.atonementDamageSource.ability.guid !== SPELLS.MARCH_OF_THE_LEGION.id) {
      return;
    }

    this.healing += event.amount + (event.absorbed || 0);
  }

  item() {
    const healing = this.healing || 0;

    return {
      // Not returning an 'item' because this is a set bonus and not the windwalker March of the Legion item.
      id: `spell-${SPELLS.MARCH_OF_THE_LEGION.id}`,
      icon: <SpellIcon id={SPELLS.MARCH_OF_THE_LEGION.id} />,
      title: <SpellLink id={SPELLS.MARCH_OF_THE_LEGION.id} />,
      result: this.owner.formatItemHealingDone(healing),
    };
  }
}

export default MarchOfTheLegion;
