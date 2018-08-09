import React from 'react';

import StatisticBox from 'Interface/Others/StatisticBox';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';

import { formatPercentage } from 'common/format';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';
import calculateEffectiveHealing from 'Parser/Core/calculateEffectiveHealing';

const PHOTOSYNTHESIS_REJUV_INCREASE = 0.3;
const BLOOM_BUFFER_MS = 32;

class Photosynthesis extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  rejuvenationIncrease = 0;
  lifebloomIncrease = 0;

  lastRealBloomTimestamp = null;

  lifebloomEvents = [];

  constructor(...args) {
    super(...args);
    this.active = this.selectedCombatant.hasTalent(SPELLS.PHOTOSYNTHESIS_TALENT.id);
  }

  on_byPlayer_cast(event){
    const spellId = event.ability.guid;

    if (spellId === SPELLS.LIFEBLOOM_HOT_HEAL.id) {
      this.lifebloomEvents.push({
        lifebloomCastEvent: event,
        blooms: [],
        lifebloomFadedEvent: null,
      })
    }
  }

  on_byPlayer_refreshbuff(event) {
    const spellId = event.ability.guid;

    if (spellId !== SPELLS.LIFEBLOOM_HOT_HEAL.id) {
      return;
    }
    if(this.lifebloomEvents[this.lifebloomEvents.length - 1])
      this.lifebloomEvents[this.lifebloomEvents.length - 1].lifebloomFadedEvent = event;
  }

  on_byPlayer_removebuff(event){
    const spellId = event.ability.guid;
    if(spellId !== SPELLS.LIFEBLOOM_HOT_HEAL.id) {
      return;
    }
    if(this.lifebloomEvents[this.lifebloomEvents.length - 1])
      this.lifebloomEvents[this.lifebloomEvents.length - 1].lifebloomFadedEvent = event;
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    const amount = event.amount + (event.absorbed || 0);

    if(spellId !== SPELLS.LIFEBLOOM_BLOOM_HEAL.id){
      return;
    }

    if(this.lifebloomEvents[this.lifebloomEvents.length - 1])
      this.lifebloomEvents[this.lifebloomEvents.length - 1].blooms.push(event);

  }

  statistic() {

    console.log(this.lifebloomEvents);

    const totalPercent = this.owner.getPercentageOfTotalHealingDone(this.rejuvenationIncrease + this.lifebloomIncrease);
    const sourceID = this.selectedCombatant._combatantInfo.sourceID;
    const selfUptime = this.selectedCombatant.getBuffUptime(SPELLS.LIFEBLOOM_HOT_HEAL.id, sourceID);
    const totalUptime =
      Object.keys(this.combatants.players)
          .map(key => this.combatants.players[key])
          .reduce((uptime, player) => uptime + player.getBuffUptime(SPELLS.LIFEBLOOM_HOT_HEAL.id), sourceID);

    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.PHOTOSYNTHESIS_TALENT.id} />}
        value={`${formatPercentage(totalPercent)} %`}
        label={'Photosynthesis'}
        tooltip={`
            Healing contribution
            <ul>
              <li>Rejuvenation: <b>${formatPercentage(this.owner.getPercentageOfTotalHealingDone(this.rejuvenationIncrease))} %</b></li>
              <li>Lifebloom: <b>${formatPercentage(this.owner.getPercentageOfTotalHealingDone(this.lifebloomIncrease))} %</b></li>
            </ul>
            Lifebloom uptime
            <ul>
              <li>On Self: <b>${formatPercentage(selfUptime/ this.owner.fightDuration)} %</b>
              <li>On Others: <b>${formatPercentage((totalUptime - selfUptime) / this.owner.fightDuration)} %</b>
            </ul>
        `}
      />
    );
  }
}

export default Photosynthesis;
