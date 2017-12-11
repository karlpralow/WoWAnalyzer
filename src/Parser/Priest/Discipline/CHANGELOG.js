
import React from 'react';

import { Oratio, Gao, Reglitch, hassebewlen, Zerotorescue, milesoldenburg } from 'MAINTAINERS';

import Wrapper from 'common/Wrapper';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2017-12-07'),
    changes: 'Added healing per penance bolt in Atonement Source Tab.',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-12-01'),
    changes: <Wrapper>Added Support for <ItemLink id={ITEMS.CARAFE_OF_SEARING_LIGHT.id} />.</Wrapper>,
    contributors: [Oratio],
  },
  {
    date: new Date('2017-11-15'),
    changes: <Wrapper>Moved <ItemLink id={ITEMS.SOUL_OF_THE_HIGH_PRIEST.id} /> value to show the talent <SpellLink id={SPELLS.TWIST_OF_FATE_TALENT.id} /></Wrapper>,
    contributors: [Gao],
  },
  {
    date: new Date('2017-11-15'),
    changes: 'Added a absolute healing toggle in atonement sources',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-10-13'),
    changes: 'Fixed a bug with some trinket damage events causing a crash.',
    contributors: [Gao],
  },
  {
    date: new Date('2017-11-10'),
    changes: 'Added T21 4pc bonus.',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-11-01'),
    changes: 'Added T21 2pc bonus.',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-11-02'),
    changes: <Wrapper>Added <ItemLink id={ITEMS.ESTEL_DEJAHNAS_INSPIRATION.id} /> Avg Haste bug</Wrapper>,
    contributors: [Gao],
  },
  {
    date: new Date('2017-10-27'),
    changes: 'Refactored disc module.',
    contributors: [Gao],
  },
  {
    date: new Date('2017-10-26'),
    changes: 'Adjusted the T20 2pc bonus for the recent nerfs.',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-10-27'),
    changes: 'Added an atonement normalizer to fix atonement ordering issues.',
    contributors: [Oratio],
  },
  {
    date: new Date('2017-10-16'),
    changes: 'Fixed T20 4pc bug, added a suggestion to utilise the buff.',
    contributors: [Reglitch],
  },
  {
    date: new Date('2017-09-15'),
    changes: 'Pet damage is now also taken into consideration for Atonement damage source.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-14'),
    changes: 'Fix issue where friendly fire damage was considered a valid Atonement damage source.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-14'),
    changes: 'Added atonement sources breakdown. This isn\'t very accurate yet, it\'s just showing the way it\'s assigned right now. Improved accuracy will come later.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-22'),
    changes: <Wrapper>Added mana saved from the legendary <ItemLink id={ITEMS.INNER_HALLATION.id} />.</Wrapper>,
    contributors: [hassebewlen],
  },
  {
    date: new Date('2017-06-18'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.TOUCH_OF_THE_GRAVE.id} /> statistic.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-17'),
    changes: <Wrapper><SpellLink id={SPELLS.EVANGELISM_TALENT.id} /> casts are now also shown under the cooldowns tab. <SpellLink id={SPELLS.RAPTURE.id} /> now shows the total abosrbs applied and the amount of damage absorbed. Fixed a few issues that caused too much healing to be assigned to <SpellLink id={SPELLS.EVANGELISM_TALENT.id} />.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-15'),
    changes: <Wrapper>Fixed Wasted Penance bolts always assumed user had the <SpellLink id={SPELLS.CASTIGATION_TALENT.id} /> talent.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-15'),
    changes: 'Disabled suggestions for Pain Suppression and Power Word: Barrier.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-11'),
    changes: 'Added extra suggestion to Power Word: Shield description to add distinction to casts during Rapture.',
    contributors: [milesoldenburg],
  },
  {
    date: new Date('2017-06-05'),
    changes: 'Fix Atonement duration in cast efficiency not accounting for the Doomsayer trait.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-29'),
    changes: 'Show Rapture PW:S casts seperate from regular PW:S casts in Cast Efficiency.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-28'),
    changes: 'Added unused Power Word: Shield absorb statistic',
    contributors: [],
  },
  {
    date: new Date('2017-05-25'),
    changes: 'Added <i>Early Atonement refreshes</i> statistic. Fixed Skjoldr sometimes not working properly. Both contributions were created by <b>@Shadowdrizz</b>. Thanks a lot for your contribution! Fix Shadowfiend showing with the Mindbender talent.',
    contributors: [],
  },
  {
    date: new Date('2017-05-18'),
    changes: 'Added Shadow Word: Pain/Purge the Wicked global uptime statistic.',
    contributors: [],
  },
  {
    date: new Date('2017-05-17'),
    changes: 'Added Twist of Fate healing statistic (damage gain is in the tooltip).',
    contributors: [],
  },
  {
    date: new Date('2017-05-16'),
    changes: 'Added Darkmoon Deck: Promises statistic. Added Light\'s Wrath to cast efficiency. Changed Pain Suppression cooldown to take into account the Pain is in your Mind trait.',
    contributors: [],
  },
  {
    date: new Date('2017-05-16'),
    changes: 'Added N\'ero, Band of Promises statistic.',
    contributors: [],
  },
  {
    date: new Date('2017-05-15'),
    changes: 'Added Xalan the Feared\'s Clench statistic.',
    contributors: [],
  },
  {
    date: new Date('2017-05-15'),
    changes: 'Skjoldr, Sanctuary of Ivagont statistic now includes the healing gained via Share in the Light.',
    contributors: [],
  },
  {
    date: new Date('2017-05-14'),
    changes: 'Added Skjoldr, Sanctuary of Ivagont statistic. This does not yet include the healing gained via Share in the Light.',
    contributors: [],
  },
  {
    date: new Date('2017-05-14'),
    changes: 'Added Cord of Maiev, Priestess of the Moon statistic.',
    contributors: [],
  },
  {
    date: new Date('2017-05-14'),
    changes: 'Added Disc Priest 2 set bonus statistic.',
    contributors: [],
  },
  {
    date: new Date('14-05-2017-05-14'),
    changes: 'Renamed <i>Missed penance hits</i> to <i>Wasted Penance bolts</i>. <i>Wasted Penance bolts</i> now accounts for (combat log) latency. Fixed Glyph of the Sha\'s Shadowfiend not being counted towards Shadowfiend casts. Fixed healing increases (most notably the 15% from Velen\'s) not working with Disc priest spells.',
    contributors: [],
  },
  {
    date: new Date('2017-06-05'),
    changes: 'Discipline Priest: Fixed issue where critical atonement healing was not being counted, fixed Nero\'s Band of Promises being broken. (By Reglitch)',
    contributors: [],
  },
  {
    date: new Date('2017-05-14'),
    changes: 'Added Discipline Priest spec. Currently includes basic statistics for Dead GCD time (should be fully operational), shared legendaries, missed Penance hits, cast efficiencies and the other build in tools.',
    contributors: [],
  },
];
