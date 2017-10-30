# Holy Paladin Stat Weights Methodology
This is based on the amazing implementation by @kfinch in the [Resto Druid Stat Weights](https://github.com/WoWAnalyzer/WoWAnalyzer/pull/604). Some of this explanation was also blatantly stolen from his.

*This documentation might be outdated by the time you're reading it since it doesn't magically auto-update whenever the code is changed.*

## Approach
This module generates the players stat weights using the actual logged events. We made a list of all healing spells along with which stats those spells scales with, and for each stat a heal scales with we do some math to find out how much the last point of that stat contributed in healing. We compare the total healing contributions caused by each stat in order to generate weights.

## Overheal
A problem to face when generating healing stat weights is what to do about overhealing. Unfortunately, there is no one correct answer. A main issue is what I call The "Would've" Problem. We can say "an extra bit of healing here doesn't matter because it *would've* just caused the next heal to overheal", but how far can we take this logic? My approach is that it doesn't only matter how much is healed, but also how quickly. We'll count all healing that doesn't overheal even if we theorize that it might lead to overhealing. We're more strict on heals that overheal: they're disregarded entirely even if they're only partial overhealing. This is because a spell that partially overheals will do the same amount of effective healing regardless of the raw strength of the heal. This approach can cause some possible weirdness. For example, consider a situation where there is a heal for 500 (0 overheal) followed immediately by a heal for 400 (+ 100 overheal). 500 of this healing would be counted towards stat weights. Now consider a situation where one heal does 900 (+ 100 overheal). Functionally, this situation is identical, but in this case none of the healing is counted towards stat weights. Counting all effective healing, even heals that partially overheal, fixes this issue and is overall a valid approach, but still not one I will be taking. I think an advantage of disregarding all partial overheals is that it gives "top off" heals an effective lower weight than "life saver" heals. Still, this is a decision I will revisit.

  This applies for Intellect, Mastery, Versatility and Leech as they are stats that only increase the power (health) a heal restores. The other stats are special and behave differently as explained below.

## Stat Tracking
These calculations work best when they use the players actual stats at the moment of a heal. This is being taken care of by the StatTracker module which adjusts a player's stats based on applied buffs. If all buffs are implemented properly, this has a very high accuracy.

## Intellect
Math here is straightforward, as spells that scale with int scale directly and linearly with total int. Due to the 'all plate' bonus, each point of int gained is increased by 5%, which has to be taken into account. Effectively the increase in power from one int is simply `1.05 / totalInt`.

  Because heals with overhealing are ignored, if every single heal had overhealed the value of Int would be 0. This makes sense as adding any health on top of the heal would only be adding to overhealing.

## Crit
1 more crit does not directly increase the power of a heal, instead it just increases the chance that heals that didn't crit, crit. Predicting the increased amount of crits from 1 crit rating would be impossible and averaging it our likely inaccurate. But this isn't a problem for our approach since we are calculating stats **not** based on *gaining 1 more rating* but based on the value of the *last 1 rating* of a stat. This means we don't need to predict anything and we only need to base our calculations on heals that actually crit during this log.

If heals with overhealing were ignored, if every single heal had overhealed the value of Crit would be 0. This wouldn't make sense as crit gives a boost of 100% (+Drape of Shame and other bonuses) and if only 10% of that boost overhealed it still gave us 90% healing. This means we need to take into account heals that overheal when calculating the value of crit.
The only time crit should be worth 0 is if we are crit **hard** capped. This means exceeding 100% crit chance.

  With this in mind imagine when you average out a fight this is the result with 33% crit chance (10,000 rating) total:
  ```
type effective overheal   raw
hit      1,000        0 1,000
hit      1,000        0 1,000
crit     1,500      500 2,000
```
This approach would ignore the two hits completely and focus on the crit.
  The crit's base healing was `1,000`, the raw crit part `1,000` and `500` of the crit part was effective crit healing. `1` crit rating would be worth `500 / crit rating` if we didn't get a `8%` base crit chance. Doing `500 * (1 - (8% / 33%))` gives us the averaged out value of the crit **rating** alone; `378,79`, dividing this by the crit rating gets us the value per 1 rating; `378,79 / 10,000 = 0,0379` healing per rating. This gives us the healing value of the last 1 rating in this log.
  If we had 9% crit, the 500 effective healing gained from the rating would be just 55 HP after adjusting for base crit chance, which makes sense as only a fraction of the crit would have been gained from the rating.

  If at the heal-event the critical strike chance was more than 100% for that spell, it is completely ignored and not included in the weight of this spell. We take into account Holy Shock's double crit chance as well as crit buffs such as Avenging Wrath.

## Haste
HPCT stands for "Healing per Cast Time". This is the value that 1% Haste would be worth if you would cast everything you are already casting (and that can be casted quicker) 1% faster. Since you don't always actually do this (and there might not always be enough health missing to use this), you might have to manually reduce the value of this stat weight to account for this. Mana is also not accounted for in any way and you should consider the Haste stat weight 0 if you run out of mana while doing everything else right.

The real worth of Haste might be a bit higher when it causes you to fit more things into static buff durations such as Avenging Wrath, Aura Mastery and other buffs.

  If your spell's cooldown scales with Haste that speeds up your entire "rotation", e.g. HS -> FoL -> LoD -> BF -> FoL -> J -> HS stays the same you just cast them quicker after each other This isn't the kind of rotation you repeat exactly as after the second HS LoD and BF will be on CD, but imagine that those spells are available to you then that's how you'd cast it, with 10% Haste you'd cast the exact same thing only 10% faster.

## Mastery
Mastery is pretty basic; every time a spell is cast we calculate the mastery effectiveness of that spell. The value of Mastery is then the same calculation as for Versatility, but multiplied for the actual mastery effectiveness of that spell. The same overhealing approach counts as well.

## Versatility
This is the same calculation as for Mastery without the mastery effectiveness (so Versa is more consistent); `healAmount / (1 + versPercentage) * versPercentageFromOneRating`. In addition to this we show the stat weight from the damage reduced by Versatility by considering the DRPS as HPS.

  Because heals with overhealing are ignored, if every single heal had overhealed the value of Versatility would be 0. This makes sense as adding any health on top of the heal would only be adding to overhealing.

## Leech
Calculating this is different depending on if the player does or does not already have any Leech. If the player does have Leech we calculate this pretty much the same as int: for every Leech heal the increase in power from one leech is simply `1 / totalLeechRating`. If the player does not already have Leech, we predict that 1 Leech rating would have done full healing so long as the player has health missing.

## Special cases

Leech, Velens, Aura of Sacrifice, Obsidian Stone Spaulders and Lay on Hands healing is disregarded for the purpose of the main stat's weights, as they scale with whatever procced them. It's easiest to just not count them.

If a heal is not in the database of heals, it's assumed to scale only with Versatility. This is generally a good assumption, and this is how most trinket heals behave.

## TODO

- [x] Int
- [x] Critical Strike - **hard**
- [x] Based on crit healing
- [x] Contribution from IoL FoL
- [ ] Contribution from IoL HL **hard** (also not as important)
- [x] Haste - **hard**
- [x] Mastery
- [x] Versatility
- [x] Versatility DR
- [x] Leech when user already has Leech
- [x] Leech prediction
- [x] Implement stat tracker
- [x] Do a complete accuracy review
- [x] Layout
- [x] Refactoring
- [ ] Tests
- [x] It would be nice if SpellInfo was part of CastEfficiency's abilities array
