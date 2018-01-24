import React from 'react';

import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';
import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';
import ItemHealingDone from 'Main/ItemHealingDone';
import Abilities from 'Parser/Core/Modules/Abilities';

const debug = false;

/**
 * Archive of Faith
 * Use: Channel a cleansing matrix into an ally, healing them for 1,618,326 over 3 sec. Fully completing the channel also grants the ally a shield that prevents 590,030 damage for 10 sec.
 */
class ArchiveOfFaith extends Analyzer {
  static dependencies = {
    combatants: Combatants,
    abilities: Abilities,
  };

  casts = 0;
  healingChannel = 0;
  healingAbsorb = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasTrinket(ITEMS.ARCHIVE_OF_FAITH.id);

    if (this.active) {
      this.abilities.add({
        spell: SPELLS.CLEANSING_MATRIX,
        name: ITEMS.ARCHIVE_OF_FAITH.name,
        category: Abilities.SPELL_CATEGORIES.ITEMS,
        cooldown: 60,
        castEfficiency: {
          suggestion: true,
        },
      });
    }
  }

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;

    if (spellId === SPELLS.CLEANSING_MATRIX.id) {
      this.casts += 1;
    }
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;

    if (spellId === SPELLS.CLEANSING_MATRIX.id) {
      this.healingChannel += (event.amount || 0) + (event.absorbed || 0);
    }
  }

  on_byPlayer_absorbed(event) {
    const spellId = event.ability.guid;

    if (spellId === SPELLS.AOF_INFUSION_OF_LIGHT.id) {
      debug && console.log(`HOT Casted: ${event.amount}`);
      this.healingAbsorb += (event.amount || 0) + (event.absorbed || 0);
    }
  }

  on_finished() {
    if (debug) {
      console.log(`Casts ${this.casts}`);
      console.log(`Healing from Channel: ${this.healingChannel}`);
      console.log(`Healing from Absorb: ${this.healingAbsorb}`);
    }
  }

  get healingTotal() {
    return this.healingChannel + this.healingAbsorb;
  }

  item() {
    return {
      item: ITEMS.ARCHIVE_OF_FAITH,
      result: (
        <dfn data-tip={`Healing breakdown:
          <ul>
            <li>Channel: ${this.owner.formatItemHealingDone(this.healingChannel)}</li>
            <li>Absorb: ${this.owner.formatItemHealingDone(this.healingAbsorb)}</li>
          </ul>
        `}>
          <ItemHealingDone amount={this.healingTotal} />
        </dfn>
      ),
    };
  }
}

export default ArchiveOfFaith;
