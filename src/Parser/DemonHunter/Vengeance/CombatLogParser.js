import React from 'react';

import Tab from 'Interface/Others/Tab';

import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import HealingDone from 'Parser/Core/Modules/HealingDone';
import DamageDone from 'Parser/Core/Modules/DamageDone';
import DamageTaken from 'Parser/Core/Modules/DamageTaken';

import PainChart from './Modules/PainChart/Pain';
import PainTracker from './Modules/Pain/PainTracker';
import PainDetails from './Modules/Pain/PainDetails';

import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';
import Abilities from './Modules/Abilities';
import CooldownThroughputTracker from './Modules/Features/CooldownThroughputTracker';
import MitigationCheck from './Modules/Features/MitigationCheck';

import Checklist from './Modules/Features/Checklist';

import SoulFragmentsConsume from './Modules/Statistics/SoulFragmentsConsume';
import SoulFragmentsTracker from './Modules/Features/SoulFragmentsTracker';

import SpiritBombFrailtyDebuff from './Modules/Talent/SpiritBombFrailtyDebuff';
import SoulsOvercap from './Modules/Statistics/SoulsOvercap';
import SoulBarrier from './Modules/Talent/SoulBarrier';
import SpiritBombSoulConsume from './Modules/Talent/SpiritBombSoulConsume';


import ImmolationAura from './Modules/Spells/ImmolationAura';
import DemonSpikes from './Modules/Spells/DemonSpikes';
import SigilOfFlame from './Modules/Spells/SigilOfFlame';

import Tier202PBonus from './Modules/Tier/Tier20/Tier20-2P.js';
import Tier204PBonus from './Modules/Tier/Tier20/Tier20-4P.js';
import SoulOfTheSlayer from '../Shared/Modules/Items/SoulOfTheSlayer';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Core Statistics
    damageDone: [DamageDone, { showStatistic: true }],
    damageTaken: [DamageTaken, { showStatistic: true }],
    healingDone: [HealingDone, { showStatistic: true }],
    mitigationCheck: MitigationCheck,

    // Features
    alwaysBeCasting: AlwaysBeCasting,
    abilities: Abilities,
    cooldownThroughputTracker: CooldownThroughputTracker,
    soulFragmentsTracker: SoulFragmentsTracker,
    checklist: Checklist,

    //Resource Tracker
    painTracker: PainTracker,
    painDetails: PainDetails,

    //Talents
    SpiritBombFrailtyDebuff: SpiritBombFrailtyDebuff,
    soulBarrier: SoulBarrier,
    spiritBombSoulConsume: SpiritBombSoulConsume,

    // Spell
    immolationAura: ImmolationAura,
    demonSpikes: DemonSpikes,
    sigilOfFlame: SigilOfFlame,

    //Stats
    soulsOvercap: SoulsOvercap,
    soulFragmentsConsume: SoulFragmentsConsume,

    // Tier 20
    tier202PBonus: Tier202PBonus,
    tier204PBonus: Tier204PBonus,
    soulOfTheSlayer: SoulOfTheSlayer,
  };

  generateResults(...args) {
    const results = super.generateResults(...args);

    results.tabs = [
      ...results.tabs,
      { // TODO: Move this to an Analyzer module
        title: 'Pain Chart',
        url: 'pain',
        render: () => (
          <Tab style={{ padding: '15px 22px' }}>
            <PainChart
              reportCode={this.report.code}
              actorId={this.playerId}
              start={this.fight.start_time}
              end={this.fight.end_time}
            />
          </Tab>
        ),
      },
    ];

    return results;
  }
}

export default CombatLogParser;
