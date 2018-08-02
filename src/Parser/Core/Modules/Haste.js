import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';
import { formatMilliseconds, formatPercentage } from 'common/format';

import Analyzer from 'Parser/Core/Analyzer';
import StatTracker from 'Parser/Core/Modules/StatTracker';
import { HIGH_TOLERANCE_HASTE_FNS } from 'Parser/Monk/Brewmaster/Modules/Spells/HighTolerance';
import BLOODLUST_BUFFS from 'Parser/Core/Constants/BLOODLUST_BUFFS';

const debug = false;

class Haste extends Analyzer {
  static dependencies = {
    statTracker: StatTracker,
  };

  // TODO: Maybe extract "time" changing abilities since they also scale the minimum GCD cap? Probably better to dive into the tooltips to find out how the stat that does that is actually called. Spell Haste, Casting Speed, Attack Speed, Haste, ... are all different variants that look like Haste but act different.
  // TODO: Support time freeze kinda effects, like Elisande's Time Stop or unavoidable stuns?
  /* eslint-disable no-useless-computed-key */
  static HASTE_BUFFS = {
    ...BLOODLUST_BUFFS,
    [SPELLS.HOLY_AVENGER_TALENT.id]: 0.3,
    [SPELLS.BERSERKING.id]: 0.15,
    [SPELLS.WARLOCK_AFFLI_T20_4P_BUFF.id]: 0.1,
    [SPELLS.WARLOCK_DEMO_T20_4P_BUFF.id]: 0.1,
    [SPELLS.TRUESHOT.id]: 0.3, // MM Hunter main CD
    [SPELLS.ICY_VEINS.id]: 0.3,
    [SPELLS.IN_FOR_THE_KILL_TALENT_BUFF.id]: 0.1,
    [SPELLS.BONE_SHIELD.id]: 0.1, // Blood BK haste buff from maintaining boneshield
    ...HIGH_TOLERANCE_HASTE_FNS,
    [SPELLS.METAMORPHOSIS_HAVOC_BUFF.id]: 0.25,
    [SPELLS.HAVOC_T21_4PC_BUFF.id]: 0.25,
    [SPELLS.DIRE_BEAST_BUFF.id]: 0.1,
    [SPELLS.DARK_SOUL_MISERY_TALENT.id]: 0.3,
    [SPELLS.REVERSE_ENTROPY_BUFF.id]: 0.15,
    [SPELLS.ENRAGE.id]: 0.25, // Fury Warrior
    [SPELLS.FROTHING_BERSERKER.id]: 0.05, // Fury Warrior
    [SPELLS.CELERITY_OF_THE_WINDRUNNERS_BUFF.id]: 0.03, //3% haste hunter legendary
    [SPELLS.QUICK_THINKER_BUFF.id]: 0.15,
    // Haste RATING buffs are handled by the StatTracker module

    // Boss abilities:
    [209166]: 0.3, // DEBUFF - Fast Time from Elisande
    [209165]: -0.3, // DEBUFF - Slow Time from Elisande
    // [208944]: -Infinity, // DEBUFF - Time Stop from Elisande
    [SPELLS.SEPHUZS_SECRET_BUFF.id]: 0.25 - 0.02, // 2% is already applied as base
  };

  current = null;
  constructor(...args) {
    super(...args);
    this.current = this.statTracker.currentHastePercentage;
    debug && console.log(`Haste: Starting haste: ${formatPercentage(this.current)}%`);
    this._triggerChangeHaste(null, null, this.current);

    // TODO: Move this to the Sephuz module
    if (this.selectedCombatant.hasFinger(ITEMS.SEPHUZS_SECRET.id)) {
      // Sephuz Secret provides a 2% Haste gain on top of its secondary stats
      this._applyHasteGain(null, 0.02);
    }
  }
  on_toPlayer_applybuff(event) {
    this._applyActiveBuff(event);
  }
  on_toPlayer_changebuffstack(event) {
    this._changeBuffStack(event);
  }
  on_toPlayer_removebuff(event) {
    this._removeActiveBuff(event);
  }
  on_toPlayer_applydebuff(event) {
    this._applyActiveBuff(event);
  }
  on_toPlayer_changedebuffstack(event) {
    this._changeBuffStack(event);
  }
  on_toPlayer_removedebuff(event) {
    this._removeActiveBuff(event);
  }

  on_toPlayer_changestats(event) { // fabbed event from StatTracker
    if (!event.delta.haste) {
      return;
    }

    // Calculating the Haste percentage difference form a rating change is hard because all rating (from gear + buffs) is additive while Haste percentage buffs are both multiplicative and additive (see the applyHaste function).
    // 1. Calculate the total Haste percentage without any rating (since the total percentage from the total rating multiplies like any other Haste buff)
    const remainingHasteBuffs = this.constructor.removeHaste(this.current, this.statTracker.hastePercentage(event.before.haste, true));
    // 2. Calculate the new total Haste percentage with the new rating and the old total buff percentage
    const newHastePercentage = this.constructor.addHaste(this.statTracker.hastePercentage(event.after.haste, true), remainingHasteBuffs);

    this._setHaste(event, newHastePercentage);

    if (debug) {
      const spellName = event.trigger.ability ? event.trigger.ability.name : 'unknown';
      console.log(`Haste: Current haste: ${formatPercentage(this.current)}% (haste RATING changed by ${event.delta.haste} from ${spellName})`);
    }
  }

