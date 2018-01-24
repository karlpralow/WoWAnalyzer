import React from 'react';

import { Chizu, Zerotorescue } from 'MAINTAINERS';
import Wrapper from 'common/Wrapper';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2017-12-29'),
    changes: <Wrapper>Fixed display in the timeline and the inclusion in active time of channeled abilities.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-29'),
    changes: 'Implemented the Checklist.',
    contributors: [Chizu],
  },
  {
    date: new Date('2017-09-16'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.SUMMON_DOOMGUARD_UNTALENTED.id} icon/>/<SpellLink id={SPELLS.SUMMON_INFERNAL_UNTALENTED.id} icon/>/<SpellLink id={SPELLS.GRIMOIRE_OF_SERVICE_TALENT.id} icon/> to Cooldowns tab.</Wrapper>,
    contributors: [Chizu],
  },
  {
    date: new Date('2017-09-09'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.EMPOWERED_LIFE_TAP_TALENT.id} icon/> module.</Wrapper>,
    contributors: [Chizu],
  },
  {
    date: new Date('2017-08-27'),
    changes: <Wrapper>Reworked the <SpellLink id={SPELLS.DRAIN_SOUL.id} icon/>/<SpellLink id={SPELLS.UNSTABLE_AFFLICTION_CAST.id} icon/> sniping module to provide more relevant info.</Wrapper>,
    contributors: [Chizu],
  },
  {
    date: new Date('2017-08-24'),
    changes: <Wrapper>Added <SpellLink id={SPELLS.DRAIN_SOUL.id} icon/>/<SpellLink id={SPELLS.UNSTABLE_AFFLICTION_CAST.id} icon/> sniping module.</Wrapper>,
    contributors: [Chizu],
  },
  {
    date: new Date('2017-08-21'),
    changes: <Wrapper>Added rest of the legendaries (apart from <ItemLink id={ITEMS.HOOD_OF_ETERNAL_DISDAIN.id} icon/>), some ToS trinkets and T20 set bonuses.</Wrapper>,
    contributors: [Chizu],
  },
];
