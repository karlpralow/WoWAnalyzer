import CoreCombatLogParser from 'Parser/Core/CombatLogParser';
import HealingDone from 'Parser/Core/Modules/HealingDone';
import DamageDone from 'Parser/Core/Modules/DamageDone';
import DamageTaken from 'Parser/Core/Modules/DamageTaken';

import CastEfficiency from './Modules/Features/CastEfficiency';
import AlwaysBeCasting from './Modules/Features/AlwaysBeCasting';

import Shield_Block from './Modules/Spells/ShieldBlock';

class CombatLogParser extends CoreCombatLogParser {
  static specModules = {
    // Core
    damageTaken: [DamageTaken, { showStatistic: true }],
    healingDone: [HealingDone, { showStatistic: true }],
    damageDone: [DamageDone, { showStatistic: true }],
    // Features
    castEfficiency: CastEfficiency,
    alwaysBeCasting: AlwaysBeCasting,
    shield_block: Shield_Block,
  };
}

export default CombatLogParser;