  _applyActiveBuff(event) {
    const spellId = event.ability.guid;
    const hasteGain = this._getBaseHasteGain(spellId);

    if (hasteGain) {
      this._applyHasteGain(event, hasteGain);

      debug && console.log(formatMilliseconds(this.owner.fightDuration), 'Haste:', 'Current haste:', `${formatPercentage(this.current)}%`, `(gained ${formatPercentage(hasteGain)}% from ${event.ability.name})`);
    } else {
      debug && console.warn(formatMilliseconds(this.owner.fightDuration), 'Haste: Applied not recognized buff:', event.ability.name);
    }
  }
  _removeActiveBuff(event) {
    const spellId = event.ability.guid;
    const haste = this._getBaseHasteGain(spellId);

    if (haste) {
      this._applyHasteLoss(event, haste);

      debug && console.log(`Haste: Current haste: ${formatPercentage(this.current)}% (lost ${formatPercentage(haste)}% from ${SPELLS[spellId] ? SPELLS[spellId].name : spellId})`);
    } else {
      debug && console.warn(formatMilliseconds(this.owner.fightDuration), 'Haste: Removed not recognized buff:', event.ability.name);
    }
  }
  /**
   * Gets the base Haste gain for the provided spell.
   */
  _getBaseHasteGain(spellId) {
    const hasteBuff = this.constructor.HASTE_BUFFS[spellId] || undefined;

    if (typeof hasteBuff === 'number') {
      // A regular number is a static Haste percentage
      return hasteBuff;
    } else if (typeof hasteBuff === 'object') {
      // An object can provide more info
      if (hasteBuff.haste) {
        return this._getHasteValue(hasteBuff.haste, hasteBuff);
      }
    }
    return null;
  }

  _changeBuffStack(event) {
    const spellId = event.ability.guid;
    const haste = this._getHastePerStackGain(spellId);

    if (haste) {
      // Haste stacks are additive, so at 5 stacks with 3% per you'd be at 15%, 6 stacks = 18%. This means the only right way to add a Haste stack is to reset to Haste without the old total and then add the new total Haste again.
      // 1. Calculate the total Haste percentage without the buff
      const baseHaste = this.constructor.removeHaste(this.current, event.oldStacks * haste);
      // 2. Calculate the new total Haste percentage with the Haste from the new amount of stacks
      const newHastePercentage = this.constructor.addHaste(baseHaste, event.newStacks * haste);

      this._setHaste(event, newHastePercentage);

      debug && console.log(`Haste: Current haste: ${formatPercentage(this.current)}% (gained ${formatPercentage(haste * event.stacksGained)}% from ${SPELLS[spellId] ? SPELLS[spellId].name : spellId})`);
    }
  }
  _getHastePerStackGain(spellId) {
    const hasteBuff = this.constructor.HASTE_BUFFS[spellId] || undefined;

    if (typeof hasteBuff === 'number') {
      // hasteBuff being a number is shorthand for static haste only
    } else if (typeof hasteBuff === 'object') {
      if (hasteBuff.hastePerStack) {
        return this._getHasteValue(hasteBuff.hastePerStack, hasteBuff);
      }
    }
    return null;
  }
  /**
   * Get the actual Haste value from a prop allowing various formats.
   */
  _getHasteValue(value, hasteBuff) {
    const { itemId } = hasteBuff;
    if (typeof value === 'function') {
      const selectedCombatant = this.selectedCombatant;
      let itemDetails;
      if (itemId) {
        itemDetails = selectedCombatant.getItem(itemId);
        if (!itemDetails) {
          console.error('Failed to retrieve item information for item with ID:', itemId);
        }
      }
      return value(selectedCombatant, itemDetails);
    }
    return value;
  }

  _applyHasteGain(event, haste) {
    this._setHaste(event, this.constructor.addHaste(this.current, haste));
  }
  _applyHasteLoss(event, haste) {
    this._setHaste(event, this.constructor.removeHaste(this.current, haste));
  }
  _setHaste(event, haste) {
    const oldHaste = this.current;
    this.current = haste;

    this._triggerChangeHaste(event, oldHaste, this.current);
  }
  _triggerChangeHaste(event, oldHaste, newHaste) {
    const fabricatedEvent = {
      type: 'changehaste',
      sourceID: event ? event.sourceID : this.owner.playerId,
      targetID: this.owner.playerId,
      oldHaste,
      newHaste,
    };
    debug && console.log('changehaste', fabricatedEvent);
    this.owner.fabricateEvent(fabricatedEvent, event);
  }

  static addHaste(baseHaste, hasteGain) {
    return baseHaste * (1 + hasteGain) + hasteGain;
  }
  static removeHaste(baseHaste, hasteLoss) {
    return (baseHaste - hasteLoss) / (1 + hasteLoss);
  }
}

export default Haste;
