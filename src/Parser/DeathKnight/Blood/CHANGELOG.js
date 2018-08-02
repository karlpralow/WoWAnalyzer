import React from 'react';

import { Gebuz, joshinator, Yajinni } from 'CONTRIBUTORS';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-08-1'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.BONES_OF_THE_DAMNED.id} />-Module.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-07-19'),
    changes: <React.Fragment>Updated <SpellLink id={SPELLS.FOUL_BULWARK_TALENT.id} /> to its new reduced value.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-18'),
    changes: <React.Fragment>Removed old legion traits/talents/abilities.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-22'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.RUNE_STRIKE_TALENT.id} />-Module in anticipation for BFA, adjusted <SpellLink id={SPELLS.HEMOSTASIS_TALENT.id} /> to 8% per stack, readded <SpellLink id={SPELLS.OSSUARY_TALENT.id} /> and removed Blood Mirror.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-05-01'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.VORACIOUS_TALENT.id} />-Module in anticipation for BFA.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-04-30'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.TOMBSTONE_TALENT.id} />-Module in anticipation for BFA.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-04-30'),
    changes: <React.Fragment>Added suggestion for <SpellLink id={SPELLS.DEATHS_CARESS.id} /> overusage.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-04-30'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.FOUL_BULWARK_TALENT.id} />-Module and a more detailed breakdown for <SpellLink id={SPELLS.BONE_SHIELD.id} />.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-04-30'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.HEARTBREAKER_TALENT.id} />-Module + suggestion.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-04-28'),
    changes: <React.Fragment>Updated <SpellLink id={SPELLS.BLOODDRINKER_TALENT.id} /> with DPS/HPS values.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-04-27'),
    changes: <React.Fragment>Added support for <SpellLink id={SPELLS.BLOODWORMS_TALENT.id} />.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-04-22'),
    changes: <React.Fragment>Updated relic stat calculations.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-04-22'),
    changes: <React.Fragment>Added proper tracking of <SpellLink id={SPELLS.MARK_OF_BLOOD_TALENT.id} /> and fixed errors associated with it.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-03-24'),
    changes: <React.Fragment>Check for bad casts during <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} /> and intital <SpellLink id={SPELLS.MARROWREND.id} /> cast without <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} />.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-22'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.BONESTORM_TALENT.id} />-Module to track bad casts</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-17'),
    changes: <React.Fragment>Updated the <SpellLink id={SPELLS.BONE_SHIELD.id} />-Module.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-15'),
    changes: <React.Fragment>Added Relic-Module.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-14'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.SOULDRINKER_TRAIT.id} />-Module to track the average HP-bonus.</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-11'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.MARROWREND.id} />-Module to track bad casts</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-10'),
    changes: <React.Fragment>Made <SpellLink id={SPELLS.OSSUARY_TALENT.id} />-Module more detailed by adding a RP counter</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-10'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.DEATH_STRIKE.id} /> Timing plot</React.Fragment>,
    contributors: [joshinator],
  },
  {
    date: new Date('2018-03-04'),
    changes: 'Added Tier 21 bonuses.',
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-02-17'),
    changes: <React.Fragment>Added cooldown reduction from <SpellLink id={SPELLS.RED_THIRST_TALENT.id} />.</React.Fragment>,
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-02-14'),
    changes: <React.Fragment>Updated the checklist and added Rune efficiency, <SpellLink id={SPELLS.DEATH_AND_DECAY.id} /> and Blood Tap to it.</React.Fragment>,
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-01-27'),
    changes: 'Added overcapped Runes.',
    contributors: [Gebuz],
  },
  {
    date: new Date('2018-01-22'),
    changes: <React.Fragment>Large rework of listing abilities. Updated thier GCD/CD status. Most abilities now show in the time line and cast efficiency tabs. Updated the checklist.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-22'),
    changes: <React.Fragment>Implemented <ItemLink id={ITEMS.SHACKLES_OF_BRYNDAOR.id} /> Blood wrist legendary.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <React.Fragment>Updates to Downtime/ABC ratios.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <React.Fragment>Implemented <ItemLink id={ITEMS.SKULLFLOWERS_HAEMOSTASIS.id} /> Blood shoulder legendary.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-21'),
    changes: <React.Fragment>Reworked the <SpellLink id={SPELLS.UNENDING_THIRST.id} /> Module.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-01-20'),
    changes: <React.Fragment>Implemented <ItemLink id={ITEMS.AGGRAMARS_CONVICTION.id} /> Pantheon Tank trinket.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-12-26'),
    changes: <React.Fragment>Implemented the new Checklist format.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-11-19'),
    changes: <React.Fragment>Added tracking for <SpellLink id={SPELLS.UNENDING_THIRST.id} /> / Empowered Death Strikes.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-10-23'),
    changes: <React.Fragment>Filtered some unnecessary spells from the Cooldown Tab.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-10-03'),
    changes: <React.Fragment>Updated cast efficency ratios and text. Added <SpellLink id={SPELLS.VAMPIRIC_BLOOD.id} /> and <SpellLink id={SPELLS.DANCING_RUNE_WEAPON.id} /> to the Cooldown Tab for further analysis.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-14'),
    changes: <React.Fragment>Added runic power graphs/table.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-12'),
    changes: <React.Fragment>Added Tier 20 2pc and 4pc tracking. Talent checking/filtering.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-09'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.BLOODDRINKER_TALENT.id} />r tracking.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-07'),
    changes: <React.Fragment>Updated haste calculates for spells. Added <SpellLink id={SPELLS.BONE_SHIELD.id} /> haste buff.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-04'),
    changes: <React.Fragment>Initial Blood Death Knight.</React.Fragment>,
    contributors: [Yajinni],
  },
];
