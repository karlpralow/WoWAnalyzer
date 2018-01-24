import React from 'react';

import CoreCancelledCasts from 'Parser/Core/Modules/CancelledCasts';

import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';
import StatisticBox, { STATISTIC_ORDER } from 'Main/StatisticBox';
import Icon from 'common/Icon';

class CancelledCasts extends CoreCancelledCasts {
  static IGNORED_ABILITIES = [
    //Include the spells that you do not want to be tracked and spells that are castable while casting
    SPELLS.EXPLOSIVE_SHOT_DETONATION.id,
    SPELLS.WINDBURST_MOVEMENT_SPEED.id,
    SPELLS.CYCLONIC_BURST_IMPACT_TRAIT.id,
    SPELLS.CYCLONIC_BURST_TRAIT.id,
    SPELLS.GOLGANNETHS_VITALITY_RAVAGING_STORM.id,
  ];
  get CancelledPercentage() {
    return this.castsCancelled / this.totalCasts;
  }

  get suggestionThresholds() {
    return {
      actual: this.CancelledPercentage,
      isGreaterThan: {
        minor: 0.05,
        average: 0.075,
        major: 0.1,
      },
      style: 'percentage',
    };
  }
  suggestions(when) {
    when(this.suggestionThresholds)
      .addSuggestion((suggest, actual, recommended) => {
        return suggest(<span>You cancelled {formatPercentage(this.CancelledPercentage)}% of your spells. While it is expected that you will have to cancel a few casts to react to a boss mechanic or to move, you should try to ensure that you are cancelling as few casts as possible. This is generally done by planning ahead in terms of positioning, and moving while you're casting instant cast spells.</span>)
          .icon('inv_misc_map_01')
          .actual(`${formatPercentage(actual)}% casts cancelled`)
          .recommended(`<${formatPercentage(recommended)}% is recommended`);
      });
  }
  statistic() {
    return (
      <StatisticBox
        icon={<Icon icon="inv_misc_map_01" />}
        value={`${formatPercentage(this.CancelledPercentage)}%`}
        label={`Cancelled Casts`}
        tooltip={`You started casting a total of ${this.totalCasts} spells with a cast timer. <ul><li> You cancelled ${this.castsCancelled} of those casts. </li></ul>`}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(10);
}

export default CancelledCasts;
