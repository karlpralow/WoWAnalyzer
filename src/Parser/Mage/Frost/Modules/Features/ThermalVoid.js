import React from 'react';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';
import SpellIcon from 'common/SpellIcon';
import Wrapper from 'common/Wrapper';
import { formatNumber } from 'common/format';
import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';
import Combatants from 'Parser/Core/Modules/Combatants';
import Analyzer from 'Parser/Core/Analyzer';

class ThermalVoid extends Analyzer {
  static dependencies = {
    combatants: Combatants,
  };

  casts = 0;
  buffApplied = 0;
  extraUptime = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasTalent(SPELLS.THERMAL_VOID_TALENT.id);
  }

  on_toPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.ICY_VEINS.id) {
      this.casts += 1;
      this.buffApplied = event.timestamp;
    }
  }

  on_finished() {
    if (this.combatants.selected.hasBuff(SPELLS.ICY_VEINS.id)) {
      this.casts -= 1;
      this.extraUptime = this.owner.currentTimestamp - this.buffApplied;
    }
  }

  get uptime() {
    return this.combatants.selected.getBuffUptime(SPELLS.ICY_VEINS.id) - this.extraUptime;
  }

  get averageDuration() {
    return this.uptime / this.casts;
  }

  get averageDurationSeconds() {
    return this.averageDuration / 1000;
  }

  get suggestionThresholds() {
    return {
      actual: this.averageDuration / 1000,
      isLessThan: {
        minor: 40,
        average: 37,
        major: 33,
      },
      style: 'number',
    };
  }

  suggestions(when) {
    when(this.suggestionThresholds)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<Wrapper>Your <SpellLink id={SPELLS.THERMAL_VOID_TALENT.id} /> duration boost can be improved. Make sure you use <SpellLink id={SPELLS.FROZEN_ORB.id} /> during <SpellLink id={SPELLS.ICY_VEINS.id} /> in order to get extra <SpellLink id={SPELLS.FINGERS_OF_FROST.id} /> Procs</Wrapper>)
          .icon(SPELLS.ICY_VEINS.icon)
          .actual(`${formatNumber(actual)} seconds Average Icy Veins Duration`)
          .recommended(`${formatNumber(recommended)} is recommended`);
      });
  }

  statistic() {
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.ICY_VEINS.id} />}
        value={`${formatNumber(this.averageDurationSeconds)}s`}
        label="Avg Icy Veins Duration"
        tooltip="Icy Veins Casts that do not complete before the fight ends are removed from this statistic"
      />
    );
  }

  statisticOrder = STATISTIC_ORDER.OPTIONAL(0);
}

export default ThermalVoid;
