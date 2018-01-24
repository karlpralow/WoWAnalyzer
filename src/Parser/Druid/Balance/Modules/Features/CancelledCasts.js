import React from 'react';

import Wrapper from 'common/Wrapper';
import CoreCancelledCasts from 'Parser/Core/Modules/CancelledCasts';
import { formatPercentage } from 'common/format';
import { STATISTIC_ORDER } from 'Main/StatisticBox';

class CancelledCasts extends CoreCancelledCasts {

  get suggestionThresholds() {
    return {
      actual: this.castsCancelled / this.totalCasts,
      isGreaterThan: {
        minor: 0.05,
        average: 0.075,
        major: 0.1,
      },
      style: 'percentage',
    };
  }

  suggestions(when) {
    when(this.suggestionThresholds).addSuggestion((suggest, actual, recommended) => {
        return suggest(<Wrapper>You cancelled {formatPercentage(actual)}% of your spells. While it is expected that you will have to cancel a few casts to react to a boss mechanic or to move, you should try to ensure that you are cancelling as few casts as possible.</Wrapper>)
          .icon('inv_misc_map_01')
          .actual(`${formatPercentage(actual)}% casts cancelled`)
          .recommended(`<${formatPercentage(recommended)}% is recommended`);
      });
  }

  statisticOrder = STATISTIC_ORDER.CORE(8);
}

export default CancelledCasts;