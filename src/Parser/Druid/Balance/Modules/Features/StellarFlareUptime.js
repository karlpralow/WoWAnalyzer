import React from 'react';

import Analyzer from 'Parser/Core/Analyzer';
import Enemies from 'Parser/Core/Modules/Enemies';
import Combatants from 'Parser/Core/Modules/Combatants';

import SPELLS from 'common/SPELLS';
import SpellIcon from 'common/SpellIcon';
import { formatPercentage } from 'common/format';
import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';

class StellarFlareUptime extends Analyzer {
  static dependencies = {
    enemies: Enemies,
    combatants: Combatants,
  };

  on_initialized() {
    this.active = this.combatants.selected.hasTalent(SPELLS.STELLAR_FLARE_TALENT.id);
  }

  get suggestionThresholds() {
    const stellarFlareUptime = this.enemies.getBuffUptime(SPELLS.STELLAR_FLARE_TALENT.id) / this.owner.fightDuration;
    return {
      actual: stellarFlareUptime,
      isLessThan: {
        minor: 0.95,
        average: 0.9,
        major: 0.8,
      },
      style: 'percentage',
      text: 'Your Stellar Flare uptime can be improved. Try to pay more attention to your Stellar Flare on the boss.',
    };
  }

  suggestions(when) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) => {
      return suggest(suggest.text)
        .icon(SPELLS.STELLAR_FLARE_TALENT.icon)
        .actual(`${formatPercentage(actual)}% Stellar Flare uptime`)
        .recommended(`>${formatPercentage(recommended)}% is recommended`);
    });
  }

  statistic() {
    const stellarFlareUptime = this.enemies.getBuffUptime(SPELLS.STELLAR_FLARE_TALENT.id) / this.owner.fightDuration;
    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.STELLAR_FLARE_TALENT.id} />}
        value={`${formatPercentage(stellarFlareUptime)} %`}
        label="Stellar Flare uptime"
      />
    );
  }

  statisticOrder = STATISTIC_ORDER.CORE(6);
}

export default StellarFlareUptime;