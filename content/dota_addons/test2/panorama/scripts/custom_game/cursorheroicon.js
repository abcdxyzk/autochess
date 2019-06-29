/* 
	显示鼠标上悬浮的英雄图标

	js调用方法：
	// 显示
	show_cursor_hero('chess_tusk');  
	// 隐藏
	hide_cursor_hero();				

	lua调用方法：
	--显示
	CustomGameEventManager:Send_ServerToTeam(caster:GetTeam(),"show_cursor_hero_icon",{
		unit = target:GetUnitName()
	})
	--隐藏
	CustomGameEventManager:Send_ServerToTeam(caster:GetTeam(),"show_cursor_hero_icon",{})
*/ 
const UNIT_2_HERO = {
	// 1
	chess_tusk: 'npc_dota_hero_tusk',
	chess_cm: 'npc_dota_hero_crystal_maiden',
	chess_axe: 'npc_dota_hero_axe', 
	chess_eh: 'npc_dota_hero_enchantress',
	chess_om: 'npc_dota_hero_ogre_magi',
	chess_am: 'npc_dota_hero_antimage',
	chess_clock: 'npc_dota_hero_rattletrap',
	chess_ss: 'npc_dota_hero_shadow_shaman',
	chess_bh: 'npc_dota_hero_bounty_hunter',
	chess_wd: 'npc_dota_hero_witch_doctor',
	// 2
	chess_tk: 'npc_dota_hero_tinker',
	chess_bm: 'npc_dota_hero_beastmaster',
	chess_jugg: 'npc_dota_hero_juggernaut',
	chess_lyc: 'npc_dota_hero_lycan',
	chess_shredder: 'npc_dota_hero_shredder',
	chess_pa: 'npc_dota_hero_phantom_assassin',
	chess_puck: 'npc_dota_hero_puck',
	chess_slardar: 'npc_dota_hero_slardar',
	chess_ck: 'npc_dota_hero_chaos_knight',
	// 3
	chess_dr: 'npc_dota_hero_drow_ranger',
	chess_light: 'npc_dota_hero_keeper_of_the_light',
	chess_razor: 'npc_dota_hero_razor',
	chess_ok: 'npc_dota_hero_omniknight',
	chess_wr: 'npc_dota_hero_windrunner',
	chess_sk: 'npc_dota_hero_sand_king',
	chess_abaddon: 'npc_dota_hero_abaddon',
	chess_slark: 'npc_dota_hero_slark',
	chess_sniper: 'npc_dota_hero_sniper',
	// 4
	chess_kunkka: 'npc_dota_hero_kunkka',
	chess_doom: 'npc_dota_hero_doom_bringer',
	chess_lina: 'npc_dota_hero_lina',
	chess_troll: 'npc_dota_hero_troll_warlord',
	chess_veno: 'npc_dota_hero_venomancer',
	chess_nec: 'npc_dota_hero_necrolyte',
	chess_ta: 'npc_dota_hero_templar_assassin',
	// 5
	chess_gyro: 'npc_dota_hero_gyrocopter',
	chess_lich: 'npc_dota_hero_lich',
	chess_qop: 'npc_dota_hero_queenofpain',
	chess_th: 'npc_dota_hero_tidehunter',
	chess_enigma: 'npc_dota_hero_enigma',
	// new
	chess_bat: 'npc_dota_hero_batrider',
    chess_luna: 'npc_dota_hero_luna',
    chess_tp: 'npc_dota_hero_treant',
    chess_sf: 'npc_dota_hero_nevermore',
    chess_dk: 'npc_dota_hero_dragon_knight',
    chess_viper: 'npc_dota_hero_viper',
    chess_medusa: 'npc_dota_hero_medusa',
    chess_disruptor: 'npc_dota_hero_disruptor',
    chess_ga: 'npc_dota_hero_alchemist',
    chess_tech: 'npc_dota_hero_techies',
    //
    chess_fur: 'npc_dota_hero_furion',
    chess_ld: 'npc_dota_hero_lone_druid',
    chess_morph: 'npc_dota_hero_morphling',
    chess_tb: 'npc_dota_hero_terrorblade',
    chess_tiny: 'npc_dota_hero_tiny',
    chess_nec_ssr: 'npc_dota_hero_necrolyte',
    chess_ck_ssr: 'npc_dota_hero_chaos_knight',
    //
    chess_riki: 'npc_dota_hero_riki',
    chess_dp: 'npc_dota_hero_death_prophet',
    chess_pom: 'npc_dota_hero_mirana',
    //
    chess_zeus: 'npc_dota_hero_zuus',
    chess_mars: 'npc_dota_hero_mars',
    chess_dazzle: 'npc_dota_hero_dazzle',
    chess_io: 'npc_dota_hero_wisp',
    chess_sven: 'npc_dota_hero_sven',
    chess_ww: 'npc_dota_hero_winter_wyvern',
    chess_gs: 'npc_dota_hero_grimstroke',
    chess_rubick: 'npc_dota_hero_rubick',
}
var IS_CURSOR_HERO_ICON_SHOWING = false;
start_cursor_hero_icon();
(function () {
    GameEvents.Subscribe( "show_cursor_hero_icon", OnShowCursorHeroIcon );
})();
function OnShowCursorHeroIcon(keys){
	if (keys.unit){
		show_cursor_hero(keys.unit);
	}
	else{
		hide_cursor_hero();
	}
}
function start_cursor_hero_icon(){
    var cursor_position = GameUI.GetCursorPosition();
    $('#cursor_hero_icon').style['position'] = ''+(cursor_position[0]-30)*1920/Game.GetScreenWidth()+'px '+(cursor_position[1]-30)*1080/Game.GetScreenHeight()+'px 0px';
    $.Schedule(0.01,function(){
        start_cursor_hero_icon();
    });
}
function show_cursor_hero(unit_name){
	if (unit_name.indexOf('11') > -1){
		unit_name = unit_name.substr(0,unit_name.length-2);
	}
	if (unit_name.indexOf('1') > -1){
		unit_name = unit_name.substr(0,unit_name.length-1);
	}
    $('#cursor_hero_icon').style['opacity'] = 1;
    $('#cursor_hero_icon').heroname = UNIT_2_HERO[unit_name] || '';
    IS_CURSOR_HERO_ICON_SHOWING = true;
}
function hide_cursor_hero(){
    $('#cursor_hero_icon').style['opacity'] = 0;
    $('#cursor_hero_icon').heroname = '';
    IS_CURSOR_HERO_ICON_SHOWING = false;
}
