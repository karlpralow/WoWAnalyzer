import React from 'react';

import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';
import { formatNumber } from 'common/format';
import SpellIcon from 'common/SpellIcon';

import SPELLS from 'common/SPELLS';
import Analyzer from 'Parser/Core/Analyzer';

class PowerWordShieldWasted extends Analyzer {
  wasted = 0;
  count = 0;
  totalCount = 0;

  on_byPlayer_removebuff(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.POWER_WORD_SHIELD.id) {
      return;
    }
    if (event.absorb > 0) {
      this.wasted += event.absorb;
      this.count += 1;
    }
    this.totalCount += 1;
  }

  statistic() {
    const wasted = this.wasted || 0;
    const count = this.count || 0;
    const totalCount = this.totalCount || 0;

    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.POWER_WORD_SHIELD.id} />}
        value={`${formatNumber(wasted / this.owner.fightDuration * 1000)} HPS`}
        label={(
          <dfn data-tip={`The amount of shield absorb remaining on Power Word: Shield instances that have expired. There was a total of ${formatNumber(wasted)} unused Power Word: Shield absorb from ${count} shields with absorb remaining (a total of ${totalCount} shields were applied).`}>
            Unused PW:S absorb
          </dfn>
          )}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(10);
}

export default PowerWordShieldWasted;
