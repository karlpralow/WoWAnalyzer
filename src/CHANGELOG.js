import React from 'react';

import { Anomoly, blazyb, Dyspho, fasib, Fyruna, Gurupitka, Juko8, Mamtooth, sref, Versaya, Yuyz0112, Zerotorescue, Hartra344, Putro, Sharrq, Hewhosmites } from 'MAINTAINERS';
import Wrapper from 'common/Wrapper';
import ItemLink from 'common/ItemLink';
import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';
import SpellLink from 'common/SpellLink';

export default [
  {
    date: new Date('2018-01-18'),
    changes: <Wrapper>Added support for <ItemLink id={ITEMS.EYE_OF_COMMAND.id} icon />.</Wrapper>,
    contributors: [Putro],
  },
  {
    date: new Date('2018-01-18'),
    changes: <Wrapper>Added <ItemLink id={ITEMS.ISHKARS_FELSHIELD_EMITTER.id} icon /> to cast efficiency.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-18'),
    changes: <Wrapper>Fixed an issue where <ItemLink id={ITEMS.GAROTHI_FEEDBACK_CONDUIT.id} icon /> did not always add the Haste from the last buff.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-16'),
    changes: 'Fixed current Haste percentage interaction with Haste rating buff changes (this improves ABC and spell cooldown accuracy).',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-15'),
    changes: <Wrapper>Added in <ItemLink id={ITEMS.AMANTHULS_VISION.id} icon /></Wrapper>,
    contributors: [Hewhosmites],
  },
  {
    date: new Date('2018-01-15'),
    changes: <Wrapper>Fixed a bug where friendly fire damage (from for example the passive of <SpellLink id={SPELLS.AURA_OF_SACRIFICE_TALENT.id} icon />) would be included in the damage gain from <ItemLink id={ITEMS.GNAWED_THUMB_RING.id} icon />.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-11'),
    changes: 'Fixed a bug where item damage/healing/mana statistics (with the icons) stopped updating after the last damage/healing/mana event. This will lower most displayed item values, the impact depends on the time between the last event that increased the damage/healing/mana of the thing being analyzed and the fight ending.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-10'),
    changes: 'Added a note about unlisted logs to the report selector.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-09'),
    changes: <Wrapper>Updated the tooltip for <ItemLink id={ITEMS.GOLGANNETHS_VITALITY.id} icon /> to show uptime aswell as damage contribution of the two procs</Wrapper>,
    contributors: [Putro],
  },
  {
    date: new Date('2018-01-08'),
    changes: 'Replaced the articles on the frontpage with a basic news system so we can more easily add and maintain articles.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2018-01-04'),
    changes: 'Fixed a bug where procs that changed an ability from a cast time ability to instant might not properly register the GCD.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-31'),
    changes: 'Changed the way Mastery percentage is calculated and implemented the coefficients for all specs. Let us know if Mastery still doesn\'t match the character pane.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-30'),
    changes: 'Added icons indicating the stat type to most item stats.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-27'),
    changes: 'Added Death Tracking to the parser.',
    contributors: [Sharrq],
  },
  {
    date: new Date('2017-12-26'),
    changes: 'Mark the Warlords of Draenor cloak enchants as a part of the good enchants',
    contributors: [Putro],
  },
  {
    date: new Date('2017-12-25'),
    changes: <Wrapper>Added a <i>casting time</i> bar to the spell timeline that shows you the amount of time spent channeling or waiting for the GCD.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-18'),
    changes: <Wrapper>Added <ItemLink id={ITEMS.INSIGNIA_OF_THE_GRAND_ARMY.id} /> to the parser.</Wrapper>,
    contributors: [Putro],
  },
  {
    date: new Date('2017-12-06'),
    changes: <Wrapper><SpellLink id={SPELLS.EONARS_COMPASSION_HEAL.id} /> is now ignored in the cooldowns tab.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-12-06'),
    changes: <Wrapper>Added <ItemLink id={ITEMS.ISHKARS_FELSHIELD_EMITTER.id} /> to items </Wrapper>,
    contributors: [Hartra344],
  },
  {
    date: new Date('2017-12-05'),
    changes: 'Included some NLC traits and trinkets to stat weights module.',
    contributors: [blazyb],
  },
  {
    date: new Date('2017-12-03'),
    changes: <Wrapper>Improve Player Selection user interface.</Wrapper>,
    contributors: ['kyle-glick'],
  },
  {
    date: new Date('2017-12-01'),
    changes: <Wrapper>Improved WCL API error handling to avoid caching corrupt responses (and show more informative errors).</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-29'),
    changes: <Wrapper>Added a <i>talents</i> panel, replacing the tab.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-29'),
    changes: <Wrapper>Added a <i>stats on pull</i> panel.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-28'),
    changes: 'Reworked the frontpage layout.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-11'),
    changes: <Wrapper>Changed the Changelog tab to mark <i>shared changes</i> as grey and provided a toggle to hide them.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-11'),
    changes: 'Added a larger call for help for specs that are marked "Not actively maintained".',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-11'),
    changes: 'Added a timeline tab. Right now this only shows spell casts and their cooldowns so you can see what you cast and could have cast.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-08'),
    changes: 'Automatically try again when WCL sends a corrupt fights response.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-08'),
    changes: 'Changed the API is down and rendering errors to be more amazing.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-08'),
    changes: 'The changelog tab now includes entries in the shared changelog.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-08'),
    changes: 'Added a suggestion for healers if their mana percentage is too high at the end of an encounter.',
    contributors: [blazyb],
  },
  {
    date: new Date('2017-11-06'),
    changes: 'Added a changelog tab to results page and changed the layout of changelogs.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-05'),
    changes: 'Added a spell cooldown timeline to cast efficiency suggestions.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-02'),
    changes: <Wrapper>Changed the <i>default</i> recommended <ItemLink id={ITEMS.VELENS_FUTURE_SIGHT.id} /> healing contribution to be at least 4% (down from 4.5%).</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-11-01'),
    changes: 'Always show the navigation bar and stick it to the top of the window.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-29'),
    changes: <Wrapper>Update layout a bit: <a href="https://imgur.com/a/edymi">comparison</a>.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-25'),
    changes: 'Added T21 healing trinkets: Tarratus Keystone and Highfather\'s Machination.',
    contributors: [Dyspho],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Fixed a crash when a player\'s info errored. Instead the affected player will become unselectable.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Change a bunch of less important statistics to a smaller statistic box to reduce their emphasis and reduce clutter.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Fixed a bunch of crashes and improved browser support.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Removed overhealing from cast efficiency.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Improved layout on a small screens such as mobile devices.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-22'),
    changes: 'Changed polyfill usage to be more reliable (but slightly increase download size).',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-21'),
    changes: 'Added a panel to advertize the Discord bot.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-20'),
    changes: 'Rename "Not yet supported" completion status to "Not actively maintained" so it can also be used for abandoned specs.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-20'),
    changes: 'Don\'t show a tooltip for the distance moved icon (previously showed a Mage ability).',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-19'),
    changes: 'Enable Sentry to record client side errors.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-17'),
    changes: <Wrapper>Fix issue with <i>distance moved</i> that caused it to include the movement from <b>all</b> players.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-16'),
    changes: 'Added Cinidaria, the Symbiote damage and healing tracker.',
    contributors: [Juko8],
  },
  {
    date: new Date('2017-10-15'),
    changes: 'Added a statistic to track total distance moved during the analyzed fight.',
    contributors: [Fyruna],
  },
  {
    date: new Date('2017-10-14'),
    changes: 'Sephuz\'s Secret now displays average haste gain. Uptime still available in tooltip.',
    contributors: [sref],
  },
  {
    date: new Date('2017-10-14'),
    changes: 'Added a suggestion when a legendary haven\'t been upgraded to the max item level.',
    contributors: [Fyruna],
  },
  {
    date: new Date('2017-10-10'),
    changes: 'Changed the buff tracking implementation to be much more developer friendly. This should have no side-effects except to improve accuracy of modules that didn\'t take this into account in the past. If you notice something strange please let us know.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-02'),
    changes: <Wrapper>Added a <i>help wanted</i> panel to the frontpage.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-10-02'),
    changes: 'The developer only Events tab can now be filtered with JS expressions to be much more powerful.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-29'),
    changes: 'Added a spec analyzer info overlay for maintainers to configure.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-27'),
    changes: 'Hot Fix: Add in check to disable Netherlight Crucible statistics box if a user has no Netherlight Crucible traits active',
    contributors: [Anomoly],
  },
  {
    date: new Date('2017-09-25'),
    changes: 'Added Netherlight Crucible traits contribution as a common module across specs',
    contributors: [Anomoly],
  },
  {
    date: new Date('2017-09-25'),
    changes: 'The GitHub repository is now available under WoWAnalyzer/WoWAnalyzer instead of MartijnHols/WoWAnalyzer to give us all the benefits an organization provides on GitHub.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-25'),
    changes: 'Separated damage absorbed and healing absorbed in the healing done bar and made the overhealing bar gray to de-emphasize it.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-23'),
    changes: 'Changed all Damage Done / Healing Done / Damage Taken modules to use a shared renderer that can easily be improved in one spot.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-17'),
    changes: 'Fight parsing now happens in batches allowing the progress bar to function again, in addition the progress bar will slightly move while waiting on a network request to indicate it\'s doing something.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-16'),
    changes: 'Archimonde\'s Hatred Reborn now shows total damage done % and DPS contribution on it\'s tooltip.',
    contributors: [Mamtooth],
  },
  {
    date: new Date('2017-09-12'),
    changes: (
      <Wrapper>The Always Be Casting module has the following changes:<br />
        <ul>
          <li>It now properly supports the passive Haste gain from Sephuz.</li>
          <li>Fixed an issue where the downtime between the last cast and the fight end time wasn't included (this also makes it so dying before the boss dies will affect your downtime).</li>
          <li>Haste buffs from items now scale with item level.</li>
          <li>Changed how Haste from stacking (de)buffs are applied.</li>
        </ul>
      </Wrapper>
    ),
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-03'),
    changes: 'Reworked the WCL API cache to use a database so it persists between patches, improved performance and corrupt response detection.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-01'),
    changes: 'All players in a log now appear and selecting a spec that\'s not yet supported will show information on adding support for it.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-09-01'),
    changes: 'Added role icons to player selection list and it\'s now sorted by role then playername to make finding players easier.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-28'),
    changes: 'Select fights for the currently selected player with a pull down menu.',
    contributors: [fasib],
  },
  {
    date: new Date('2017-08-28'),
    changes: 'Select other players with a pull down menu from the currently selected player.',
    contributors: [fasib],
  },
  {
    date: new Date('2017-08-27'),
    changes: 'Added a small line showing the maintainer of a spec to the results page.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-24'),
    changes: 'Better error handling when the WCL API is sending weird responses.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-24'),
    changes: 'Slightly improve layouts for both desktop and mobile.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-24'),
    changes: 'Changelogs are now seperated by a select box.',
    contributors: [blazyb],
  },
  {
    date: new Date('2017-08-24'),
    changes: 'Added a mana usage graph to the mana tab for all healers.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-20'),
    changes: 'The background image will now be a screenshot of the boss currently analyzing when available.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-14'),
    changes: 'Major under the hood changes, you might see some things move around but no data should be lost or changed.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-09'),
    changes: <Wrapper>Healers with a <i>non-healing time</i> statistic will no longer have their <i>dead GCD time</i> suggestion marked as major importance.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-09'),
    changes: 'Changed suggestions tab layout to be less cluttered, specs may need additional work to be fully migrated',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-03'),
    changes: 'Fix a bug that caused DRPS displays to not always work properly.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-02'),
    changes: 'When there\'s a new version available ask the user if he wants to refresh.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-08-02'),
    changes: 'Gnawed Thumb Ring should now show DPS values when applicable.',
    contributors: [Gurupitka],
  },
  {
    date: new Date('2017-08-01'),
    changes: 'Enabled aggressive caching to the app which should allow offline usage as well as improve consecutive load times.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-31'),
    changes: 'Added Vantus Rune gain display.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-22'),
    changes: 'Shit browsers will now be told they\'re shit and redirected to a Google Chrome download page instead of just crashing.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-22'),
    changes: 'URLs will now show the fight name to make it easier to compare URLs.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-21'),
    changes: 'Changed fight selection styling and fixed back buttons.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-20'),
    changes: 'Added fight progress indicator to the fight selection page.',
    contributors: [Yuyz0112],
  },
  {
    date: new Date('2017-07-06'),
    changes: <Wrapper>The <i>report code</i> input field now accepts WCL urls and entering what looks to be valid input will now automatically start loading the report.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-04'),
    changes: 'All healing specs: Added low health healing tab to give more insight into how often you\'re saving people\'s lives.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-07-01'),
    changes: <Wrapper>Added a few new tools for developers to use; <code>ModuleComponent</code> to more cleanly add statistic modules (see <code>DevotionAura</code> for an example), and <code>LazyLoadStatisticBox</code> for statistics that require additional API calls.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-24'),
    changes: 'Fixed an issue with some items not showing up properly',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-23'),
    changes: 'Change home page layout',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-20'),
    changes: 'Added prepot/second pot suggestions',
    contributors: [blazyb],
  },
  {
    date: new Date('2017-06-18'),
    changes: 'Added Archive of Faith, Barbaric Mindslaver, The Deceiver\'s Grand Design and Sea Star of the Depthmother to all specs, trinket implementations by anomoly.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-17'),
    changes: 'Improved the Cooldown tab healing done display.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-15'),
    changes: 'Updated Darkmoon Deck: Promises mana reduction values to scale with item level.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-06-15'),
    changes: 'Generic: Tier 20 Healing Trinket Implementation',
    contributors: [Anomoly],
  },
  {
    date: new Date('2017-06-06'),
    changes: 'Added refresh button to fights list.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-29'),
    changes: 'Fixed a crash when trying to parse a corrupt combatlog.',
    contributors: [Versaya],
  },
  {
    date: new Date('2017-05-28'),
    changes: 'Added overhealing percentages to the Cast Efficiency tab.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-25'),
    changes: 'Added Patreon links to the specs I (Zerotorescue) maintain. Please let me know if you think this is inappropriate or makes you hesitate to contribute. Added Discord link.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-21'),
    changes: 'An informative message is now shown when trying to parse a report without combatants (usually due to not having advanced combat logging enabled).',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-21'),
    changes: 'Fixed a rare crash when auto attacking something.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-20'),
    changes: 'Added Cooldowns tab to show casts and healing when affected by a cooldown. Added Amalgam\'s Seventh Spine mana gained statistic. Promises no longer includes mana reduction during Innervate.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-17'),
    changes: 'Added Sephuz\'s Secret uptime indicator.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-16'),
    changes: 'Disabled Retribution Paladin spec since it never really came out of the experimental phase.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-13'),
    changes: 'Added full multispec support! The right spec specific parser is now selected based on the spec of the selected person. Only players with supported specs will be displayed in the player selection.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-11'),
    changes: 'Fixed a bunch of bugs. The Always Be Casting/Healing module now supports debuffs which allows me to implement boss Haste buffs to make it more accurate. Elisande\'s Haste buffs are now implemented.',
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-11'),
    changes: <Wrapper><b>A lot</b> more changes under the hood in order to make the analyzer multi-spec compatible. Almost everything was changed, so anything might have gotten broken. Please let me know.</Wrapper>,
    contributors: [Zerotorescue],
  },
  {
    date: new Date('2017-05-07'),
    changes: 'Untangled many lines - you shouldn\'t notice a difference.',
    contributors: [Zerotorescue],
  },
];
