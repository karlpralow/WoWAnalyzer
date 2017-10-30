import React from 'react';

import CoreAlwaysBeCasting from 'Parser/Core/Modules/AlwaysBeCasting';
import Combatants from 'Parser/Core/Modules/Combatants';

import SPELLS from 'common/SPELLS';
import { formatPercentage } from 'common/format';
import { STATISTIC_ORDER } from 'Main/StatisticBox';
import SpellLink from 'common/SpellLink';

class AlwaysBeCasting extends CoreAlwaysBeCasting {
  static dependencies = {
    ...CoreAlwaysBeCasting.dependencies,
    combatants: Combatants,
  };

  static ABILITIES_ON_GCD = [
    // Rotational
    SPELLS.COBRA_SHOT.id,
    SPELLS.KILL_COMMAND.id,
    SPELLS.MULTISHOT.id,
    SPELLS.DIRE_BEAST.id,
    SPELLS.TITANS_THUNDER.id,

    //Utility
    SPELLS.TAR_TRAP.id,
    SPELLS.FREEZING_TRAP.id,
    SPELLS.CONCUSSIVE_SHOT.id,
    SPELLS.FLARE.id,
    SPELLS.REVIVE_PET_AND_MEND_PET.id,

    //Off GCD
    //SPELLS.ASPECT_OF_THE_WILD.id,
    //SPELLS.DISENGAGE_TALENT.id,
    //SPELLS.ASPECT_OF_THE_TURTLE.id,
    //SPELLS.ASPECT_OF_THE_CHEETAH.id,
    //SPELLS.EXHILARATION.id,
    //SPELLS.BINDING_SHOT_TALENT.id,

    //Talents
    SPELLS.STAMPEDE_TALENT.id,
    SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id,
    SPELLS.BARRAGE_TALENT.id,
    SPELLS.DIRE_FRENZY_TALENT.id,
    SPELLS.CHIMAERA_SHOT_TALENT.id,
    SPELLS.STAMPEDE_TALENT.id,
    SPELLS.WYVERN_STING_TALENT.id,
    SPELLS.INTIMIDATION_TALENT.id,

  ];

  suggestions(when) {
    const deadTimePercentage = this.totalTimeWasted / this.owner.fightDuration;
      when(deadTimePercentage).isGreaterThan(0.1)
        .addSuggestion((suggest, actual, recommended) => {
          return suggest(<span>Your downtime can be improved. Try to reduce the delay between casting spells. If everything is on cooldown, try and use <SpellLink id={SPELLS.COBRA_SHOT.id}/> to stay off the focus cap and do some damage.</span>)
            .icon('spell_mage_altertime')
            .actual(`${formatPercentage(actual)}% downtime`)
            .recommended(`<${formatPercentage(recommended)}% is recommended`)
            .regular(recommended + 0.02).major(recommended + 0.04);
        });
    }

  showStatistic = true;
  statisticOrder = STATISTIC_ORDER.CORE(1);
}

export default AlwaysBeCasting;
