import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import AbilityTracker from 'Parser/Core/Modules/AbilityTracker';
import Combatants from 'Parser/Core/Modules/Combatants';

import calculateMaxCasts from 'Parser/Core/calculateMaxCasts';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import Wrapper from 'common/Wrapper';

const SUMMON_COOLDOWN = 180;

class DoomguardInfernal extends Analyzer {
  static dependencies = {
    abilityTracker: AbilityTracker,
    combatants: Combatants,
  };

  on_initialized() {
    this.active = !this.combatants.selected.hasTalent(SPELLS.GRIMOIRE_OF_SUPREMACY_TALENT.id);
  }

  get suggestionThresholds() {
    const maxCasts = Math.ceil(calculateMaxCasts(SUMMON_COOLDOWN, this.owner.fightDuration));
    const doomguardCasts = this.abilityTracker.getAbility(SPELLS.SUMMON_DOOMGUARD_UNTALENTED.id).casts || 0;
    const infernalCasts = this.abilityTracker.getAbility(SPELLS.SUMMON_INFERNAL_UNTALENTED.id).casts || 0;
    const actualCasts = doomguardCasts + infernalCasts;

    return {
      actual: actualCasts,
      isLessThan: maxCasts,
      style: 'number',
    };
  }

  suggestions(when) {
    when(this.suggestionThresholds)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<Wrapper>You should cast <SpellLink id={SPELLS.SUMMON_DOOMGUARD_UNTALENTED.id}/> or <SpellLink id={SPELLS.SUMMON_INFERNAL_UNTALENTED.id}/> more often. Infernal has higher priority if you don't have the Lord of Flames debuff but it is otherwise weaker. Try to pair up the cooldowns with haste buffs like <SpellLink id={SPELLS.BLOODLUST.id}/>, <SpellLink id={SPELLS.TIME_WARP.id}/> etc..</Wrapper>)
          .icon(SPELLS.SUMMON_DOOMGUARD_UNTALENTED.icon)
          .actual(`${actual} out of ${recommended} summoned Infernals or Doomguards.`)
          .recommended(`${recommended} is recommended`);
      });
  }
}

export default DoomguardInfernal;
