import getFightName from 'common/getFightName';
import prettyEncodeURI from 'common/prettyEncodeURI';

export default function makeReportUrl(report = undefined, fightId = undefined, playerName = undefined, tab = undefined) {
  const parts = [];
  if (report) {
    parts.push(`report/${report.code}`);
    if (fightId) {
      const fight = report.fights.find(fight => fight.id === fightId);
      const fightName = fight && getFightName(report, fight);
      if (fightName) {
        parts.push(`${fightId}-${prettyEncodeURI(fightName)}`);
        if (playerName) {
          parts.push(encodeURI(playerName));
          if (tab) {
            parts.push(tab);
          }
        }
      }
    }
  }

  return `/${parts.join('/')}`;
}
