import SPELLS from 'common/SPELLS';

/*
 * Fields:
 * int: spell scales with Intellect
 * crit: spell scales with (is able to or procced from) Critical Strike
 * hasteHpm: spell does more healing due to Haste, e.g. HoTs that gain more ticks
 * hasteHpct: spell can be cast more frequently due to Haste, basically any spell except for non haste scaling CDs
 * mastery: spell is boosted by Mastery
 * masteryStack: spell's HoT counts as a Mastery Stack
 * vers: spell scales with Versatility
 * multiplier: spell scales with whatever procs it, should be ignored for purpose of weights and for 'total healing' number
 * ignored: spell should be ignored for purpose of stat weights
 */

// This only works with actual healing events; casts are not recognized.
export default {
  [SPELLS.LIGHTS_EMBRACE_HEALING.id]: { // Sea Star of the Depthmother
    int: false,
    crit: true,
    hasteHpct: true, // until LoD's CD is below 8 sec, this speeds up the deck cycle time
    mastery: false,
    vers: true,
  },
  [SPELLS.GUIDING_HAND.id]: { // The Deceiver's Grand Design
    int: false,
    crit: true,
    hasteHpct: false, // static CD
    mastery: false,
    vers: true,
  },
  [SPELLS.LEECH.id]: { // procs a percent of all your healing, so we ignore for weights and total healing
    multiplier: true,
  },
  [SPELLS.VELENS_FUTURE_SIGHT.id]: { // while active procs from any healing, so we ignore for weights and total healing
    multiplier: true,
  },
};
