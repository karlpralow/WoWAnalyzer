import React from 'react';

import SPELLS from 'common/SPELLS';
import AZERITETRAITS from 'common/SPELLS/BFA/AzeriteTraits/Priest';
import SpellIcon from 'common/SpellIcon';
import Analyzer from 'Parser/Core/Analyzer';

import StatisticBox from 'Interface/Others/StatisticBox';
import { formatNumber, formatPercentage } from 'common/format';

import isAtonement from '../../../Core/isAtonement';

// Pain Suppression applies Atonement to the target and instantly heals them for x.
class MomentOfRepose extends Analyzer {

  painSuppressionAtonementUp = false;
  lastPainSuppressionCastEvent = null;

  atonementHealing = 0;
  directHealing = 0;

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.PAIN_SUPPRESSION.id) {
      return;
    }

    this.painSuppressionAtonementUp = true;
    this.lastPainSuppressionCastEvent = event;
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    if(spellId === "272775") {
      this.directHealing += event.amount;
    }

    if (isAtonement(event) && this.painSuppressionAtonementUp && event.target === this.lastPainSuppressionCastEvent.target) {
      this.atonementHealing += event.amount;
    }
  }

  on_byplayer_removebuff(event) {
    if(this.painSuppressionAtonementUp && isAtonement(event) && event.target === this.lastPainSuppressionCastEvent.target){
      this.painSuppressionAtonementUp = false;
    }
  }

  on_byplayer_refreshbuff(event) {
    if(this.painSuppressionAtonementUp && isAtonement(event) && event.target === this.lastPainSuppressionCastEvent.target){
      this.painSuppressionAtonementUp = false;
    }
  }

  statistic() {

    const directHealingPct = this.owner.getPercentageOfTotalHealingDone(this.directHealing);
    const atonementHealingPct = this.owner.getPercentageOfTotalHealingDone(this.atonementHealing);

    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.EVANGELISM_TALENT.id} />}
        value={`${formatNumber(
          (this.directHealing + this.atonementHealing) / this.owner.fightDuration * 1000
        )} HPS`}
        label="Moment of Repose Azerite Trait"
        tooltip={`
          Direct Heal: <b>${formatPercentage(directHealingPct)}%</b> healing <br />
          Atonement Heal: <b>${formatPercentage(atonementHealingPct)}%</b> healing

        `}
      />
    );
  }

}

export default MomentOfRepose;
