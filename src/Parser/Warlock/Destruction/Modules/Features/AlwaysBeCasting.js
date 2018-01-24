import React from 'react';

import CoreAlwaysBeCasting from 'Parser/Core/Modules/AlwaysBeCasting';

import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';
import { STATISTIC_ORDER } from 'Main/StatisticBox';
import SpellLink from 'common/SpellLink';
import Wrapper from 'common/Wrapper';

class AlwaysBeCasting extends CoreAlwaysBeCasting {
  get suggestionThresholds() {
    return {
      actual: this.downtimePercentage,
      isGreaterThan: {
        minor: 0.2,
        average: 0.35,
        major: 0.4,
      },
      style: 'percentage',
    };
  }

  suggestions(when) {
    when(this.suggestionThresholds)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<Wrapper>Your downtime can be improved. Try to Always Be Casting (ABC), try to reduce the delay between casting spells. When you know you'll be moving, try to save <SpellLink id={SPELLS.DIMENSIONAL_RIFT_CAST.id} /> or <SpellLink id={SPELLS.CONFLAGRATE.id} /> charges or replenish your mana with <SpellLink id={SPELLS.LIFE_TAP.id} />. Make good use of your <SpellLink id={SPELLS.DEMONIC_CIRCLE_TALENT_TELEPORT.id} /> when you can.</Wrapper>)
          .icon('spell_mage_altertime')
          .actual(`${formatPercentage(actual)}% downtime`)
          .recommended(`<${formatPercentage(recommended)}% is recommended`);
      });
  }

  statisticOrder = STATISTIC_ORDER.CORE(1);
}

export default AlwaysBeCasting;
