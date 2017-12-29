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
import Velens from 'Parser/Core/Modules/Items/Velens';
import LegendaryUpgradeChecker from 'Parser/Core/Modules/Items/LegendaryUpgradeChecker';
import LegendaryCountChecker from 'Parser/Core/Modules/Items/LegendaryCountChecker';
import PrePotion from 'Parser/Core/Modules/Items/PrePotion';
import EnchantChecker from 'Parser/Core/Modules/Items/EnchantChecker';

import MasteryEffectiveness from './MasteryEffectiveness';
import AlwaysBeCasting from './AlwaysBeCasting';
import BeaconHealing from '../PaladinCore/BeaconHealing';
import FillerLightOfTheMartyrs from '../PaladinCore/FillerLightOfTheMartyrs';
import AuraOfSacrifice from '../Talents/AuraOfSacrifice';
import Ilterendi from '../Items/Ilterendi';
import Overhealing from '../PaladinCore/Overhealing';

class Checklist extends CoreChecklist {
  static dependencies = {
    castEfficiency: CastEfficiency,

    masteryEffectiveness: MasteryEffectiveness,
    alwaysBeCasting: AlwaysBeCasting,
    beaconHealing: BeaconHealing,
    fillerLightOfTheMartyrs: FillerLightOfTheMartyrs,
    manaValues: ManaValues,
    auraOfSacrifice: AuraOfSacrifice,
    ilterendi: Ilterendi,
    velens: Velens,
    legendaryUpgradeChecker: LegendaryUpgradeChecker,
    legendaryCountChecker: LegendaryCountChecker,
    prePotion: PrePotion,
    overhealing: Overhealing,
    enchantChecker: EnchantChecker,
  };

