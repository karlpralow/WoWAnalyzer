import React from 'react';
import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';
import SPELLS from 'common/SPELLS';
import SpellIcon from "common/SpellIcon";
import SpellLink from 'common/SpellLink';
import ItemDamageDone from 'Main/ItemDamageDone';

class SurgeOfTheStormgod extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  damage = 0;

  on_initialized() {
    this.active = this.combatants.selected.traitsBySpellId[SPELLS.SURGE_OF_THE_STORMGOD_TRAIT.id];
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.SURGE_OF_THE_STORMGOD_DAMAGE.id) {
      return;
    }
    this.damage += event.amount + (event.absorbed || 0);
  }

  subStatistic() {
    if (this.damage > 0) {
      return (
        <div className="flex">
          <div className="flex-main">
            <SpellLink id={SPELLS.SURGE_OF_THE_STORMGOD_TRAIT.id}>
              <SpellIcon id={SPELLS.SURGE_OF_THE_STORMGOD_TRAIT.id} noLink /> Surge of the Stormgod
            </SpellLink>
          </div>
          <div className="flex-sub text-right">
            <ItemDamageDone amount={this.damage} />
          </div>
        </div>
      );
    }
  }
}

export default SurgeOfTheStormgod;
