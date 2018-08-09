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
  painSuppressionTarget = null;

  atonementHealing = 0;
  directHealing = 0;

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTrait(SPELLS.MOMENT_OF_REPOSE.id);
  }

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.PAIN_SUPPRESSION.id) {
      return;
    }

    this.painSuppressionAtonementUp = true;
    this.painSuppressionTarget = event.targetID;
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    if(spellId === SPELLS.MOMENT_OF_REPOSE_HEAL.id) {
      this.directHealing += event.amount;
    }

    if (isAtonement(event) && this.painSuppressionAtonementUp) {
      if(event.targetID === this.painSuppressionTarget) {
        this.atonementHealing += event.amount;
      }
    }
  }

  on_byPlayer_removebuff(event) {
    this.checkIfAtonementFaded(event);
  }

  on_byPlayer_refreshbuff(event) {
    this.checkIfAtonementFaded(event);
  }

  checkIfAtonementFaded(event) {
    if(this.painSuppressionAtonementUp && event.ability.guid === SPELLS.ATONEMENT_BUFF.id && event.targetID === this.painSuppressionTarget){
      this.painSuppressionAtonementUp = false;
    }
  }

  statistic() {
    const directHealingPct = formatPercentage(this.owner.getPercentageOfTotalHealingDone(this.directHealing));
    const atonementHealingPct = formatPercentage(this.owner.getPercentageOfTotalHealingDone(this.atonementHealing));

    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.MOMENT_OF_REPOSE.id} />}
        value={`${formatNumber(
          (this.directHealing + this.atonementHealing) / this.owner.fightDuration * 1000
        )} HPS`}
        label="Moment of Repose Azerite Trait"
        tooltip={`
          Direct Heal: <b>${directHealingPct}%</b> healing <br />
          Atonement Heal: <b>${atonementHealingPct}%</b> healing
        `}
      />
    );
  }
}

export default MomentOfRepose;