  rules = [
    new Rule({
      // The name of the Rule as you want it to appear in the Checklist.
      // You can also make this a React node if you want to use `SpellLink` or other JSX (HTML), in that case wrap the contents with the <Wrapper> component.
      name: 'Use core abilities as often as possible',
      // The description that is shown when the Rule is expanded.
      // Avoid making too many things a URL. Including a link to a guide that goes into further detail is recommended.
      description: (
        <Wrapper>
          Spells such as <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} icon />, <SpellLink id={SPELLS.LIGHT_OF_DAWN_CAST.id} icon /> and <SpellLink id={SPELLS.JUDGMENT_CAST.id} icon /> (with <SpellLink id={SPELLS.JUDGMENT_OF_LIGHT_HEAL.id} icon />) are your most efficient spells available. Try to cast them as much as possible without overhealing. <dfn data-tip="When you're not bringing too many healers.">On Mythic*</dfn> you can often still cast these spells more even if you were overhealing by casting it quicker when it comes off cooldown and improving your target selection. <a href="https://www.wowhead.com/holy-paladin-rotation-guide#gameplay-and-priority-list" target="_blank" rel="noopener noreferrer">More info.</a>
        </Wrapper>
      ),
      // The list of requirements for the Rule. Since it's a method you can run any code in here you want, but please try to keep is as simple as possible.
      requirements: () => {
        const combatant = this.combatants.selected;
        return [
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.HOLY_SHOCK_CAST,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.LIGHT_OF_DAWN_CAST,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.JUDGMENT_CAST,
            when: combatant.hasTalent(SPELLS.JUDGMENT_OF_LIGHT_TALENT.id) || combatant.hasFinger(ITEMS.ILTERENDI_CROWN_JEWEL_OF_SILVERMOON.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.BESTOW_FAITH_TALENT,
            when: combatant.hasTalent(SPELLS.BESTOW_FAITH_TALENT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.LIGHTS_HAMMER_TALENT,
            when: combatant.hasTalent(SPELLS.LIGHTS_HAMMER_TALENT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.CRUSADER_STRIKE,
            when: combatant.hasTalent(SPELLS.CRUSADERS_MIGHT_TALENT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.HOLY_PRISM_TALENT,
            when: combatant.hasTalent(SPELLS.HOLY_PRISM_TALENT.id),
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
            spell: SPELLS.AVENGING_WRATH,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.HOLY_AVENGER_TALENT,
            when: combatant.hasTalent(SPELLS.HOLY_AVENGER_TALENT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.TYRS_DELIVERANCE_CAST,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.VELENS_FUTURE_SIGHT_BUFF,
            when: combatant.hasTrinket(ITEMS.VELENS_FUTURE_SIGHT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.AURA_MASTERY,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.ARCANE_TORRENT_MANA,
            when: !!this.castEfficiency.getCastEfficiencyForSpellId(SPELLS.ARCANE_TORRENT_MANA.id),
          }),
        ];
      },
    }),
    new Rule({
      name: 'Use your supportive abilities',
      description: <Wrapper>While you shouldn't aim to cast defensives and externals on cooldown, be aware of them and try to use them whenever effective. Not using them at all indicates you might not be aware of them enough.</Wrapper>,
      requirements: () => {
        const combatant = this.combatants.selected;
        return [
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.RULE_OF_LAW_TALENT,
            when: combatant.hasTalent(SPELLS.RULE_OF_LAW_TALENT.id),
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.DIVINE_STEED,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.DIVINE_PROTECTION,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.BLESSING_OF_SACRIFICE,
          }),
          new GenericCastEfficiencyRequirement({
            spell: SPELLS.LAY_ON_HANDS,
          }),
        ];
      },
    }),
    new Rule({
      name: <Wrapper>Position yourself well to maximize <SpellLink id={SPELLS.MASTERY_LIGHTBRINGER.id} icon /></Wrapper>,
      description: <Wrapper><SpellLink id={SPELLS.MASTERY_LIGHTBRINGER.id} icon /> has a big impact on the strength of your heals. Try to stay close to the people you are healing to benefit the most from your Mastery. Use <SpellLink id={SPELLS.RULE_OF_LAW_TALENT.id} /> when healing people further away.</Wrapper>,
      requirements: () => {
        return [
          new Requirement({
            name: 'Mastery effectiveness',
            check: () => this.masteryEffectiveness.suggestionThresholds,
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
            name: 'Non healing time',
            check: () => this.alwaysBeCasting.nonHealingTimeSuggestionThresholds,
          }),
          new Requirement({
            name: 'Downtime',
            check: () => this.alwaysBeCasting.downtimeSuggestionThresholds,
          }),
        ];
      },
    }),
    new Rule({
      name: 'Don\'t tunnel the tanks',
      description: 'A common misconception when it is stated that Holy Paladins are tank healers is that we focus tanks when healing. This is actually inefficient. Let your beacons do most of the work, ask your co-healers to keep efficient HoTs on the tanks and only directly heal the tanks when they would otherwise die.',
      requirements: () => {
        return [
          new Requirement({
            name: 'Direct beacon healing',
            check: () => this.beaconHealing.suggestionThresholds,
          }),
        ];
      },
    }),
    new Rule({
      name: <Wrapper>Only use <SpellLink id={SPELLS.LIGHT_OF_THE_MARTYR.id} icon /> when absolutely necessary</Wrapper>,
      description: <Wrapper><SpellLink id={SPELLS.LIGHT_OF_THE_MARTYR.id} icon /> is an inefficient spell to cast compared to the alternatives. Try to only cast <SpellLink id={SPELLS.LIGHT_OF_THE_MARTYR.id} icon /> when it will save someone's life or when moving and all other instant cast spells are on cooldown.</Wrapper>,
      requirements: () => {
        return [
          new Requirement({
            name: 'Total filler casts per minute',
            check: () => this.fillerLightOfTheMartyrs.cpmSuggestionThresholds,
          }),
          new Requirement({
            name: <Wrapper>Total filler casts while <SpellLink id={SPELLS.HOLY_SHOCK_CAST.id} icon /> was available</Wrapper>,
            check: () => this.fillerLightOfTheMartyrs.inefficientCpmSuggestionThresholds,
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
      name: 'Pick the right tools for the fight',
      description: 'The throughput gain of some talents or legendaries might vary greatly. Consider switching to a more reliable alternative if something is underperforming regularly.',
      requirements: () => {
        return [
          new Requirement({
            name: <SpellLink id={SPELLS.AURA_OF_SACRIFICE_TALENT.id} icon />,
            check: () => this.auraOfSacrifice.suggestionThresholds,
            when: this.auraOfSacrifice.active,
          }),
          new Requirement({
            name: <ItemLink id={ITEMS.ILTERENDI_CROWN_JEWEL_OF_SILVERMOON.id} icon />,
            check: () => this.ilterendi.suggestionThresholds,
            when: this.ilterendi.active,
          }),
          new Requirement({
            name: <ItemLink id={ITEMS.VELENS_FUTURE_SIGHT.id} icon />,
            check: () => this.velens.suggestionThresholds,
            when: this.velens.active,
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
    new Rule({
      name: 'Avoid overhealing',
      description: 'Pick the right targets when healing and use the right abilities at the right time. While overhealing still transfers to your beacons it remains inefficient. Overhealing might be unavoidable on trivial content or when bringing too many healers.',
      requirements: () => {
        const combatant = this.combatants.selected;
        return [
          new Requirement({
            name: <SpellLink id={SPELLS.HOLY_SHOCK_HEAL.id} icon />,
            check: () => this.overhealing.holyShockSuggestionThresholds,
          }),
          new Requirement({
            name: <SpellLink id={SPELLS.LIGHT_OF_DAWN_HEAL.id} icon />,
            check: () => this.overhealing.lightOfDawnSuggestionThresholds,
          }),
          new Requirement({
            name: <SpellLink id={SPELLS.FLASH_OF_LIGHT.id} icon />,
            check: () => this.overhealing.flashOfLightSuggestionThresholds,
          }),
          new Requirement({
            name: <SpellLink id={SPELLS.BESTOW_FAITH_TALENT.id} icon />,
            check: () => this.overhealing.bestowFaithSuggestionThresholds,
            when: combatant.hasTalent(SPELLS.BESTOW_FAITH_TALENT.id),
          }),
        ];
      },
    }),
  ];
}

export default Checklist;
