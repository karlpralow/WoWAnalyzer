import React from 'react';

import ITEMS from 'common/ITEMS';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';
import SPELLS from 'common/SPELLS';
import { formatNumber } from 'common/format';

/*
 * Roar of the Seven Lions
 * Equip: Bestial Wrath reduces the Focus cost of all your abilities by 15%.
 */
const LIST_OF_FOCUS_SPENDERS = [
  SPELLS.COBRA_SHOT.id,
  SPELLS.MULTISHOT.id,
  SPELLS.KILL_COMMAND.id,
  SPELLS.REVIVE_PET_AND_MEND_PET.id,
  SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id,
  SPELLS.BARRAGE_TALENT.id,
  SPELLS.VOLLEY_ACTIVATED.id,
];

const BUFFER_MS = 100;

const VOLLEY_COST = 3;

const FOCUS_COST_REDUCTION = 0.15;

class RoarOfTheSevenLions extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  lastFocusCost = 0;
  lastVolleyHit = 0;
  focusSpenderCasts = {
    [SPELLS.COBRA_SHOT.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Cobra Shot",
    },
    [SPELLS.MULTISHOT.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Multishot",
    },
    [SPELLS.KILL_COMMAND.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Kill Command",
    },
    [SPELLS.REVIVE_PET_AND_MEND_PET.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Revive/Mend pet",
    },
    [SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id]: {
      casts: 0,
      focusSaved: 0,
      name: "A Murder of Crows",
    },
    [SPELLS.BARRAGE_TALENT.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Barrage",
    },
    [SPELLS.VOLLEY_ACTIVATED.id]: {
      casts: 0,
      focusSaved: 0,
      name: "Volley",
    },
  };

  on_initialized() {
    this.active = this.combatants.selected.hasWaist(ITEMS.ROAR_OF_THE_SEVEN_LIONS.id);
  }

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;
    if (!this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id)) {
      return;
    }
    //If the spell cast isn't one of the focus spenders of BM, we're not interested in it
    if (LIST_OF_FOCUS_SPENDERS.every(id => spellId !== id)) {
      return;
    }
    this.lastFocusCost = event.classResources[0]['cost'] || 0;
    this.focusSpenderCasts[spellId].casts += 1;
    this.focusSpenderCasts[spellId].focusSaved += this.lastFocusCost * FOCUS_COST_REDUCTION;
  }

  //since Volley has no cast event, I'm going to use it's damage event as they are simultaneous
  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.VOLLEY_ACTIVATED.id) {
      return;
    }
    if (!this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id)) {
      return;
    }
    //since it can hit several mobs, this ensures we only subtract the focus once
    if (event.timestamp > (this.lastVolleyHit + BUFFER_MS)) {
      this.focusSpenderCasts[spellId].casts += 1;
      this.focusSpenderCasts[spellId].focusSaved += VOLLEY_COST - (VOLLEY_COST * FOCUS_COST_REDUCTION);
      this.lastVolleyHit = event.timestamp;
    }

  }

  item() {
    let totalFocusSaved = 0;
    let focusCostCasts = 0;
    const focusSpenders = [[SPELLS.COBRA_SHOT.id], [SPELLS.MULTISHOT.id], [SPELLS.KILL_COMMAND.id], [SPELLS.REVIVE_PET_AND_MEND_PET.id], [SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id], [SPELLS.BARRAGE_TALENT.id], [SPELLS.VOLLEY_ACTIVATED.id]];
    focusSpenders.map(ability => totalFocusSaved += this.focusSpenderCasts[ability].focusSaved);
    focusSpenders.map(ability => focusCostCasts += this.focusSpenderCasts[ability].casts);
    const averageFocusCostReduction = totalFocusSaved / focusCostCasts;

    let tooltipText = `Overall this legendary saved you an average of ${averageFocusCostReduction.toFixed(2)} focus per affected cast <br/>This shows a more accurate breakdown of which abilities were cast during Bestial Wrath, and where the various focus reduction occured:<ul>`;
    focusSpenders.forEach(focusSpender => {
      if (this.focusSpenderCasts[focusSpender].casts > 0) {
        tooltipText += `<li>${this.focusSpenderCasts[focusSpender].name}<ul><li>Casts: ${this.focusSpenderCasts[focusSpender].casts}</li><li>Focus saved: ${formatNumber(this.focusSpenderCasts[focusSpender].focusSaved)}</li></ul></li>`;
      }
    });
    tooltipText += `</ul>`;

    return {
      item: ITEMS.ROAR_OF_THE_SEVEN_LIONS,
      result: (
        <dfn data-tip={tooltipText}>
          saved you a total of {formatNumber(totalFocusSaved)} focus
        </dfn>
      ),
    };
  }
}

export default RoarOfTheSevenLions;
