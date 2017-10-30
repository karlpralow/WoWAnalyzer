import HealthIcon from './Images/Health';
import StaminaIcon from './Images/Stamina';
import ManaIcon from './Images/Mana';
import IntellectIcon from './Images/Intellect';
import CriticalStrikeIcon from './Images/CriticalStrike';
import HasteIcon from './Images/Haste';
import MasteryIcon from './Images/Mastery';
import VersatilityIcon from './Images/Versatility';
import LeechIcon from './Images/Leech';

const STAT = {
  HEALTH: 'health',
  STAMINA: 'stamina',
  MANA: 'mana',
  INTELLECT: 'intellect',
  CRITICAL_STRIKE: 'criticalstrike',
  HASTE: 'haste',
  HASTE_HPCT: 'hastehpct',
  HASTE_HPM: 'hastehpm',
  MASTERY: 'mastery',
  VERSATILITY: 'versatility',
  VERSATILITY_DR: 'versatilitydr',
  LEECH: 'leech',
};
export default STAT;

export function getName(stat) {
  switch (stat) {
    case STAT.HEALTH: return 'Health';
    case STAT.STAMINA: return 'Stamina';
    case STAT.MANA: return 'Mana';
    case STAT.INTELLECT: return 'Intellect';
    case STAT.CRITICAL_STRIKE: return 'Critical Strike';
    case STAT.HASTE: return 'Haste';
    case STAT.HASTE_HPCT: return 'Haste (HPCT)';
    case STAT.HASTE_HPM: return 'Haste (HPM)';
    case STAT.MASTERY: return 'Mastery';
    case STAT.VERSATILITY: return 'Versatility';
    case STAT.VERSATILITY_DR: return 'Versatility (with DR)';
    case STAT.LEECH: return 'Leech';
    default: return null;
  }
}
export function getClassNameColor(stat) {
  switch (stat) {
    case STAT.HEALTH: return 'stat-health';
    case STAT.STAMINA: return 'stat-stamina';
    case STAT.MANA: return 'stat-mana';
    case STAT.INTELLECT: return 'stat-intellect';
    case STAT.CRITICAL_STRIKE: return 'stat-criticalstrike';
    case STAT.HASTE: return 'stat-haste';
    case STAT.HASTE_HPCT: return 'stat-haste';
    case STAT.HASTE_HPM: return 'stat-haste';
    case STAT.MASTERY: return 'stat-mastery';
    case STAT.VERSATILITY: return 'stat-versatility';
    case STAT.VERSATILITY_DR: return 'stat-versatility';
    case STAT.LEECH: return 'stat-leech';
    default: return null;
  }
}
export function getClassNameBackgroundColor(stat) {
  return `${getClassNameColor(stat)}-bg`;
}
export function getIcon(stat) {
  switch (stat) {
    case STAT.HEALTH: return HealthIcon;
    case STAT.STAMINA: return StaminaIcon;
    case STAT.MANA: return ManaIcon;
    case STAT.INTELLECT: return IntellectIcon;
    case STAT.CRITICAL_STRIKE: return CriticalStrikeIcon;
    case STAT.HASTE: return HasteIcon;
    case STAT.HASTE_HPCT: return HasteIcon;
    case STAT.HASTE_HPM: return HasteIcon;
    case STAT.MASTERY: return MasteryIcon;
    case STAT.VERSATILITY: return VersatilityIcon;
    case STAT.VERSATILITY_DR: return VersatilityIcon;
    case STAT.LEECH: return LeechIcon;
    default: return null;
  }
}
