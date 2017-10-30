import React from 'react';

import SPECS from 'common/SPECS';
import SPEC_ANALYSIS_COMPLETENESS from 'common/SPEC_ANALYSIS_COMPLETENESS';

import CombatLogParser from './CombatLogParser';
import CHANGELOG from './CHANGELOG';

import PutroAvatar from './Images/putro-avatar.png';

export default {
  spec: SPECS.BEAST_MASTERY_HUNTER,
  maintainer: '@Putro',
  maintainerAvatar: PutroAvatar,
  description: (
    <div>
      Hey, I am working on making this analyzer as good as I can. I hope that the suggestions that will be implemented in the future, will be helpful in aiding you improve your overall performance.<br /><br />

      You might notice that currently there aren't a lot of suggestions, or a lot of stuff generally implemented. This is the reason the spec is still listed as "Needs more work", but I hope to be able to remedy this in the nearest future.<br /><br />

      If you want to learn more about Beast Mastery Hunters, join the Hunter community on the Trueshot Lodge discord: <a href="https://discordapp.com/invite/trueshot" target="_blank" rel="noopener noreferrer">https://discordapp.com/invite/trueshot</a>. The <kbd>#beast-mastery</kbd> channel has a lot of helpful people, and if you post your logs in <kbd>#log-reviews</kbd>, you can expect to get some good pointers for improvement from the community. The best guide available currently is the guide on <a href="https://www.icy-veins.com/wow/beast-mastery-hunter-pve-dps-guide">Icy-veins</a>. It is maintained by Azortharion, one of the best hunters in the world, and it is constantly fact-checked by community-members, and improved upon on an almost weekly basis.
    </div>
  ),
  // When changing this please make a PR with ONLY this value changed, we will do a review of your analysis to find out of it is complete enough.
  completeness: SPEC_ANALYSIS_COMPLETENESS.NEEDS_MORE_WORK,
  specDiscussionUrl: 'https://github.com/WoWAnalyzer/WoWAnalyzer/issues/680',

  // Shouldn't have to change these:
  changelog: CHANGELOG,
  parser: CombatLogParser,
  // used for generating a GitHub link directly to your spec
  path: __dirname,
};
