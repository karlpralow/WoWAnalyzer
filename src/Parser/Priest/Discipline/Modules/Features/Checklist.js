import React from 'react';

import Wrapper from 'common/Wrapper';
import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';
import SpellLink from 'common/SpellLink';
import ItemLink from 'common/ItemLink';

import CoreChecklist, { Rule, Requirement, GenericCastEfficiencyRequirement } from 'Parser/Core/Modules/Features/Checklist';
import CastEfficiency from 'Parser/Core/Modules/CastEfficiency';
import Combatants from 'Parser/Core/Modules/Combatants';
import ManaValues from 'Parser/Core/Modules/ManaValues';

import LegendaryUpgradeChecker from 'Parser/Core/Modules/Items/LegendaryUpgradeChecker';
import LegendaryCountChecker from 'Parser/Core/Modules/Items/LegendaryCountChecker';
import PrePotion from 'Parser/Core/Modules/Items/PrePotion';
import EnchantChecker from 'Parser/Core/Modules/Items/EnchantChecker';

import AlwaysBeCasting from './AlwaysBeCasting';
import PurgeTheWicked from './PurgeTheWicked';

class Checklist extends CoreChecklist {

  static dependencies = {
    castEfficiency: CastEfficiency,
    combatants: Combatants,
    alwaysBeCasting: AlwaysBeCasting,
    manaValues: ManaValues,
    legendaryUpgradeChecker: LegendaryUpgradeChecker,
    legendaryCountChecker: LegendaryCountChecker,
    prePotion: PrePotion,
    enchantChecker: EnchantChecker,
    purgeTheWicked: PurgeTheWicked,
  };

  rules = [    new Rule({
        // The name of the Rule as you want it to appear in the Checklist.
        // You can also make this a React node if you want to use `SpellLink` or other JSX (HTML), in that case wrap the contents with the <Wrapper> component.
        name: 'Use core abilities as often as possible',
        // The description that is shown when the Rule is expanded.
        // Avoid making too many things a URL. Including a link to a guide that goes into further detail is recommended.
        description: (
          <Wrapper>
            Spells such as <SpellLink id={SPELLS.PENANCE.id} icon /> and <SpellLink id={SPELLS.POWER_WORD_SHIELD.id} icon /> should be casted on cooldown. <br/>You should also always try to keep at least 1 charge of <SpellLink id={SPELLS.POWER_WORD_RADIANCE.id} icon /> on cooldown.
          </Wrapper>
        ),
        // The list of requirements for the Rule. Since it's a method you can run any code in here you want, but please try to keep is as simple as possible.
        requirements: () => {
          const combatant = this.combatants.selected;
          return [
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.PENANCE,
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.POWER_WORD_SHIELD,
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.POWER_WORD_RADIANCE,
            }),
          ];
        },
      }),
      new Rule({
        name: 'Use cooldowns effectively',
        description: <Wrapper>Your cooldowns are an important contributor to your healing throughput. Try to get in as many efficient casts as the fight allows. <a href="https://www.wowhead.com/holy-paladin-rotation-guide#gameplay-and-priority-list" target="_blank" rel="noopener noreferrer">More info.</a></Wrapper>,
        requirements: () => {
          const combatant = this.combatants.selected;
          return [
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.LIGHTS_WRATH,
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.EVANGELISM_TALENT,
              when: combatant.hasTalent(SPELLS.EVANGELISM_TALENT.id),
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.VELENS_FUTURE_SIGHT_BUFF,
              when: combatant.hasTrinket(ITEMS.VELENS_FUTURE_SIGHT.id),
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.SHADOWFIEND,
              when: !combatant.hasTalent(SPELLS.MINDBENDER_TALENT_SHARED.id),
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.MINDBENDER_TALENT_SHARED,
              when: combatant.hasTalent(SPELLS.MINDBENDER_TALENT_SHARED.id),
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.RAPTURE,
            }),
          ];
        },
      }),
      new Rule({
        name: <Wrapper>Keep <SpellLink id={SPELLS.PURGE_THE_WICKED_TALENT.id} icon /> up </Wrapper>,
        description: <Wrapper>You should aim at keeping <SpellLink id={SPELLS.PURGE_THE_WICKED_TALENT.id} icon /> up at all times. Keeping it up on multiple targets is recommended when possible.</Wrapper>,
        requirements: () => {
          return [
            new Requirement({
              name: 'Dot Uptime',
              check: () => this.purgeTheWicked.suggestionThresholds,
            }),
          ];
        },
      }),
      new Rule({
        name: 'Use your supportive abilities',
        description: <Wrapper>While you shouldnt aim to cast defensives and externals on cooldown, be aware of them and try to use them whenever effective. Not using them at all indicates you might not be aware of them enough.</Wrapper>,
        requirements: () => {
          const combatant = this.combatants.selected;
          return [
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.PAIN_SUPPRESSION,
            }),
            new GenericCastEfficiencyRequirement({
              spell: SPELLS.POWER_WORD_BARRIER_CAST,
            }),
          ];
        },
      }),
      new Rule({
        name: 'Try to avoid being inactive for a large portion of the fight',
        description: 'While it\'s suboptimal to always be casting as a healer you should still try to always be doing something during the entire fight and high downtime is inexcusable. You can reduce your downtime by reducing the delay between casting spells, anticipating movement, moving during the GCD, and when you\'re not healing try to contribute some damage.',
        requirements: () => {
          return [
            new Requirement({
              name: 'Downtime',
              check: () => this.alwaysBeCasting.downtimeSuggestionThresholds,
            }),
          ];
        },
      }),
      new Rule({
        name: 'Use all of your mana effectively',
        description: 'If you have a large amount of mana left at the end of the fight that\'s mana you could have turned into healing. Try to use all your mana during a fight. A good rule of thumb is to try to match your mana level with the boss\'s health.',
        requirements: () => {
          return [
            new Requirement({
              name: 'Mana left',
              check: () => this.manaValues.suggestionThresholds,
            }),
          ];
        },
      }),
      new Rule({
        name: 'Be well prepared',
        description: 'Being well prepared with potions, enchants and legendaries is an easy way to improve your performance.',
        // For this rule it wouldn't make sense for the bar to be completely green when just 1 of the requirements failed, showing the average instead of median takes care of that properly.
        performanceMethod: 'average',
        requirements: () => {
          return [
            new Requirement({
              name: 'All legendaries upgraded to max item level',
              check: () => ({
                actual: this.legendaryUpgradeChecker.upgradedLegendaries.length,
                isLessThan: this.legendaryCountChecker.max,
                style: 'number',
              }),
            }),
            new Requirement({
              name: 'Used max possible legendaries',
              check: () => ({
                actual: this.legendaryCountChecker.equipped,
                isLessThan: this.legendaryCountChecker.max,
                style: 'number',
              }),
            }),
            new Requirement({
              name: 'Used a pre-potion',
              check: () => this.prePotion.prePotionSuggestionThresholds,
            }),
            new Requirement({
              name: 'Used a second potion',
              check: () => this.prePotion.secondPotionSuggestionThresholds,
            }),
            new Requirement({
              name: 'Gear has best enchants',
              check: () => {
                const numEnchantableSlots = Object.keys(this.enchantChecker.enchantableGear).length;
                return {
                  actual: numEnchantableSlots - (this.enchantChecker.slotsMissingEnchant.length + this.enchantChecker.slotsMissingMaxEnchant.length),
                  isLessThan: numEnchantableSlots,
                  style: 'number',
                };
              },
            }),
          ];
        },
      }),
    ];
}

export default Checklist;
