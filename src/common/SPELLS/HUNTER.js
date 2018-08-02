/**
 * All Hunter abilities except talents go in here. You can also put a talent in here if you want to override something imported in the `./talents` folder, but that should be extremely rare.
 * You need to do this manually, usually an easy way to do this is by opening a WCL report and clicking the icons of spells to open the relevant Wowhead pages, here you can get the icon name by clicking the icon, copy the name of the spell and the ID is in the URL.
 * You can access these entries like other entries in the spells files by importing `common/SPELLS` and using the assigned property on the SPELLS object. Please try to avoid abbreviating properties.
 */

export default {
  /**Removed when legion tier is irrelevant*/
  HUNTER_BM_T19_2P_BONUS: {
    id: 211181, //WoWHead has this as 4p, but it's actually the 2p
    name: 'T19 2 set bonus',
    icon: 'trade_engineering',
  },
  HUNTER_BM_T19_2P_BONUS_BUFF: {
    id: 211183,
    name: 'T19 2 set bonus',
    icon: 'ability_druid_ferociousbite',
  },
  HUNTER_BM_T19_4P_BONUS: {
    id: 211172,
    name: 'T19 2 set bonus',
    icon: 'trade_engineering',
  },
  HUNTER_BM_T20_2P_BONUS: {
    id: 242239,
    name: 'T20 2 set bonus',
    icon: 'ability_hunter_bestialdiscipline',
  },
  HUNTER_BM_T20_2P_BONUS_BUFF: {
    id: 246126,
    name: 'T20 2 set bonus',
    icon: 'ability_hunter_bestialdiscipline',
  },
  HUNTER_BM_T20_4P_BONUS: {
    id: 242240,
    name: 'T20 4 set bonus',
    icon: 'ability_hunter_bestialdiscipline',
  },
  HUNTER_BM_T20_4P_BONUS_BUFF: {
    id: 246116,
    name: 'T20 4 set bonus',
    icon: 'ability_hunter_fervor',
  },
  HUNTER_BM_T21_2P_BONUS: {
    id: 251755,
    name: 'T21 2 set bonus',
    icon: 'ability_hunter_killcommand',
  },
  HUNTER_BM_T21_4P_BONUS: {
    id: 251756,
    name: 'T21 4 set bonus',
    icon: 'spell_nature_protectionformnature',
  },
  HUNTER_MM_T19_2P_BONUS: {
    id: 211331,
    name: 'T19 2 set bonus',
    icon: 'trade_engineering',
  },
  HUNTER_MM_T20_2P_BONUS: {
    id: 242242,
    name: 'T20 2 set bonus',
    icon: 'ability_hunter_focusedaim',
  },
  HUNTER_MM_T20_2P_BONUS_BUFF: {
    id: 242243,
    name: 'T20 2 set bonus',
    icon: 'inv_misc_ammo_arrow_03',
  },
  HUNTER_MM_T20_4P_BONUS: {
    id: 242241,
    name: 'T20 4 set bonus',
    icon: 'ability_hunter_focusedaim',
  },
  HUNTER_MM_T20_4P_BONUS_BUFF: {
    id: 246153,
    name: 'T20 4 set bonus',
    icon: 'inv_spear_07',
  },
  HUNTER_MM_T21_2P_BONUS: {
    id: 251754,
    name: 'T21 2 set bonus',
    icon: 'ability_hunter_focusedaim',
  },
  HUNTER_MM_T21_4P_BONUS: {
    id: 214826,
    name: 'T21 4 set bonus',
    icon: 'ability_hunter_markedshot',
  },
  HUNTER_SV_T20_2P_BONUS: {
    id: 242244,
    name: 'T20 2 set bonus',
    icon: 'ability_hunter_camouflage',
  },
  HUNTER_SV_T20_4P_BONUS: {
    id: 242245,
    name: 'T20 4 set bonus',
    icon: 'ability_hunter_camouflage',
  },
  HUNTER_SV_T21_2P_BONUS: {
    id: 251751,
    name: 'T21 2 set bonus',
    icon: 'ability_rogue_findweakness',
  },
  HUNTER_SV_T21_2P_BONUS_BUFF: {
    id: 252094,
    name: 'Exposed Flank',
    icon: 'ability_rogue_findweakness',
  },
  HUNTER_SV_T21_4P_BONUS: {
    id: 251752,
    name: 'T21 4 set bonus',
    icon: 'ability_hunter_combatexperience',
  },
  HUNTER_SV_T21_4P_BONUS_BUFF: {
    id: 252095,
    name: 'In for the Kill',
    icon: 'ability_hunter_combatexperience',
  },

  /**Removed when artifacts are gone */
  BULLSEYE_BUFF: {
    id: 204090,
    name: 'Bullseye',
    icon: 'ability_hunter_focusedaim',
  },
  BULLSEYE_TRAIT: {
    id: 204089,
    name: 'Bullseye',
    icon: 'ability_hunter_focusedaim',
  },
  QUICK_SHOT_TRAIT: {
    id: 190462,
    name: 'Quick Shot',
    icon: 'ability_trueshot',
  },
  CYCLONIC_BURST_TRAIT: {
    id: 238124,
    name: 'Cyclonic burst',
    icon: 'inv_bow_1h_artifactwindrunner_d_02',
  },
  CYCLONIC_BURST_IMPACT_TRAIT: {
    id: 242712,
    name: 'Cyclonic Burst',
    icon: 'inv_bow_1h_artifactwindrunner_d_02',
  },
  UNERRING_ARROWS_TRAIT: {
    id: 238052,
    name: 'Unerring Arrows',
    icon: 'creatureportrait_blackrockv2_shieldgong_broken',
  },
  CALL_OF_THE_HUNTER_TRAIT: {
    id: 191048,
    name: 'Call of the Hunter',
    icon: 'ability_hunter_assassinate',
  },
  CALL_OF_THE_HUNTER_DAMAGE: {
    id: 191070,
    name: 'Call of the Hunter',
    icon: 'ability_hunter_assassinate',
  },
  LEGACY_OF_THE_WINDRUNNERS_TRAIT: {
    id: 190852,
    name: 'Legacy of the Windrunners',
    icon: 'artifactability_marksmanhunter_legacyofthewindrunners',
  },
  LEGACY_OF_THE_WINDRUNNERS_DAMAGE: {
    id: 191043,
    name: 'Legacy of the Windrunners',
    icon: 'artifactability_marksmanhunter_legacyofthewindrunners',
  },
  RAPID_KILLING_TRAIT: {
    id: 191339,
    name: 'Rapid Killing',
    icon: 'ability_marksmanship',
  },
  RAPID_KILLING: {
    id: 191342,
    name: 'Rapid Killing',
    icon: 'ability_hunter_assassinate',
  },
  SURVIVAL_OF_THE_FITTEST_BUFF: {
    id: 190515,
    name: 'Survival of the Fittest',
    icon: 'ability_rogue_feint',
  },
  TITANS_THUNDER: {
    id: 207068,
    name: 'Titan\'s Thunder',
    icon: 'inv_firearm_2h_artifactlegion_d_01',
  },
  TITANS_THUNDER_BUFF: {
    id: 207094,
    name: 'Titan\'s Thunder Buff',
    icon: 'inv_firearm_2h_artifactlegion_d_01',
  },
  TITANS_THUNDER_DAMAGE: {
    id: 207097,
    name: 'Titan\'s Thunder',
    icon: 'inv_firearm_2h_artifactlegion_d_01',
  },
  TITANS_THUNDER_DIRE_FRENZY_PET_BUFF: {
    id: 218638,
    name: 'Titan\'s Thunder',
    icon: 'ability_hunter_longevity',
  },
  SLITHERING_SERPENTS_TRAIT: {
    id: 238051,
    name: 'Slithering Serpents',
    icon: 'ability_hunter_cobrashot',
  },
  COBRA_COMMANDER_TRAIT: {
    id: 238123,
    name: 'Cobra Commander',
    icon: 'inv_waepon_bow_zulgrub_d_01',
  },
  COBRA_COMMANDER: {
    id: 243042,
    name: 'Cobra Commander',
    icon: 'inv_waepon_bow_zulgrub_d_01',
  },
  MASTER_OF_BEASTS_TRAIT: {
    id: 197248,
    name: 'Master of Beasts',
    icon: 'ability_hunter_masterscall',
  },
  SURGE_OF_THE_STORMGOD_TRAIT: {
    id: 197354,
    name: 'Surge of the Stormgod',
    icon: 'ability_monk_forcesphere',
  },
  SURGE_OF_THE_STORMGOD_DAMAGE: {
    id: 197465,
    name: 'Surge of the Stormgod',
    icon: 'ability_monk_forcesphere',
  },
  THUNDERSLASH_TRAIT: {
    id: 238087,
    name: 'Thunderslash',
    icon: 'warrior_talent_icon_thunderstruck',
  },
  THUNDERSLASH_DAMAGE: {
    id: 243234,
    name: 'Thunderslash',
    icon: 'warrior_talent_icon_thunderstruck',
  },
  DEATHSTRIKE_VENOM: {
    id: 243121,
    name: 'Deathstrike Venom',
    icon: 'spell_nature_nullifypoison',
  },
  PATHFINDER_TRAIT: {
    id: 197343,
    name: 'Pathfinder',
    icon: 'ability_mount_jungletiger',
  },
  SPIRIT_BOND_HEAL: {
    id: 197205,
    name: 'Spirit Bond',
    icon: 'ability_mount_jungletiger',
  },
  WINDBURST: {
    id: 204147,
    name: 'Windburst',
    icon: 'inv_bow_1h_artifactwindrunner_d_02',
  },
  WINDBURST_MOVEMENT_SPEED: {
    id: 204477,
    name: 'Windburst',
    icon: 'ability_hunter_focusedaim',
  },
  CRITICAL_FOCUS_FOCUSMODULE: {
    id: 215107,
    name: 'Critical Focus',
    icon: 'ability_druid_replenish',
  },
  ECHOES_OF_OHNARA_TRAIT: {
    id: 238125,
    name: 'Echoes of Ohn\'ara',
    icon: 'ability_hunter_invigeration',
  },
  ECHOES_OF_OHNARA_DAMAGE: {
    id: 242798,
    name: 'Echoes of Ohn\'ara',
    icon: 'ability_hunter_eagleeye',
  },
  EAGLES_BITE_TRAIT: {
    id: 203757,
    name: 'On The Trail',
    icon: 'artifactability_survivalhunter_eaglesbite',
  },
  ON_THE_TRAIL_DAMAGE: {
    id: 204081,
    name: 'On The Trail',
    icon: 'artifactability_survivalhunter_eaglesbite',
  },
  FURY_OF_THE_EAGLE_TRAIT: {
    id: 203415,
    name: 'Fury of the Eagle',
    icon: 'inv_polearm_2h_artifacteagle_d_01',
  },
  FURY_OF_THE_EAGLE_DAMAGE: {
    id: 203413,
    name: 'Fury of the Eagle',
    icon: 'inv_polearm_2h_artifacteagle_d_01',
  },
  TALON_STRIKE_TRAIT: {
    id: 203563,
    name: 'Talon Strike',
    icon: 'inv_misc_bone_06',
  },
  TALON_STRIKE_DAMAGE: {
    id: 203525,
    name: 'Talon Strike',
    icon: 'inv_misc_bone_06',
  },
  TALON_BOND_TRAIT: {
    id: 238089,
    name: 'Talon Bond',
    icon: 'inv_misc_bone_06',
  },
  TALON_BOND_DAMAGE: {
    id: 242735,
    name: 'Talon Slash',
    icon: 'inv_misc_bone_06',
  },
  HUNTERS_GUILE_TRAIT: {
    id: 203752,
    name: 'Hunter\'s Guile',
    icon: 'ability_mage_potentspirit',
  },
  HELLCARVER_TRAIT: {
    id: 203673,
    name: 'Hellcarver',
    icon: 'ability_hunter_carve',
  },
  ASPECT_OF_THE_SKYLORD_TRAIT: {
    id: 203755,
    name: 'Aspect of the Skylord',
    icon: 'inv_pet_undeadeagle',
  },
  ASPECT_OF_THE_SKYLORD_BUFF: {
    id: 203927,
    name: 'Aspect of the Skylord',
    icon: 'inv_pet_undeadeagle',
  },
  BIRD_OF_PREY_HEAL: {
    id: 224765,
    name: 'Bird of Prey',
    icon: 'ability_hunter_eagleeye',
  },
  EMBRACE_OF_THE_ASPECTS: {
    id: 225092,
    name: 'Embrace of the Aspects',
    icon: 'spell_hunter_aspectofthehawk',
  },
  JAWS_OF_THE_MONGOOSE: {
    id: 238053,
    name: 'Jaws of the Mongoose',
    icon: 'ability_hunter_mongoosebite',
  },

  /**Removed when legendaries are irrelevant*/
  PARSELS_TONGUE_BUFF: {
    id: 248085,
    name: 'Parsel\'s Tongue',
    icon: 'ability_hunter_cobrashot',
  },
  THE_MANTLE_OF_COMMAND_BUFF: {
    id: 247993,
    name: 'The Mantle of Command',
    icon: 'inv_shoulder_mail_raidshaman_m_01',
  },
  SENTINELS_SIGHT: {
    id: 208913,
    name: 'Sentinel\'s sight',
    icon: 'inv_belt_66green',
  },
  GYROSCOPIC_STABILIZATION: {
    id: 235712,
    name: 'Gyroscopic stabilization',
    icon: 'inv_glove_mail_raidshamanmythic_o_01',
  },
  CELERITY_OF_THE_WINDRUNNERS_BUFF: {
    id: 281297,
    name: 'Celerity of the Windrunners',
    icon: 'inv_bow_1h_artifactwindrunner_d_02',
  },
  NESINGWARYS_TRAPPING_TREADS_FOCUS_GAIN: {
    id: 212575,
    name: 'Nesingwary\'s Trapping Treads',
    icon: 'inv_boots_mail_panda_b_02',
  },
  UNSEEN_PREDATORS_CLOAK_BUFF: {
    id: 248212,
    name: 'Unseen Predator\'s Cloak',
    icon: 'ability_vehicle_demolisherflamecatapult',
  },
  MARK_OF_HELBRINE: {
    id: 213156,
    name: 'Mark of Helbrine',
    icon: 'inv_spear_04',
  },
  BUTCHERS_BONE_APRON_BUFF: {
    id: 236446,
    name: 'Butcher\'s Bone Apron',
    icon: 'ability_hunter_carve',
  },
  THE_SHADOW_HUNTERS_VOODOO_MASK_HEAL: {
    id: 208888,
    name: 'The Shadow Hunter\'s Voodoo Mask',
    icon: 'ability_creature_cursed_04',
  },

  // Beast Mastery:
  ASPECT_OF_THE_WILD: {
    id: 193530,
    name: 'Aspect of the Wild',
    icon: 'spell_nature_protectionformnature',
  },
  BESTIAL_WRATH: {
    id: 19574,
    name: 'Bestial Wrath',
    icon: 'ability_druid_ferociousbite',
  },
  COBRA_SHOT: {
    id: 193455,
    name: 'Cobra Shot',
    icon: 'ability_hunter_cobrashot',
  },
  BARBED_SHOT: {
    id: 217200,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  KILL_COMMAND: {
    id: 34026,
    name: 'Kill Command',
    icon: 'ability_hunter_killcommand',
  },
  KILL_COMMAND_PET: {
    id: 83381,
    name: 'Kill Command',
    icon: 'ability_hunter_killcommand',
  },
  MULTISHOT_BM: {
    id: 2643,
    name: 'Multi-Shot',
    icon: 'ability_upgrademoonglaive',
  },
  BEAST_CLEAVE_DAMAGE: {
    id: 118459,
    name: 'Beast Cleave',
    icon: 'ability_hunter_sickem',
  },
  STOMP_DAMAGE: {
    id: 201754,
    name: 'Stomp',
    icon: 'ability_warstomp',
  },
  DIRE_BEAST_BUFF: {
    id: 281036,
    name: 'Dire Beast',
    icon: 'ability_hunter_longevity',
  },
  STAMPEDE_DAMAGE: {
    id: 201594,
    name: 'Stampede',
    icon: 'ability_hunter_bestialdiscipline',
  },
  CHIMAERA_SHOT_NATURE_DAMAGE: {
    id: 171457,
    name: 'Chimaera Shot',
    icon: 'ability_hunter_chimerashot2',
  },
  CHIMAERA_SHOT_FROST_DAMAGE: {
    id: 171454,
    name: 'Chimaera Shot',
    icon: 'ability_hunter_chimerashot2',
  },
  SPITTING_COBRA_DAMAGE: {
    id: 206685,
    name: 'Cobra Spit',
    icon: 'ability_creature_poison_02',
  },

  //Beast Mastery BFA Buffs
  BEAST_CLEAVE_BUFF: {
    id: 268877,
    name: 'Beast Cleave',
    icon: 'ability_hunter_sickem',
  },
  BEAST_CLEAVE_PET_BUFF: {
    id: 118455,
    name: 'Beast Cleave',
    icon: 'ability_hunter_sickem',
  },
  BESTIAL_WRATH_BUFF_MAIN_PET: {
    id: 186254,
    name: 'Bestial Wrath Buff',
    icon: 'ability_druid_ferociousbite',
  },
  BARBED_SHOT_BUFF: {
    id: 246152,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  BARBED_SHOT_BUFF_STACK_2: { //2nd stack of Barbed Shot on the player
    id: 246851,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  BARBED_SHOT_BUFF_STACK_3: { //3rd stack of Barbed Shot on the player
    id: 246852,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  BARBED_SHOT_BUFF_STACK_4: { //4th stack of Barbed Shot on the player
    id: 246853,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  BARBED_SHOT_BUFF_STACK_5: { //5th stack of Barbed Shot on the player
    id: 246854,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  BARBED_SHOT_PET_BUFF: {
    id: 272790,
    name: 'Barbed Shot',
    icon: 'ability_hunter_barbedshot',
  },
  THRILL_OF_THE_HUNT_BUFF: {
    id: 257946,
    name: 'Thrill of the Hunt',
    icon: 'ability_hunter_thrillofthehunt',
  },
  CHIMAERA_SHOT_FOCUS: {
    id: 204304,
    name: 'Chimaera Shot',
    icon: 'ability_hunter_chimerashot2',
  },

  // Marksmanship Hunter:
  AIMED_SHOT: {
    id: 19434,
    name: 'Aimed Shot',
    icon: 'inv_spear_07',
  },
  ARCANE_SHOT: {
    id: 185358,
    name: 'Arcane Shot',
    icon: 'ability_impalingbolt',
  },
  STEADY_SHOT: {
    id: 56641,
    name: 'Steady Shot',
    icon: 'ability_hunter_steadyshot',
  },
  STEADY_SHOT_FOCUS: {
    id: 77443,
    name: 'Steady Shot',
    icon: 'ability_hunter_steadyshot',
  },
  TRUESHOT: {
    id: 193526,
    name: 'Trueshot',
    icon: 'ability_trueshot',
  },
  BURSTING_SHOT: {
    id: 186387,
    name: 'Bursting Shot',
    icon: 'ability_hunter_burstingshot',
  },
  EXPLOSIVE_SHOT_DETONATION: {
    id: 212679,
    name: 'Explosive Shot: Detonate!',
    icon: '6bf_explosive_shard',
  },
  EXPLOSIVE_SHOT_DAMAGE: {
    id: 212680,
    name: 'Explosive Shot',
    icon: '6bf_explosive_shard',
  },
  RAPID_FIRE: {
    id: 257044,
    name: 'Rapid Fire',
    icon: 'ability_hunter_efficiency',
  },
  RAPID_FIRE_TICKS: {
    id: 257045,
    name: 'Rapid Fire',
    icon: 'ability_hunter_efficiency',
  },
  RAPID_FIRE_FOCUS: {
    id: 263585,
    name: 'Rapid Fire',
    icon: 'ability_hunter_efficiency',
  },
  MULTISHOT_MM: {
    id: 257620,
    name: 'Multi-Shot',
    icon: 'ability_upgrademoonglaive',
  },

  //Marksmanship Buffs
  MASTER_MARKSMAN_BUFF: {
    id: 269576,
    name: 'Master Marksman',
    icon: 'ability_hunter_mastermarksman',
  },
  TRAILBLAZER_BUFF: {
    id: 231390,
    name: 'Trailblazer',
    icon: 'ability_hunter_aspectmastery',
  },
  STEADY_FOCUS_BUFF: {
    id: 193534,
    name: 'Steady Focus',
    icon: 'ability_hunter_improvedsteadyshot',
  },
  LETHAL_SHOTS_BUFF: {
    id: 260395,
    name: 'Lethal Shots',
    icon: 'ability_hunter_resistanceisfutile',
  },
  VOLLEY_DAMAGE: {
    id: 260247,
    name: 'Volley',
    icon: 'buff_epichunter',
  },
  LOCK_AND_LOAD_BUFF: {
    id: 194594,
    name: 'Lock and Load',
    icon: 'ability_hunter_lockandload',
  },
  SURVIVAL_OF_THE_FITTEST_LONE_WOLF: {
    id: 281195,
    name: 'Survival of the Fittest',
    icon: 'spell_nature_spiritarmor',
  },
  PRECISE_SHOTS: {
    id: 260242,
    name: 'Precise Shots',
    icon: 'ability_hunter_focusedaim',
  },
  TRICK_SHOTS_BUFF: {
    id: 257622,
    name: 'Trick Shots',
    icon: 'ability_hunter_focusfire',
  },
  LONE_WOLF_BUFF: {
    id: 164273,
    name: 'Lone Wolf',
    icon: 'spell_hunter_lonewolf',
  },
  HUNTERS_MARK_FOCUS: {
    id: 259558,
    name: 'Hunter\'s Mark',
    icon: 'ability_hunter_markedfordeath',
  },

  //Survival:
  ASPECT_OF_THE_EAGLE: {
    id: 186289,
    name: 'Aspect of the Eagle',
    icon: 'spell_hunter_aspectoftheironhawk',
  },
  CARVE: {
    id: 187708,
    name: 'Carve',
    icon: 'ability_hunter_carve',
  },
  COORDINATED_ASSAULT: {
    id: 266779,
    name: 'Coordinated Assault',
    icon: 'inv_coordinatedassault',
  },
  HARPOON: {
    id: 190925,
    name: 'Harpoon',
    icon: 'ability_hunter_harpoon',
  },
  KILL_COMMAND_SV: {
    id: 259489,
    name: 'Kill Command',
    icon: 'ability_hunter_killcommand',
  },
  FLANKERS_ADVANTAGE: {
    id: 259285,
    name: 'Flanker\'s Advantage',
    icon: 'ability_hunter_resistanceisfutile',
  },
  MUZZLE: {
    id: 187707,
    name: 'Muzzle',
    icon: 'ability_hunter_negate',
  },
  WILDFIRE_BOMB: {
    id: 259495,
    name: 'Wildfire Bomb',
    icon: 'inv_wildfirebomb',
  },
  RAPTOR_STRIKE: {
    id: 186270,
    name: 'Raptor Strike',
    icon: 'ability_hunter_raptorstrike',
  },
  RAPTOR_STRIKE_AOTE: {
    id: 265189,
    name: 'Raptor Strike',
    icon: 'ability_hunter_raptorstrike',
  },
  SERPENT_STING_SV: {
    id: 259491,
    name: 'Serpent Sting',
    icon: 'spell_hunter_exoticmunitions_poisoned',
  },
  MONGOOSE_FURY: {
    id: 259388,
    name: 'Mongoose Fury',
    icon: 'ability_hunter_mongoosebite',
  },
  HARPOON_DAMAGE: { //doesn't actually do damage, but it's categorized as that
    id: 190927,
    name: 'Harpoon',
    icon: 'ability_hunter_harpoon',
  },
  WING_CLIP: {
    id: 195645,
    name: 'Wing Clip',
    icon: 'ability_rogue_trip',
  },

  //Survival talent buff/debuffs:
  STEEL_TRAP_DAMAGE: { //the event is a damage event, but it merely applies the debuff
    id: 162480,
    name: 'Steel Trap',
    icon: 'inv_pet_pettrap02',
  },
  STEEL_TRAP_DEBUFF: {
    id: 162487,
    name: 'Steel Trap',
    icon: 'inv_pet_pettrap02',
  },
  TIP_OF_THE_SPEAR_CAST: {
    id: 260286,
    name: 'Tip of the Spear',
    icon: 'ability_bossmannoroth_glaivethrust',
  },
  VIPERS_VENOM_BUFF: {
    id: 268552,
    name: 'Viper\'s Venom',
    icon: 'ability_hunter_potentvenom',
  },

  //Shared BFA buffs/debuffs/misc
  POSTHASTE_BUFF: {
    id: 118922,
    name: 'Posthaste',
    icon: 'ability_hunter_posthaste',
  },
  A_MURDER_OF_CROWS_DEBUFF: {
    id: 131900,
    name: 'A Murder of Crows',
    icon: 'ability_hunter_murderofcrows',
  },
  BINDING_SHOT_STUN: {
    id: 117526,
    name: 'Binding Shot Stun',
    icon: 'spell_shaman_bindelemental',
  },
  BINDING_SHOT_TETHER: {
    id: 117405,
    name: 'Binding Shot Tether',
    icon: 'spell_shaman_bindelemental',
  },
  BARRAGE_DAMAGE: {
    id: 120361,
    name: 'Barrage',
    icon: 'ability_hunter_rapidregeneration',
  },
  ASPECT_OF_THE_CHEETAH: {
    id: 186257,
    name: 'Aspect of the Cheetah',
    icon: 'ability_mount_jungletiger',
  },
  ASPECT_OF_THE_TURTLE: {
    id: 186265,
    name: 'Aspect of the Turtle',
    icon: 'ability_hunter_pet_turtle',
  },
  CALL_PET_1: {
    id: 883,
    name: 'Call Pet 1',
    icon: 'ability_hunter_beastcall',
  },
  CALL_PET_2: {
    id: 83242,
    name: 'Call Pet 2',
    icon: 'ability_hunter_beastcall',
  },
  CALL_PET_3: {
    id: 83243,
    name: 'Call Pet 3',
    icon: 'ability_hunter_beastcall',
  },
  CALL_PET_4: {
    id: 83244,
    name: 'Call Pet 4',
    icon: 'ability_hunter_beastcall',
  },
  CALL_PET_5: {
    id: 83245,
    name: 'Call Pet 5',
    icon: 'ability_hunter_beastcall',
  },
  CONCUSSIVE_SHOT: {
    id: 5116,
    name: 'Concussive Shot',
    icon: 'spell_frost_stun',
  },
  DISENGAGE: {
    id: 781,
    name: 'Disengage',
    icon: 'ability_rogue_feint',
  },
  EXHILARATION: {
    id: 109304,
    name: 'Exhilaration',
    icon: 'ability_hunter_onewithnature',
  },
  FLARE: {
    id: 1543,
    name: 'Flare',
    icon: 'spell_fire_flare',
  },
  FEIGN_DEATH: {
    id: 5384,
    name: 'Feign Death',
    icon: 'ability_rogue_feigndeath',
  },
  FREEZING_TRAP: {
    id: 187650,
    name: 'Freezing Trap',
    icon: 'spell_frost_chainsofice',
  },
  MISDIRECTION: {
    id: 34477,
    name: 'Misdrection',
    icon: 'ability_hunter_misdirection',
  },
  REVIVE_PET_AND_MEND_PET: {
    id: 982,
    name: 'Revive Pet',
    icon: 'ability_hunter_beastsoothe',
  },
  TAR_TRAP: {
    id: 187698,
    name: 'Tar Trap',
    icon: 'spell_yorsahj_bloodboil_black',
  },
  COUNTER_SHOT: {
    id: 147362,
    name: 'Counter Shot',
    icon: 'inv_ammo_arrow_03',
  },
  DISMISS_PET: {
    id: 2641,
    name: 'Dismiss Pet',
    icon: 'spell_nature_spiritwolf',
  },
  PLAY_DEAD: {
    id: 209997,
    name: 'Play Dead',
    icon: 'inv_misc_pelt_bear_03',
  },
  WAKE_UP: {
    id: 210000,
    name: 'Wake Up',
    icon: 'warrior_disruptingshout',
  },
  FETCH: {
    id: 125050,
    name: 'Fetch',
    icon: 'inv_misc_bone_01',
  },
  AUTO_SHOT: {
    id: 75,
    name: 'Auto Shot',
    icon: 'ability_whirlwind',
  },
  EAGLE_EYE: {
    id: 6197,
    name: 'Eagle Eye',
    icon: 'ability_hunter_eagleeye',
  },
  INTIMIDATION: {
    id: 19577,
    name: 'Intimidation',
    icon: 'ability_devour',
  },

  //BFA Pet abilities
  PRIMAL_RAGE: {
    id: 264667,
    name: 'Primal Rage',
    icon: 'spell_shadow_unholyfrenzy',
  },
  MASTERS_CALL: {
    id: 272682,
    name: 'Master\'s Call',
    icon: 'ability_hunter_masterscall',
  },
  SURVIVAL_OF_THE_FITTEST: {
    id: 272679,
    name: 'Survival of the Fittest',
    icon: 'spell_nature_spiritarmor',
  },

};
