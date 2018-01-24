import SPELLS from 'common/SPELLS';
import { formatMilliseconds, formatPercentage } from 'common/format';
import CoreHaste from 'Parser/Core/Modules/Haste';

const debug = false;

const VOIDFORM_HASTE_PER_STACK = 0.01;

class Haste extends CoreHaste {
  _highestVoidformStack = 0;
  _highestLingeringStack = 0;

  on_toPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.LINGERING_INSANITY.id) {
      this._highestLingeringStack = this._highestVoidformStack;
      this._highestVoidformStack = 0;
      return;
    }

    if (spellId === SPELLS.VOIDFORM_BUFF.id) {
      this._highestVoidformStack = 1;
      this._applyHasteGain(event, this._highestVoidformStack * VOIDFORM_HASTE_PER_STACK);
      debug && console.log(`ABC: Current haste: ${this.current} (gained ${VOIDFORM_HASTE_PER_STACK * this._highestVoidformStack} from VOIDFORM_BUFF)`, event.timestamp);
      return;
    }

    // if (spellId === SPELLS.VOID_TORRENT.id) {
    //   return;
    // }

    super.on_toPlayer_applybuff && super.on_toPlayer_applybuff(event);
  }

  on_toPlayer_applybuffstack(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.VOIDFORM_BUFF.id) {
      const oldStacks = this._highestVoidformStack;
      const newStacks = event.stack;
      this._highestVoidformStack = newStacks;

      // Haste stacks are additive, so at 5 stacks with 3% per you'd be at 15%, 6 stacks = 18%. This means the only right way to add a Haste stack is to reset to Haste without the old total and then add the new total Haste again.
      // 1. Calculate the total Haste percentage without the buff
      const baseHaste = this.constructor.removeHaste(this.current, oldStacks * VOIDFORM_HASTE_PER_STACK);
      // 2. Calculate the new total Haste percentage with the Haste from the new amount of stacks
      const newHastePercentage = this.constructor.addHaste(baseHaste, newStacks * VOIDFORM_HASTE_PER_STACK);

      this._setHaste(event, newHastePercentage);

      if (debug) {
        const fightDuration = formatMilliseconds(this.owner.fightDuration);
        console.log(`%c${[
          'Haste:',
          fightDuration,
          `+0.01 from VOIDFORM_BUFF (now ${event.stack} stacks)`,
          'current:', `${formatPercentage(this.current)}%`,
        ].join('  ')}`, `color: green`);
      }
    }

    super.on_toPlayer_applybuffstack && super.on_toPlayer_applybuffstack(event);
  }

  on_toPlayer_removebuff(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.VOIDFORM_BUFF.id) {
      this._highestLingeringStack = this._highestVoidformStack;
      if (debug) {
        const fightDuration = formatMilliseconds(this.owner.fightDuration);
        console.log(`%c${[
          'Haste:',
          fightDuration,
          `TRANSFORMED VOIDFORM BUFFS TO LINGERING INSANITY BUFFS (${this._highestLingeringStack} stacks)`,
          'current:', `${formatPercentage(this.current)}%`,
        ].join('  ')}`, `color: orange`);
      }
      return;
    }

    if (spellId === SPELLS.LINGERING_INSANITY.id) {
      // last 1-2 stacks doesn't trigger removebuffstack, so it gets handled here:
      this._applyHasteLoss(event, this._highestLingeringStack * VOIDFORM_HASTE_PER_STACK);
      if (debug) {
        const fightDuration = formatMilliseconds(this.owner.fightDuration);
        console.log(`%c${[
          'Haste:',
          fightDuration,
          `-0.0${this._highestLingeringStack} from LINGERING_INSANITY (now 0 stacks)`,
          'current:', `${formatPercentage(this.current)}%`,

        ].join('  ')}`, `color: orange`);
      }
      return;
    }

    super.on_toPlayer_removebuff && super.on_toPlayer_removebuff(event);
  }

  on_toPlayer_removebuffstack(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.LINGERING_INSANITY.id) {
      const oldStacks = this._highestLingeringStack;
      const newStacks = event.stack;
      this._highestLingeringStack = newStacks;

      // Haste stacks are additive, so at 5 stacks with 3% per you'd be at 15%, 6 stacks = 18%. This means the only right way to add a Haste stack is to reset to Haste without the old total and then add the new total Haste again.
      // 1. Calculate the total Haste percentage without the buff
      const baseHaste = this.constructor.removeHaste(this.current, oldStacks * VOIDFORM_HASTE_PER_STACK);
      // 2. Calculate the new total Haste percentage with the Haste from the new amount of stacks
      const newHastePercentage = this.constructor.addHaste(baseHaste, newStacks * VOIDFORM_HASTE_PER_STACK);

      this._setHaste(event, newHastePercentage);

      if (debug) {
        const fightDuration = formatMilliseconds(this.owner.fightDuration);
        console.log(`%c${[
          'Haste:',
          fightDuration,
          `-0.02 from LINGERING_INSANITY (now ${this._highestLingeringStack} stacks)`,
          'current:', `${formatPercentage(this.current)}%`,

        ].join('  ')}`, `color: orange`);
      }
      return;
    }

    super.on_toPlayer_removebuffstack && super.on_toPlayer_removebuffstack(event);
  }

}

export default Haste;
