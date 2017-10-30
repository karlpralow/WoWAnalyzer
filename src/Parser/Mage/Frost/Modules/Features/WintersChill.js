import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import Combatants from 'Parser/Core/Modules/Combatants';
import EnemyInstances from 'Parser/Core/Modules/EnemyInstances';
import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import { formatNumber, formatMilliseconds, formatPercentage } from 'common/format';

import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';

const debug = false;

const HARDCAST_HITS = [
  SPELLS.FROSTBOLT_DAMAGE.id,
  SPELLS.EBONBOLT_DAMAGE.id,
  SPELLS.GLACIAL_SPIKE_DAMAGE.id,
];

class WintersChillTracker extends Analyzer {
  static dependencies = {
    combatants: Combatants,
    enemies: EnemyInstances,
  };

  hasGlacialSpike;

  totalProcs = 0;

  hardcastHits = 0;
  missedHardcasts = 0;
  singleHardcasts = 0;

  iceLanceHits = 0;
  missedIceLanceCasts = 0;
  singleIceLanceCasts = 0;
  doubleIceLanceCasts = 0;

  on_initialized() {
    this.hasGlacialSpike = this.combatants.selected.hasTalent(SPELLS.GLACIAL_SPIKE_TALENT.id);
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    const enemy = this.enemies.getEntity(event);
    if (!enemy || !enemy.hasBuff(SPELLS.WINTERS_CHILL.id)) {
      return;
    }

    if (spellId === SPELLS.ICE_LANCE_DAMAGE.id) {
      this.iceLanceHits += 1;
      if(debug) { console.log("Ice Lance into Winter's Chill"); }
    } else if(HARDCAST_HITS.includes(spellId)) {
      this.hardcastHits += 1;
      if(debug) { console.log(`${event.ability.name} into Winter's Chill`); }
    }
  }

  on_byPlayer_applydebuff(event) {
    const spellId = event.ability.guid;
	  if(spellId !== SPELLS.WINTERS_CHILL.id) {
		  return;
	  }
    this.iceLanceHits = 0;
    this.hardcastHits = 0;
	}

  on_byPlayer_removedebuff(event) {
    const spellId = event.ability.guid;
    if(spellId !== SPELLS.WINTERS_CHILL.id) {
      return;
    }

    this.totalProcs += 1;

    if (this.iceLanceHits === 0) {
      this.missedIceLanceCasts += 1;
    } else if (this.iceLanceHits === 1) {
      this.singleIceLanceCasts += 1;
    } else if (this.iceLanceHits === 2) {
      this.doubleIceLanceCasts += 1;
    } else {
      console.error(`Unexpected number of Ice Lances inside Winter's Chill @ ${formatMilliseconds(this.owner.currentTimestamp - this.owner.fight.start_time)} -> ${this.iceLanceHits}`);
    }

    if (this.hardcastHits === 0) {
      this.missedHardcasts += 1;
    } else if (this.hardcastHits === 1) {
      this.singleHardcasts += 1;
    } else {
      console.error(`Unexpected number of Frostbolt hits inside Winter's Chill @ ${formatMilliseconds(this.owner.currentTimestamp - this.owner.fight.start_time)} -> ${this.hardcastHits}`);
    }
  }

