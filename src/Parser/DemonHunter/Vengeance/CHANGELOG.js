import React from 'react';

import { Yajinni, Mamtooth } from 'CONTRIBUTORS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-08-01'),
    changes: <React.Fragment>Implemented Checklist feature.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2018-07-2'),
    changes: <React.Fragment>Added module to show how many <SpellLink id={SPELLS.SPIRIT_BOMB_TALENT.id} /> casts were good.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-28'),
    changes: <React.Fragment>Added new spells and talents.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2018-07-25'),
    changes: <React.Fragment>Reworked soul fragment tracking code to make it more versatile. Added a consumed souls module that shows how/what spells were used to consume souls.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-23'),
    changes: <React.Fragment>Updated the wasted soul fragments tracker. Its now sould fragments inefficienctly used and it's info is clearer.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-23'),
    changes: <React.Fragment>Added <SpellLink id={SPELLS.FRACTURE_TALENT.id} /> casts to suggestions.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-22'),
    changes: <React.Fragment>Reworked <SpellLink id={SPELLS.DEMON_SPIKES.id} /> module to show stats/suggestion based on the physical hits you mitgated instead of cast efficiency.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-07-21'),
    changes: <React.Fragment>Cleaned up spells and traits. Removed old/outdated ones and updated the changed ones. No longer crashes due to prepatch.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-18'),
    changes: <React.Fragment>Added death recap tab and defensive abilities tracking.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-10'),
    changes: <React.Fragment>Reworked Empower Wards to show damage mitigated and if it was avalible to be used.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-10'),
    changes: <React.Fragment>Reworked <SpellLink id={SPELLS.SIGIL_OF_FLAME_CONCENTRATED.id} /> to show damage and if its stacked.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-05'),
    changes: <React.Fragment>Added more spell suggestions.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-05'),
    changes: <React.Fragment>Updated <SpellLink id={SPELLS.DEMON_SPIKES.id} /> module to track hits taken while debuff is up and missed uses.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-04'),
    changes: <React.Fragment>Added tracking of Pain management/waste and a new Pain Usage Tab.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-04'),
    changes: <React.Fragment>Added tracking of <SpellLink id={SPELLS.PAINBRINGER.id} /> uptime and stacks.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2018-05-03'),
    changes: <React.Fragment>Added tracking of <SpellLink id={SPELLS.SOUL_BARRIER_TALENT.id} /> uptime and damage/healing stats.</React.Fragment>,
    contributors: [Yajinni],
  },
  {
    date: new Date('2017-09-03'),
    changes: 'Changed the Github link for the issues of Vengeance spec.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-02'),
    changes: 'Pain chart now displays a error message for corrupted logs.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-10-13'),
    changes: 'Pain chart bug fix.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-10-12'),
    changes: <React.Fragment>Cooldown tab for <SpellLink id={SPELLS.METAMORPHOSIS_TANK.id} /> is now implemented.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-10-12'),
    changes: 'Updated \'More Information\' tab, with introduction text and links.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-23'),
    changes: 'Tier 20 - 2 and 4 piece bonus is now being tracked.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-16'),
    changes: 'Created a Soul Fragments tracker (with total generated/spent/wasted/unused) and improvement suggestion for wasted Soul Fragments.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-16'),
    changes: <React.Fragment><SpellLink id={SPELLS.SPIRIT_BOMB_TALENT.id} /> is now on statistics boxes too.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-09'),
    changes: 'Some nearly unused abilities and/or no CD abilities now doesn\'t show \'can be improved\' in Cast Efficiency tab.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-07'),
    changes: 'Abilities now trigger mouseover tooltips on statistic boxes.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-07'),
    changes: 'Updated timers in the statistics tooltips.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-06'),
    changes: <React.Fragment>Added more suggestions to <SpellLink id={SPELLS.IMMOLATION_AURA_BUFF.id} /> buff uptime.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-06'),
    changes: <React.Fragment>Fixed <SpellLink id={SPELLS.SIGIL_OF_FLAME_DEBUFF.id} /> debuff uptime to best fit in more cases.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-08-27'),
    changes: <React.Fragment>Fixed a bug with <SpellLink id={SPELLS.SPIRIT_BOMB_TALENT.id} /> uptime suggestions and modified the Dead GCD recommended time (ABC).</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-08-20'),
    changes: <React.Fragment>Added Pain tracker chart and changed <SpellLink id={SPELLS.SPIRIT_BOMB_TALENT.id} /> uptime buff to <SpellLink id={SPELLS.FRAILTY_SPIRIT_BOMB_DEBUFF.id} /> debuff uptime.</React.Fragment>,
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-08-19'),
    changes: 'Added more useful and specific statistics tooltips.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-08-16'),
    changes: 'Added Vengeance Demon Hunter support.',
    contributors: [Mamtooth],
  },
];
