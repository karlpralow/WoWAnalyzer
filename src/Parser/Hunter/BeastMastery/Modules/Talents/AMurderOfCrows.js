import React from 'react';

import Combatants from 'Parser/Core/Modules/Combatants';
import Analyzer from 'Parser/Core/Analyzer';
import SPELLS from 'common/SPELLS';
import SpellUsable from 'Parser/Core/Modules/SpellUsable';
import SPECS from 'common/SPECS';
import StatisticBox from 'Main/StatisticBox';
import SpellIcon from 'common/SpellIcon';
import SpellLink from 'common/SpellLink';
import STATISTIC_ORDER from 'Main/STATISTIC_ORDER';
import ItemDamageDone from 'Main/ItemDamageDone';
import Wrapper from 'common/Wrapper';

//The point at which you can use crows without Bestial Wrath because they'd overlap enough for it to still be considered a good cast - this is what the APL does.
const ALLOW_EARLY_USE = 3000;

//You generally use crows if you have more than 7 seconds remaining in bestial wrath
const BESTIAL_WRATH_REMAINING_USE_CROWS = 7000;

//Duration of Bestial Wrath
const BESTIAL_WRATH_DURATION = 15000;

class AMurderOfCrows extends Analyzer {

  static dependencies = {
    combatants: Combatants,
    spellUsable: SpellUsable,
  };

  shouldHaveSavedCrows = 0;
  goodCrowsCasts = 0;
  badCrowsCasts = 0;
  totalCrowsCasts = 0;
  damage = 0;
  bestialWrathStart = 0;
  bestialWrathEnd = 0;
  registeredCasts = 0;
  prepullCasts = 0;

  on_initialized() {
    this.active = this.combatants.selected.hasTalent(SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id) && SPECS.BEAST_MASTERY_HUNTER;
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.A_MURDER_OF_CROWS_SPELL.id) {
      return;
    }
    if (this.registeredCasts === 0 && this.prepullCasts === 0) {
      this.goodCrowsCasts += 1;
      this.totalCrowsCasts += 1;
      this.prepullCasts += 1;
    }
    this.damage += event.amount + (event.absorbed || 0);
  }

  on_byPlayer_cast(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id && spellId !== SPELLS.BESTIAL_WRATH.id) {
      return;
    }
    if (spellId === SPELLS.BESTIAL_WRATH.id) {
      this.bestialWrathStart = event.timestamp;
      this.bestialWrathEnd = this.bestialWrathStart + BESTIAL_WRATH_DURATION;
    }
    if (spellId === SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id) {
      if (this.registeredCasts === 0) {
        this.registeredCasts += 1;
      }
      this.totalCrowsCasts += 1;
      const bestialWrathIsOnCooldown = this.spellUsable.isOnCooldown(SPELLS.BESTIAL_WRATH.id);
      if (bestialWrathIsOnCooldown) {
        if (!this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id) && this.spellUsable.cooldownRemaining(SPELLS.BESTIAL_WRATH.id) < ALLOW_EARLY_USE) {
          this.goodCrowsCasts += 1;
          return;
        }
      }
      if (this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id) && event.timestamp < (this.bestialWrathEnd - BESTIAL_WRATH_REMAINING_USE_CROWS)) {
        this.goodCrowsCasts += 1;
      } else if (this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id) && event.timestamp > (this.bestialWrathEnd - BESTIAL_WRATH_REMAINING_USE_CROWS)) {
        this.shouldHaveSavedCrows += 1;
      } else if (!this.combatants.selected.hasBuff(SPELLS.BESTIAL_WRATH.id)) {
        if (!bestialWrathIsOnCooldown) {
          this.goodCrowsCasts += 1;
          return;
        }
        this.badCrowsCasts += 1;
      }
    }
  }
  get shouldHaveSavedThreshold() {
    return {
      actual: this.shouldHaveSavedCrows,
      isGreaterThan: {
        minor: 0,
        average: 0.9,
        major: 1.9,
      },
      style: 'number',
    };
  }
  get badCastThreshold() {
    return {
      actual: this.badCrowsCasts,
      isGreaterThan: {
        minor: 0,
        average: 0.9,
        major: 1.9,
      },
      style: 'number',
    };
  }
  suggestions(when) {
    when(this.badCastThreshold).addSuggestion((suggest, actual, recommended) => {
      return suggest(<Wrapper>Don't cast <SpellLink id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id} /> without <SpellLink id={SPELLS.BESTIAL_WRATH.id} /> up (or ready to cast straight after the <SpellLink id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id} /> cast), and atleast 7 seconds remaining on the buff.</Wrapper>)
        .icon(SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.icon)
        .actual(`You cast A Murder of Crows ${actual} times without Bestial Wrath up or Bestial Wrath ready to cast after`)
        .recommended(`${recommended} is recommended`);
    });
    when(this.shouldHaveSavedThreshold).addSuggestion((suggest, actual, recommended) => {
      return suggest(<Wrapper>Don't cast <SpellLink id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id} /> without atleast 7 seconds remaining on <SpellLink id={SPELLS.BESTIAL_WRATH.id} />.</Wrapper>)
        .icon(SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.icon)
        .actual(`You cast A Murder of Crows ${actual} times with less than 7 seconds remaining on Bestial Wrath`)
        .recommended(`${recommended} is recommended`);
    });
  }

  statistic() {
    let tooltipText = `You cast A Murder of Crows a total of ${this.totalCrowsCasts} times.`;
    tooltipText += this.badCrowsCasts + this.shouldHaveSavedCrows > 0 ? `<ul>` : ``;
    tooltipText += this.badCrowsCasts > 0 ? `<li>You had ${this.badCrowsCasts} bad cast(s) of A Murder of Crows. <ul><li>Bad casts indicate that A Murder of Crows was cast without Bestial Wrath and/or it not being ready to cast within the following 3 seconds. </li></ul></li>` : ``;
    tooltipText += this.shouldHaveSavedCrows > 0 ? `<li>You had ${this.shouldHaveSavedCrows} casts of A Murder of Crows where you should have delayed casting it.<ul><li>This occurs when you cast A Murder of Crows when there is less than 7 seconds remaining on Bestial Wrath.</li></ul></li>` : ``;
    tooltipText += this.badCrowsCasts + this.shouldHaveSavedCrows > 0 ? `</ul>` : ``;

    return (
      <StatisticBox
        icon={<SpellIcon id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id} />}
        value={(
          <Wrapper>
            {this.goodCrowsCasts}{'  '}
            <SpellIcon
              id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id}
              style={{
                height: '1.3em',
                marginTop: '-.1em',
              }}
            />
            {'  '}
            {this.badCrowsCasts + this.shouldHaveSavedCrows}{'  '}
            <SpellIcon
              id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id}
              style={{
                height: '1.3em',
                marginTop: '-.1em',
                filter: 'grayscale(100%)',
              }}
            />
          </Wrapper>

        )}
        label={`A Murder of Crows`}
        tooltip={tooltipText}
      />
    );
  }
  statisticOrder = STATISTIC_ORDER.CORE(9);

  subStatistic() {
    return (
      <div className="flex">
        <div className="flex-main">
          <SpellLink id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id}>
            <SpellIcon id={SPELLS.A_MURDER_OF_CROWS_TALENT_SHARED.id} noLink /> A Murder of Crows
          </SpellLink>
        </div>
        <div className="flex-sub text-right">
          <ItemDamageDone amount={this.damage} />
        </div>
      </div>
    );
  }
}

export default AMurderOfCrows;