  suggestions(when) {
    const missedIceLancesPerMinute = this.missedIceLanceCasts / (this.owner.fightDuration / 1000 / 60);
    when(missedIceLancesPerMinute).isGreaterThan(0)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<span> You failed to Ice Lance into {this.missedIceLanceCasts} <SpellLink id={SPELLS.WINTERS_CHILL.id}/> ({missedIceLancesPerMinute.toFixed(1)} missed per minute).  Make sure you cast <SpellLink id={SPELLS.ICE_LANCE_CAST.id}/> after each <SpellLink id={SPELLS.FLURRY.id}/> to benefit from <SpellLink id={SPELLS.SHATTER.id}/>.</span>)
          .icon(SPELLS.ICE_LANCE_CAST.icon)
          .actual(`${formatNumber(this.missedIceLanceCasts)} Winter's Chill not shattered with Ice Lance`)
          .recommended(`${formatNumber(recommended)} is recommended`)
          .regular(0.5).major(1);
      });

    const missedFrostboltsPerMinute = this.missedHardcasts / (this.owner.fightDuration / 1000 / 60);
    if(this.hasGlacialSpike) { // Different suggestion depending on talent choice (which includes a SpellLink, so can't switch inside suggestion)
      when(missedFrostboltsPerMinute).isGreaterThan(0)
        .addSuggestion((suggest, actual, recommended) => {
          return suggest(<span> You failed to <SpellLink id={SPELLS.FROSTBOLT.id}/>, <SpellLink id={SPELLS.GLACIAL_SPIKE_TALENT.id}/>, or <SpellLink id={SPELLS.EBONBOLT.id}/> into {this.missedHardcasts} <SpellLink id={SPELLS.WINTERS_CHILL.id}/> ({missedFrostboltsPerMinute.toFixed(1)} missed per minute).  Make sure you hard cast just before each instant <SpellLink id={SPELLS.FLURRY.id}/> to benefit from <SpellLink id={SPELLS.SHATTER.id}/>.</span>)
            .icon(SPELLS.FROSTBOLT.icon)
            .actual(`${formatNumber(this.missedHardcasts)} Winter's Chill not shattered with Frostbolt, Glacial Spike, or Ebonbolt`)
            .recommended(`${formatNumber(recommended)} is recommended`)
            .regular(0.5).major(1);
        });
    } else {
      when(missedFrostboltsPerMinute).isGreaterThan(0)
        .addSuggestion((suggest, actual, recommended) => {
          return suggest(<span> You failed to <SpellLink id={SPELLS.FROSTBOLT.id}/> or <SpellLink id={SPELLS.EBONBOLT.id}/> into {this.missedHardcasts} <SpellLink id={SPELLS.WINTERS_CHILL.id}/> ({missedFrostboltsPerMinute.toFixed(1)} missed per minute).  Make sure you hard cast just before each instant <SpellLink id={SPELLS.FLURRY.id}/> to benefit from <SpellLink id={SPELLS.SHATTER.id}/>.</span>)
            .icon(SPELLS.FROSTBOLT.icon)
            .actual(`${formatNumber(this.missedHardcasts)} Winter's Chill not shattered with Frostbolt or Ebonbolt`)
            .recommended(`${formatNumber(recommended)} is recommended`)
            .regular(0.5).major(1);
        });
    }
  }

  statistic() {
    const icelanceUtil = (1 - (this.missedIceLanceCasts / this.totalProcs)) || 0;
    const frostboltUtil = (1 - (this.missedHardcasts / this.totalProcs)) || 0;
    const doubleIcelancePerc = (this.doubleIceLanceCasts / this.totalProcs) || 0;
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.WINTERS_CHILL.id} />}
        value={(
          <span>
            <SpellIcon
              id={SPELLS.ICE_LANCE_CAST.id}
              style={{
                height: '1.2em',
                marginBottom: '.15em',
              }}
            />
            {' '}{formatPercentage(icelanceUtil, 0)}{' %'}
            <br />
            <SpellIcon
              id={SPELLS.FROSTBOLT.id}
              style={{
                height: '1.2em',
                marginBottom: '.15em',
              }}
            />
            {' '}{formatPercentage(frostboltUtil, 0)}{' %'}
          </span>
        )}
        label="Winter's Chill Utilization"
        tooltip={`Every Brain Freeze Flurry should be preceded by a Frostbolt${this.hasGlacialSpike ? `, Glacial Spike, ` : ` `}or Ebonbolt and followed by an Ice Lance, so that both the preceding and following spells benefit from Shatter. <br><br> You double Ice Lance'd into Winter's Chill ${this.doubleIceLanceCasts} times (${formatPercentage(doubleIcelancePerc, 1)}%). Note this is usually impossible, it can only be done with strong haste buffs active and by moving towards the target while casting. It should mostly be considered 'extra credit'.`}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(2);
}

export default WintersChillTracker;
