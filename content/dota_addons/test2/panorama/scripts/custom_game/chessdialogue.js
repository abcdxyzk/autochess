/* 
	播放棋子的台词
*/ 
const DIALOGUE_LIST = {
	chess_tusk: {
		spawn: 'tusk_tusk_spawn_05',
		win: 'tusk_tusk_win_01',
		merge: 'tusk_tusk_superpunch_attack_01',
	},
	chess_cm: {
		spawn: 'crystalmaiden_cm_spawn_04',
		win: 'crystalmaiden_cm_win_02',
		merge: 'crystalmaiden_cm_spawn_06',
	},
	chess_axe: {
		spawn: 'chess_axe.spawn',//'axe_axe_spawn_05',
		win: 'axe_axe_win_03',
		merge: 'axe_axe_level_01',
	},
	chess_eh: {
		spawn: 'enchantress_ench_spawn_03',
		win: 'enchantress_ench_rare_02',
		merge: 'enchantress_ench_respawn_10',
	},
	chess_om:{
		spawn: 'ogre_magi_ogmag_spawn_05',
		win: 'ogre_magi_ogmag_win_03',
		merge: 'ogre_magi_ogmag_move_15',
	},
	chess_am:{
		spawn: 'antimage_anti_spawn_03',
		win: 'antimage_anti_win_03',
		merge: 'antimage_anti_rare_01',
	},
	chess_clock:{
		spawn: 'rattletrap_ratt_respawn_18',
		win: 'rattletrap_ratt_move_14',
		merge: 'rattletrap_ratt_respawn_17',
	},
	chess_ss:{
		spawn: 'shadowshaman_shad_respawn_05',
		win: 'shadowshaman_shad_win_03',
		merge: 'shadowshaman_shad_rare_03',
	},
	chess_bh:{
		spawn: 'bounty_hunter_bount_spawn_02',
		win: 'bounty_hunter_bount_win_05',
		merge: 'bounty_hunter_bount_spawn_03',
	},
	chess_wd:{
		spawn: 'witchdoctor_wdoc_spawn_04',
		win: 'witchdoctor_wdoc_win_02',
		merge: 'witchdoctor_wdoc_respawn_07',
	},
	chess_tk:{
		spawn: 'tinker_tink_spawn_08',
		win: 'tinker_tink_taunt_03',
		merge: 'tinker_tink_rare_01',
	},
	chess_bm:{
		spawn: 'beastmaster_beas_spawn_02',
		win: 'beastmaster_beas_win_02',
		merge: 'beastmaster_beas_level_06',
	},
	chess_jugg:{
		spawn: 'juggernaut_jug_spawn_05',
		win: 'juggernaut_jug_win_03',
		merge: 'juggernaut_jug_rare_03',
	},
	chess_lyc:{
		spawn: 'lycan_lycan_spawn_02',
		win: 'lycan_lycan_respawn_06',
		merge: 'lycan_lycan_win_03',
	},
	chess_shredder:{
		spawn: 'shredder_timb_spawn_02',
		win: 'shredder_timb_levelup_07',
		merge: 'shredder_timb_move_08',
	},
	chess_pa:{
		spawn: 'phantom_assassin_phass_spawn_04',
		win: 'phantom_assassin_phass_win_02',
		merge: 'phantom_assassin_phass_move_09',
	},
	chess_puck:{
		spawn: 'puck_puck_spawn_05',
		win: 'puck_puck_win_04',
		merge: 'puck_puck_respawn_09',
	},
	chess_slardar:{
		spawn: 'slardar_slar_spawn_03',
		win: 'slardar_slar_win_05',
		merge: 'slardar_slar_level_07',
	},
	chess_ck:{
		spawn: 'chaos_knight_chaknight_spawn_05',
		win: 'chaos_knight_chaknight_rival_13',
		merge: 'chaos_knight_chaknight_rare_01',
	},
	chess_dr:{
		spawn: 'drowranger_dro_spawn_04',
		win: 'drowranger_drow_levelup_07',
		merge: 'drowranger_dro_cast_01',
	},
	chess_light:{
		spawn: 'keeper_of_the_light_keep_spawn_03',
		win: 'keeper_of_the_light_keep_win_04',
		merge: 'keeper_of_the_light_keep_levelup_10',
	},
	chess_razor:{
		spawn: 'razor_raz_spawn_03',
		win: 'razor_raz_level_04',
		merge: 'razor_raz_level_05',
	},
	chess_ok:{
		spawn: 'omniknight_omni_level_01',
		win: 'omniknight_omni_level_08',
		merge: 'omniknight_omni_level_03',
	},
	chess_wr:{
		spawn: 'windrunner_wind_spawn_03',
		win: 'windrunner_wind_kill_03',
		merge: 'windrunner_wind_level_01',
	},
	chess_sk:{
		spawn: 'sandking_skg_spawn_07',
		win: 'sandking_skg_rare_01',
		merge: 'sandking_skg_kill_03',
	},
	chess_abaddon:{
		spawn: 'abaddon_abad_spawn_02',
		win: 'abaddon_abad_win_04',
		merge: 'abaddon_abad_levelup_08',
	},
	chess_slark:{
		spawn: 'slark_slark_spawn_02',
		win: 'slark_slark_win_03',
		merge: 'slark_slark_levelup_06',
	},
	chess_sniper:{
		spawn: 'sniper_snip_spawn_03',
		win: 'sniper_snip_rare_01',
		merge: 'sniper_snip_level_03',
	},
	chess_kunkka:{
		spawn: 'kunkka_kunk_spawn_09',
		win: 'kunkka_kunk_win_03',
		merge: 'kunkka_kunk_spawn_05',
	},
	chess_doom:{
		spawn: 'doom_bringer_doom_spawn_04',
		win: 'doom_bringer_doom_respawn_09',
		merge: 'doom_bringer_doom_level_04',
	},
	chess_lina:{
		spawn: 'lina_lina_rare_02',
		win: 'lina_lina_win_03',
		merge: 'lina_lina_spawn_04',
	},
	chess_troll:{
		spawn: 'troll_warlord_troll_spawn_04',
		win: 'troll_warlord_troll_win_03',
		merge: 'troll_warlord_troll_unknown_09',
	},
	chess_veno:{
		spawn: 'venomancer_venm_level_11',
		win: 'venomancer_venm_win_03',
		merge: 'venomancer_venm_level_04',
	},
	chess_nec:{
		spawn: 'necrolyte_necr_respawn_11',
		win: 'necrolyte_necr_win_04',
		merge: 'necrolyte_necr_rare_04',
	},
	chess_ta:{
		spawn: 'templar_assassin_temp_kill_12',
		win: 'templar_assassin_temp_win_03',
		merge: 'templar_assassin_temp_levelup_04',
	},
	chess_gyro:{
		spawn: 'gyrocopter_gyro_spawn_06',
		win: 'gyrocopter_gyro_kill_07',
		merge: 'gyrocopter_gyro_spawn_03',
	},
	chess_lich:{
		spawn: 'lich_lich_spawn_03',
		win: 'lich_lich_rare_01',
		merge: 'lich_lich_level_01',
	},
	chess_qop:{
		spawn: 'queenofpain_pain_rare_01',
		win: 'queenofpain_pain_kill_12',
		merge: 'queenofpain_pain_taunt_02',
	},
	chess_th:{
		spawn: 'tidehunter_tide_win_03',
		win: 'tidehunter_tide_rare_01',
		merge: 'tidehunter_tide_level_20',
	},
	chess_enigma:{
		spawn: 'enigma_enig_spawn_07',
		win: 'enigma_enig_ability_black_01',
		merge: 'enigma_enig_rare_04',
	},

	chess_bat: {
		spawn: 'batrider_bat_spawn_02',
		win: 'batrider_bat_win_04',
		merge: 'batrider_bat_level_02',
	},
    chess_luna: {
		spawn: 'luna_luna_spawn_03',
		win: 'luna_luna_win_03',
		merge: 'luna_luna_levelup_02',
	},
    chess_tp: {
		spawn: 'treant_treant_move_20',
		win: 'treant_treant_win_04',
		merge: 'treant_treant_move_18',
	},
    chess_sf: {
		spawn: 'nevermore_nev_spawn_10',
		win: 'nevermore_nev_win_03',
		merge: 'nevermore_nev_rare_04',
	},
    chess_dk: {
		spawn: 'dragon_knight_dragon_spawn_02',
		win: 'dragon_knight_dragon_win_03',
		merge: 'dragon_knight_dragon_respawn_08',
	},
    chess_viper: {
		spawn: 'viper_vipe_spawn_04',
		win: 'viper_vipe_win_02',
		merge: 'viper_vipe_rare_03',
	},
    chess_medusa: {
		spawn: 'medusa_medus_stonegaze_07',
		win: 'medusa_medus_win_05',
		merge: 'medusa_medus_rare_05',
	},
    chess_disruptor: {
		spawn: 'disruptor_dis_spawn_02',
		win: 'disruptor_dis_win_05',
		merge: 'disruptor_dis_levelup_07',
	},
    chess_ga: {
		spawn: 'alchemist_alch_spawn_05',
		win: 'alchemist_alch_spawn_06',
		merge: 'alchemist_alch_move_33',
	},
    chess_tech: {
		spawn: 'techies_tech_setmine_52',
		win: 'techies_tech_move_52',
		merge: 'techies_tech_move_40',
	},
	chess_fur: {
		spawn: 'furion_furi_move_13',
		win: 'furion_furi_view_victory_03',
		merge: 'furion_furi_move_06',
	},
	chess_ld: {
		spawn: 'lone_druid_lone_druid_anger_07',
		win: 'lone_druid_lone_druid_level_11',
		merge: 'lone_druid_lone_druid_ability_rabid_03',
	},

	chess_tiny: {
		spawn: 'tiny_tiny_move_12',
		win: 'tiny_tiny_win_04',
		merge: 'tiny_tiny_spawn_03',
	},
	chess_morph: {
		spawn: 'morphling_mrph_respawn_03',
		win: 'morphling_mrph_win_03',
		merge: 'morphling_mrph_ability_repfriend_01',
	},
	chess_tb: {
		spawn: 'terrorblade_terr_shards_respawn_05',
		win: 'terrorblade_terr_shards_rival_28',
		merge: 'terrorblade_terr_shards_rival_14',
	},
	chess_ck_ssr: {
		spawn: 'chaos_knight_chaknight_ability_phantasm_02',
		win: 'chaos_knight_chaknight_rival_24',
		merge: 'chaos_knight_chaknight_rare_01',
	},
	chess_nec_ssr: {
		spawn: 'necrolyte_necr_spawn_04',
		win: 'necrolyte_necr_respawn_13',
		merge: 'necrolyte_necr_rare_04',
	},
	chess_riki: {
		spawn: 'riki_riki_rare_05',
		win: 'riki_riki_level_05',
		merge: 'riki_riki_respawn_05',
	},
	chess_pom: {
		spawn: 'mirana_mir_rival_07',
		win: 'mirana_mir_rare_09',
		merge: 'mirana_mir_thanks_02',
	},
	chess_dp: {
		spawn: 'death_prophet_dpro_respawn_03',
		win: 'death_prophet_dpro_levelup_14',
		merge: 'death_prophet_dpro_spawn_03',
	},

	chess_zeus: {
		spawn: 'zuus_zuus_spawn_04',
		win: 'zuus_zuus_rare_03',
		merge: 'zuus_zuus_spawn_06',
	},
	chess_mars: {
		spawn: 'mars_mars_spawn_20',
		win: 'mars_mars_02',
		merge: 'mars_mars_spawn_10',
	},
	chess_dazzle: {
		spawn: 'dazzle_dazz_ability_shalgrave_09',
		win: 'dazzle_dazz_spawn_04',
		merge: 'dazzle_dazz_ability_weave_07',
	},
	chess_io: {
		spawn: 'wisp_laugh',
		win: 'wisp_win',
		merge: 'wisp_purchase_scepter',
	},
	chess_sven: {
		spawn: "chess_sven.spawn",
		win: "chess_sven.win",
		merge: "chess_sven.merge",
	},
	chess_ww: {
		spawn: "chess_ww.spawn",
		win: "chess_ww.win",
		merge: "chess_ww.merge",
	},
	chess_gs: {
		spawn: "chess_ww.spawn",
		win: "chess_ww.win",
		merge: "chess_ww.merge",
	},
	chess_rubick: {
		spawn: "chess_rubick.spawn",
		win: "chess_rubick.win",
		merge: "chess_rubick.merge",
	},
	chess_gs: {
		spawn: "chess_gs.spawn",
		win: "chess_gs.win",
		merge: "chess_gs.merge",
	},
};
(function () {
    GameEvents.Subscribe( "play_chess_dialogue", OnPlayChessDialogue );
})();
function OnPlayChessDialogue(keys){
	var unit_name = keys.unit_name;
	if (unit_name.indexOf('11') > -1){
		unit_name = unit_name.substr(0,unit_name.length-2);
	}
	if (unit_name.indexOf('1') > -1){
		unit_name = unit_name.substr(0,unit_name.length-1);
	}
	var dialogue_type = keys.dialogue_type;
	if (!DIALOGUE_LIST[unit_name]){
		return;
	}

	var dialogue_name = DIALOGUE_LIST[unit_name][dialogue_type];
	if (dialogue_name){
		if (dialogue_type == 'win'){
			$.Schedule(2,function(){
				Game.EmitSound(dialogue_name);
			});
		}
		else{
			Game.EmitSound(dialogue_name);
		}
	}
}