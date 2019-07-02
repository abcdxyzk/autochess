// 全局变量
var CHESS_COUNT = 60;
$('#text_chess_list_tile').text = $.Localize('tips_icon-list_title') + ' ('+CHESS_COUNT+')';

var CHESS_2_HERO = {
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
    chess_tk: 'npc_dota_hero_tinker',
    chess_bm: 'npc_dota_hero_beastmaster',
    chess_jugg: 'npc_dota_hero_juggernaut',
    chess_lyc: 'npc_dota_hero_lycan',
    chess_shredder: 'npc_dota_hero_shredder',
    chess_pa: 'npc_dota_hero_phantom_assassin',
    chess_puck: 'npc_dota_hero_puck',
    chess_slardar: 'npc_dota_hero_slardar',
    chess_ck: 'npc_dota_hero_chaos_knight',
    chess_dr: 'npc_dota_hero_drow_ranger',
    chess_light: 'npc_dota_hero_keeper_of_the_light',
    chess_razor: 'npc_dota_hero_razor',
    chess_ok: 'npc_dota_hero_omniknight',
    chess_wr: 'npc_dota_hero_windrunner',
    chess_sk: 'npc_dota_hero_sand_king',
    chess_abaddon: 'npc_dota_hero_abaddon',
    chess_slark: 'npc_dota_hero_slark',
    chess_sniper: 'npc_dota_hero_sniper',
    chess_kunkka: 'npc_dota_hero_kunkka',
    chess_doom: 'npc_dota_hero_doom_bringer',
    chess_lina: 'npc_dota_hero_lina',
    chess_troll: 'npc_dota_hero_troll_warlord',
    chess_veno: 'npc_dota_hero_venomancer',
    chess_nec: 'npc_dota_hero_necrolyte',
    chess_ta: 'npc_dota_hero_templar_assassin',
    chess_gyro: 'npc_dota_hero_gyrocopter',
    chess_lich: 'npc_dota_hero_lich',
    chess_qop: 'npc_dota_hero_queenofpain',
    chess_th: 'npc_dota_hero_tidehunter',
    chess_enigma: 'npc_dota_hero_enigma',
    //
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
    chess_ww:'npc_dota_hero_winter_wyvern',
    chess_gs: 'npc_dota_hero_grimstroke',
    chess_rubick: 'npc_dota_hero_rubick',

    chess_kael: 'npc_dota_hero_invoker',
    chess_chen: 'npc_dota_hero_chen',
    chess_spec: 'npc_dota_hero_spectre',
    chess_aw: 'npc_dota_hero_arc_warden',
    chess_visage: 'npc_dota_hero_visage',
    chess_thd: 'npc_dota_hero_jakiro',
    chess_mk: 'npc_dota_hero_monkey_king',
    chess_fv: 'npc_dota_hero_faceless_void',
    chess_pangolier: 'npc_dota_hero_pangolier',
    chess_meepo: 'npc_dota_hero_meepo',
    chess_lion: 'npc_dota_hero_lion',
    chess_lc: 'npc_dota_hero_legion_commander',
    chess_phx: 'npc_dota_hero_phoenix',
    chess_pudge: 'npc_dota_hero_pudge',
    chess_oracle: 'npc_dota_hero_oracle',
    chess_huskar: 'npc_dota_hero_huskar',
    chess_wl: 'npc_dota_hero_warlock',
    chess_naga: 'npc_dota_hero_naga_siren',

};
var CHESS_2_LEVEL = {
    chess_tusk: 1,
    chess_cm: 2,
    chess_axe: 1,
    chess_eh: 1,
    chess_om: 1,
    chess_am: 1,
    chess_clock: 1,
    chess_ss: 1,
    chess_bh: 1,
    chess_wd: 2,
    chess_tk: 1,
    chess_bm: 2,
    chess_jugg: 2,
    chess_lyc: 3,
    chess_shredder: 2,
    chess_pa: 3,
    chess_puck: 2,
    chess_slardar: 2,
    chess_ck: 2,
    chess_dr: 1,
    chess_light: 4,
    chess_razor: 3,
    chess_ok: 3,
    chess_wr: 3,
    chess_sk: 3,
    chess_abaddon: 3,
    chess_slark: 2,
    chess_sniper: 3,
    chess_kunkka: 4,
    chess_doom: 4,
    chess_lina: 3,
    chess_troll: 4,
    chess_veno: 3,
    chess_nec: 4,
    chess_ta: 4,
    chess_gyro: 5,
    chess_lich: 2,
    chess_qop: 2,
    chess_th: 5,
    chess_enigma: 5,

    chess_bat: 1,
    chess_luna: 2,
    chess_tp: 3,
    chess_sf: 3,
    chess_dk: 4,
    chess_viper: 3,
    chess_medusa: 4,
    chess_disruptor: 4,
    chess_ga: 4,
    chess_tech: 5,

    chess_fur: 2,
    chess_ld: 4,

    chess_morph: 2,
    chess_tiny: 1,
    chess_tb: 3,
    chess_ck_ssr: 15,
    chess_nec_ssr: 10,

    chess_riki: 3,
    chess_dp: 5,
    chess_pom: 2,

    chess_zeus: 5,
    chess_mars: 1,
    chess_dazzle: 3,
    chess_io: 5,
    chess_sven: 5,
    chess_ww: 1,
    chess_gs: 4,
    chess_rubick: 2,
};
var LEVEL_2_COLOR = {
    1: '#bbbbbb',
    2: '#bbbbff',
    3: '#6666ff',
    4: '#ff00ff',
    5: '#ff8800',
    6: '#ade55c',
}
var COLOR = {
    "1":"#888888",
    "2":"#4444ff",
    "3":"#ff00ff",
    "4":"#ff8800",
}
var CHESS_2_SPEC_CLASS = {
    // 1
    chess_tusk: 'is_beast,is_warrior',
    chess_cm: 'is_human,is_mage',
    chess_axe: 'is_orc,is_warrior', 
    chess_eh: 'is_beast,is_druid',
    chess_om: 'is_ogre,is_mage',
    chess_am: 'is_elf,is_demonhunter',
    chess_clock: 'is_goblin,is_mech',
    chess_ss: 'is_troll,is_shaman',
    chess_bh: 'is_goblin,is_assassin',
    chess_wd: 'is_troll,is_warlock',
    // 2
    chess_tk: 'is_goblin,is_mech',
    chess_bm: 'is_orc,is_hunter',
    chess_jugg: 'is_orc,is_warrior',
    chess_lyc: 'is_human,is_beast,is_warrior',
    chess_shredder: 'is_goblin,is_mech',
    chess_pa: 'is_elf,is_assassin',
    chess_puck: 'is_elf,is_dragon,is_mage',
    chess_slardar: 'is_naga,is_warrior',
    chess_ck: 'is_demon,is_knight',
    // 3
    chess_dr: 'is_undead,is_hunter',
    chess_light: 'is_human,is_mage',
    chess_razor: 'is_element,is_mage',
    chess_ok: 'is_human,is_knight',
    chess_wr: 'is_elf,is_hunter',
    chess_sk: 'is_beast,is_assassin',
    chess_abaddon: 'is_undead,is_knight',
    chess_slark: 'is_naga,is_assassin',
    chess_sniper: 'is_dwarf,is_hunter',
    // 4
    chess_kunkka: 'is_human,is_warrior',
    chess_doom: 'is_demon,is_warrior',
    chess_lina: 'is_human,is_mage',
    chess_troll: 'is_troll,is_warrior',
    chess_veno: 'is_beast,is_warlock',
    chess_nec: 'is_undead,is_warlock',
    chess_ta: 'is_elf,is_assassin',
    // 5
    chess_gyro: 'is_dwarf,is_mech',
    chess_lich: 'is_undead,is_mage',
    chess_qop: 'is_demon,is_assassin',
    chess_th: 'is_naga,is_hunter',
    chess_enigma: 'is_element,is_warlock',
    // new
    chess_bat: 'is_troll,is_knight',
    chess_luna: 'is_elf,is_knight',
    chess_tp: 'is_elf,is_druid',
    chess_sf: 'is_demon,is_warlock',
    chess_dk: 'is_human,is_dragon,is_knight',
    chess_viper: 'is_dragon,is_assassin',
    chess_medusa: 'is_naga,is_hunter',
    chess_disruptor: 'is_orc,is_shaman',
    chess_ga: 'is_goblin,is_ogre,is_warlock',
    chess_tech: 'is_goblin,is_mech',

    chess_fur: 'is_elf,is_druid',
    chess_ld: 'is_beast,is_druid',

    chess_tiny: 'is_element,is_warrior',
    chess_morph: 'is_element,is_assassin',
    chess_tb: 'is_demon,is_demonhunter',
    chess_nec_ssr: 'is_undead,is_warlock',
    chess_ck_ssr: 'is_demon,is_knight',

    chess_riki: 'is_satyr,is_assassin',
    chess_pom: 'is_elf,is_hunter',
    chess_dp: 'is_undead,is_warlock',

    chess_zeus: 'is_god,is_mage',
    chess_mars: 'is_god,is_warrior',
    chess_dazzle : 'is_troll,is_priest',
    chess_io: 'is_elf',
    chess_sven: 'is_demon,is_warrior',
    chess_ww: 'is_dragon,is_mage',
    chess_rubick: 'is_god,is_wizard',
    chess_gs: 'is_demon,is_wizard',
}

var my_collect_ready = {};
var IS_PANEL_DRAW_CARD_CAN_OPEN = false;

var BATTLE_STATUS = 0; // 0=准备阶段，1=pve对战，2=玩家对战，3=云对战

var RARITY_COLOR = {1:'rgba(96,96,96,0.6)',2:'rgba(64,64,255,0.6)',3:'rgba(200,0,200,0.6)',4:'rgba(255,128,0,0.6)'};
var RARITY_COLOR_TEXT_SAY = {1:'#ffffff',2:'#8888ff',3:'#ff88ff',4:'#ff8800'};
function find_dota_hud_element(id){
    var hudRoot;
    for(panel=$.GetContextPanel();panel!=null;panel=panel.GetParent()){
        hudRoot = panel;
    }
    var comp = hudRoot.FindChildTraverse(id);
    return comp;
}
find_dota_hud_element('ToggleScoreboardButton').style['opacity'] = '0';
find_dota_hud_element('shop_launcher_block').style['opacity'] = '0';
find_dota_hud_element('shop').style['margin-bottom'] = '0px';
find_dota_hud_element('HeightLimiter').style['opacity'] = '0';
find_dota_hud_element('GuideFlyout').style['opacity'] = '0';
find_dota_hud_element('Main').style['vertical-align'] = 'bottom';
find_dota_hud_element('Main').style['height'] = '100px';
find_dota_hud_element('Main').style['background-color'] = '#00000000';
find_dota_hud_element('ItemCombines').style['background-image'] = 'none';
find_dota_hud_element('ItemCombines').style['background-color'] = 'rgba(0,0,0,0.8)';
find_dota_hud_element('ItemCombines').style['border-radius'] = '5px';
find_dota_hud_element('inventory_tpscroll_container').style['opacity'] = '0';
find_dota_hud_element('RadarButton').style['opacity'] = '0';
find_dota_hud_element('GlyphScanContainer').style['opacity'] = '0';
find_dota_hud_element('TipContainer').style['opacity'] = '0';
find_dota_hud_element('PrevTip').style['opacity'] = '0';
find_dota_hud_element('NextTip').style['opacity'] = '0';

$('#buy_candy_ad').SetImage('http://drodo.oss-cn-shanghai.aliyuncs.com/ads/buy_candy_ad_'+$.Language()+'.png')

Game.AddCommand( "+TogglePanel", toggle_panel, "",0);
Game.AddCommand( "+BackHome", OnBackHome, "",0);
Game.AddCommand( "+TabHome", OnTabHome, "",0);
Game.AddCommand( "+ToggleF9", toggle_f9, "",0);

var steamid2panelindex = {};

var player_count = 0;
var player_radient = 0;
var player_dire = 0;
var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;

var changed = false;
var heroindex2id = {};
var timeout = 15;
var userinfo;
var CURR_HOST_OPPO = null;
var CURR_GUEST_OPPO = null;

// 初始化


// 注册事件
(function () {
    GameEvents.Subscribe( "start_game", OnStartGame );
    GameEvents.Subscribe( "show_time", OnShowTime );
    GameEvents.Subscribe( "mima", OnMima );
    GameEvents.Subscribe( "show_draw_card", OnShowDrawCard );
    GameEvents.Subscribe( "close_draw_card", close_panel_draw_card );
    GameEvents.Subscribe( "show_gold", OnShowGold );
    GameEvents.Subscribe( "send_http_cb", SendHTTPCb );
    GameEvents.Subscribe( "win_streak", OnWinStreak );
    GameEvents.Subscribe( "bullet", OnBullet );
    GameEvents.Subscribe( "sync_hp", OnSyncHp );
    GameEvents.Subscribe( "population", OnPopulation );
    GameEvents.Subscribe( "battle_info", OnBattleInfo );
    GameEvents.Subscribe( "player_reconnect", OnPlayerReconnect );
    GameEvents.Subscribe( "show_liuju", OnShowLiuju );
    GameEvents.Subscribe( "hide_liuju", OnHideLiuju );
    GameEvents.Subscribe( "update_liuju", OnUpdateLiuju );
    GameEvents.Subscribe( "request_buy_chess_cb", OnRequestBuyChessCb );
    GameEvents.Subscribe( "show_gameover", OnShowGameover );
    
})();
CustomNetTables.SubscribeNetTableListener( "dac_table", DACTableChanged );
CustomNetTables.SubscribeNetTableListener( "player_info_table", PlayerInfoTableChanged );
CustomNetTables.SubscribeNetTableListener( "ranking_top_table", RankingTopTableChanged );
// CustomNetTables.SubscribeNetTableListener( "setting_table", SettingTableChanged );

var CURR_CAMERA_PLAYER_ID = Players.GetLocalPlayer();
var CENTER_ENTITY_INDEX = {
    6 : [-2048,1920,128],
    7 : [0,1920,128],
    8 : [2048,1920,128],
    9 : [2048,-128,128],
    10 : [2048,-2174,128],
    11 : [0,-2174,128],
    12 : [-2048,-2174,128],
    13 : [-2048,-128,128],
};
var is_mimaing = false;
var mima_waterid = 0;
function OnBackHome(){
    if (CENTER_ENTITY_INDEX[Players.GetTeam(Players.GetLocalPlayer())]){
        // GameUI.SetCameraTarget( parseInt(CENTER_ENTITY_INDEX[Players.GetLocalPlayer()]) );
        GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(Players.GetLocalPlayer())], 0.2 );

        CURR_CAMERA_PLAYER_ID = Players.GetLocalPlayer();
        $.Schedule(0.5,function(){
            GameUI.SetCameraTarget( -1 );
        });
    }
}
function OnTabHome(){
    var hero = null;
    for (var i=1;i<=9;i++){
        CURR_CAMERA_PLAYER_ID = CURR_CAMERA_PLAYER_ID + 1;

        if (CURR_CAMERA_PLAYER_ID > 8){
            CURR_CAMERA_PLAYER_ID = 0;           
        }
        if (!Players.IsValidPlayerID(CURR_CAMERA_PLAYER_ID)){
            continue;
        }
        hero = Players.GetPlayerHeroEntityIndex(CURR_CAMERA_PLAYER_ID);
        if (!hero){
            continue;
        }
        if (!Entities.IsAlive(hero)){
            continue;
        }
        if (!CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)]){
            continue;
        }
        break;
    }
    if (!hero){
        return;
    }

    // GameUI.SetCameraTarget( parseInt(CENTER_ENTITY_INDEX[CURR_CAMERA_PLAYER_ID]) );
    GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)], 0.2 );
    
    $.Schedule(0.5,function(){
        GameUI.SetCameraTarget( -1 );
    });
}
function OnShowTime(keys){
    if (!CheckClientKey(keys.key)) return;
    // var h = Math.floor(keys.total_time/3600)<10?'0'+Math.floor(keys.total_time/3600):Math.floor(keys.total_time/3600);
    // var m = Math.floor((keys.total_time-h*3600)/60)<10?'0'+Math.floor((keys.total_time-h*3600)/60):Math.floor((keys.total_time-h*3600)/60);
    // var s = (keys.total_time-h*3600-m*60)<10?'0'+(keys.total_time-h*3600-m*60):(keys.total_time-h*3600-m*60);
    $('#total_time').text = time2showtime_hour(keys.total_time);
    $('#round_time').text = keys.timer_round<10?'0'+keys.timer_round:keys.timer_round;

    if (keys.round_status == 'battle'){
        $('#round_status').text = $.Localize('zhandouhuihe');
        $('#round_status').SetHasClass('text_green',false);
        $('#round_status').SetHasClass('text_yellow',false);
        $('#round_status').SetHasClass('text_red',true);
    }
    if (keys.round_status == 'ready'){
        $('#round_status').text = $.Localize('readyhuihe');
        $('#round_status').SetHasClass('text_green',false);
        $('#round_status').SetHasClass('text_yellow',true);
        $('#round_status').SetHasClass('text_red',false);
    }
    if (keys.round_status == 'prepare'){
        $('#round_status').text = $.Localize('zhunbeihuihe');
        $('#round_status').SetHasClass('text_green',true);
        $('#round_status').SetHasClass('text_yellow',false);
        $('#round_status').SetHasClass('text_red',false);
    }
}
function OnShowGameTime(keys){
    $('#panel_time_best').text = time2showtime_hour(keys.time);
}
function time2showtime_hour(t){
    if (t>362439) t = 362439;
    var h = 0, m = 0, s = 0;
    if (!t) return "00:00:00";

    t = parseInt(t);
    h = Math.floor(t/3600);
    m = Math.floor((t-h*3600)/60);
    s = t-h*3600 - m*60;

    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return h+':'+m+':'+s;
}
function OnMima(keys){
    if (!CheckClientKey(keys.key)) return;
    Game.EmitSound("General.CastFail_NoMana");
    mima_waterid ++;
    var mid = mima_waterid;
    $('#text_mima').text = $.Localize(keys.text);
    $('#panel_mima').style['opacity'] = '1';
    $('#panel_mima').style['transform'] = 'scale3d( 1.25, 1.25, 1.25)';
    $.Schedule(0.2,function(){
        $('#panel_mima').style['transform'] = 'scale3d( 1, 1, 1)';
    });
    $.Schedule(3,function(){
        if (mid == mima_waterid){
            $('#panel_mima').style['opacity'] = '0';
        }
    });
}

var round_mana = 1;
var lose_streak_anwei = 0;
var win_streak_anwei = 0;
var UNIT_NAME_INDEX = {};
var ROUND = 0;
var CHESS_STAT = {};
function ShowChesses(pos){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_chesses_title'),$.Localize('tips_chesses_text'));
}
function ShowBattle(pos){
    if (BATTLE_STATUS){
        $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_battle_title'+BATTLE_STATUS),$.Localize('tips_battle_text'+BATTLE_STATUS));
    }
}
function ShowInterest(pos){
    var curr_gold = Entities.GetMana(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer()));
    var shouru = ROUND>=4?5:(ROUND+1);
    var lixi = Math.floor(curr_gold/10);
    if (lixi > 5 ){
        lixi = 5;
    }
    var all_shouru = Math.floor(shouru + lixi);

    var text = $.Localize('tips_gold_0')+$.Localize('tips_gold_1')+ Math.floor(curr_gold) + $.Localize('tips_gold_2')+shouru;
    if (lixi > 0 ){
        text += $.Localize('tips_gold_3')+lixi;
    }
    text += $.Localize('tips_gold_35');
    if (win_streak_anwei > 0){
        text += $.Localize('tips_gold_5')+(win_streak_anwei);
    }
    if (lose_streak_anwei > 0){
        text += $.Localize('tips_gold_4')+(lose_streak_anwei);
    }

    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos),$.Localize('tips_gold_title'), text);
}
function OnMouseOut(){
    $.DispatchEvent( "DOTAHideTextTooltip" );
    $.DispatchEvent( "DOTAHideTitleTextTooltip" );
}

function change_camera_2_player_ground(player_id){
    CURR_CAMERA_PLAYER_ID = player_id;
    GameUI.SetCameraTargetPosition( CENTER_ENTITY_INDEX[Players.GetTeam(CURR_CAMERA_PLAYER_ID)], 0.2 );

    $.Schedule(0.5,function(){
        GameUI.SetCameraTarget( -1 );
    });
}
function PlayerInfoTableChanged(table,key,data){
    if (key == 'player_info'){
        for (var i in data.data){
            var info = data.data[i];
            var lineup_worth = 0;
            var player_id = info.player_id;

            if (info.chess_lineup){
                var str = info.chess_lineup;
                // 显示阵容
                var chess_lineup_arr = str.split(',');
                var chess_arr = [];
                // 去除空的和无效的
                for (var j=0;j<chess_lineup_arr.length;j++){
                    if (chess_lineup_arr[j]){
                        chess_arr.push(chess_lineup_arr[j]);
                    }
                }
                //排序
                chess_arr.sort(function(a,b){
                    var score_b = 0;
                    var score_a = 0;

                    if (a.indexOf('11')>-1){
                        score_a += 10000;
                    }
                    if (b.indexOf('11')>-1){
                        score_b += 10000;
                    }
                    if (a.indexOf('1')>-1){
                        score_a += 100;
                    }
                    if (b.indexOf('1')>-1){
                        score_b += 100;
                    }
                    score_a += get_chess_cost(a);
                    score_b += get_chess_cost(b);

                    return score_b-score_a;
                });
                //显示i的阵容！
                var lineup_str = '';
                for (var j=0;j<chess_arr.length;j++){
                    var chess = chess_arr[j];
                    var chess_star = 1;
                    var chess_star_str = "■";
                    var chess_level = 1;

                    if (chess.indexOf('11')>-1){
                        chess_star = 3;
                        chess_star_str = "■■■";
                        chess = chess.substr(0,chess.length-2);
                        chess_level = 9;
                    }
                    if (chess.indexOf('1')>-1){
                        chess_star_str = "■■";
                        chess_star = 2;
                        chess = chess.substr(0,chess.length-1);
                        chess_level = 3;
                    }
                    var chess_name = CHESS_2_HERO[chess];
                    var chess_index = j + 1;
                    lineup_worth += chess_level * (CHESS_2_LEVEL[chess]||1);

                    lineup_str += '<DOTAHeroImage heroname="'+chess_name+'" heroimagestyle="icon" class="lineup_chess'+(j+1)+'" id = "chess_lineup_'+(player_id+1)+'_'+(j+1)+'"/>';
                    lineup_str +=  '<Label id="chess_lineup_star_'+(player_id+1)+'_'+(j+1)+'" class="lineup_star'+(j+1)+'" style="horizontal-align:left;vertical-align:top;font-size:10px;text-align:center;color:'+(LEVEL_2_COLOR[CHESS_2_LEVEL[chess]]||'#fff')+';" text="'+chess_star_str+'"/>';

                    // $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('invisible',false);
                    // $("#chess_lineup_"+(i+1)+"_"+chess_index).heroname = chess_name;
                    // $("#chess_lineup_"+(i+1)+"_"+chess_index).SetHasClass('chess_lineup_chess_big',true);

                    // if ($("#chess_lineup_star_"+(i+1)+"_"+chess_index)){
                    //     $("#chess_lineup_star_"+(i+1)+"_"+chess_index).text = chess_star_str;
                    //     $("#chess_lineup_star_"+(i+1)+"_"+chess_index).SetHasClass('invisible',false);

                    //     if (LEVEL_2_COLOR[CHESS_2_LEVEL[chess]]){
                    //         var color = LEVEL_2_COLOR[CHESS_2_LEVEL[chess]];
                    //         $("#chess_lineup_star_"+(i+1)+"_"+chess_index).style['color'] = color;
                    //     }
                    // }
                }
                $('#player_details_lineup_'+player_id).RemoveAndDeleteChildren();
                $('#player_details_lineup_'+player_id).BCreateChildren(lineup_str);
            }

            // 渲染玩家详情面板
            $('#player_details_damage_'+player_id).text = '♥'+(info.hero_damage || 0);
            $("#player_details_win_"+player_id).text = info.win_round+'-'+info.lose_round;
            $("#player_details_money_"+player_id).text = '$'+lineup_worth;

            if (info.buff){
                // 显示buff
                var buff_str1 = "";
                var buffs = info.buff.split(',');
                var BUFF_LIST_1 = {
                    is_troll: [2,4],
                    is_beast: [2,4,6],
                    is_elf: [3,6,9],
                    is_human: [2,4,6],
                    is_undead: [2,4,6],
                    is_orc: [2,4,6],
                    is_naga: [2],
                    is_goblin: [3,6],
                    is_element: [2,4],
                    is_dragon: [3],
                    is_god: [1,2,3],
                    is_demon: [1],
                    is_dwarf: [1],
                    is_ogre: [1],
                };

                var BUFF_LIST_2 = {
                    is_warrior: [3,6,9],
                    is_mage: [3,6],
                    is_warlock: [3,6],
                    is_mech: [2,4],
                    is_assassin: [3,6],
                    is_hunter: [3,6],
                    is_knight: [3,6],
                    is_shaman: [2],
                    is_demonhunter: [1,2],
                    is_druid: [2,4],
                    is_priest: [1],
                    is_wizard: [2],
                };
                var buff_count_list = {};
                for (var j=0;j<buffs.length;j++){
                    if (buffs[j]){
                        var buff = buffs[j];
                        var buff_name = buff.split(':')[0];
                        var buff_count = parseInt(buff.split(':')[1] || 0);
                        buff_count_list[buff_name] = buff_count;
                    }
                }
                var have_spec_buff = false;
                var have_wizard_buff = false;
                if (buff_count_list['is_wizard'] >= 2){
                    have_wizard_buff = true;
                }
                for (var j=0;j<buffs.length;j++){
                    if (buffs[j]){
                        var buff = buffs[j];
                        var buff_name = buff.split(':')[0];
                        var buff_count = parseInt(buff.split(':')[1] || 0);

                        if (BUFF_LIST_1[buff_name]){
                            // 种族技能
                            var show_buff_count = 0;
                            for (var a=0;a<BUFF_LIST_1[buff_name].length;a++){
                                var a_count = BUFF_LIST_1[buff_name][a];
                                if (a_count >= 4 && have_wizard_buff){
                                    a_count = a_count -1;
                                    if (buff_count>=a_count){
                                        show_buff_count = a_count+1;
                                    }
                                }
                                else{
                                    if (buff_count>=a_count){
                                        show_buff_count = a_count;
                                    }
                                }
                                
                            }
                            var is_dh = false;
                            if (buff_count_list['is_demonhunter'] >= 2){
                                is_dh = true;
                            }
                            if (buff_name == 'is_demon' && buff_count > 1 && !is_dh){
                                show_buff_count = 0;
                            }
                            if (buff_name == 'is_demon' && buff_count > 1 && is_dh){
                                show_buff_count = 1;
                            }
                            if (show_buff_count>0 && buff_name != 'is_god'){
                                have_spec_buff = true;
                                var color = 'color-'+buff_name.split('_')[1];
                                buff_str1 += "<Panel class='panel_end_buff_one' style='height:60px;'>";
                                buff_str1 += "<DOTAAbilityImage class='img_end_buff_one' abilityname='"+buff_name+"'/>";
                                buff_str1 += "<Label class='text_end_buff_one' text='("+show_buff_count+")' style='font-size:18px;'/>";
                                buff_str1 += "</Panel>";
                            }
                        }
                        if (BUFF_LIST_2[buff_name]){
                            // 职业技能
                            var show_buff_count = 0;
                            for (var a=0;a<BUFF_LIST_2[buff_name].length;a++){
                                var a_count = BUFF_LIST_2[buff_name][a];
                                if (a_count >= 4 && have_wizard_buff){
                                    a_count = a_count -1;
                                    if (buff_count>=a_count){
                                        show_buff_count = a_count+1;
                                    }
                                }
                                else{
                                    if (buff_count>=a_count){
                                        show_buff_count = a_count;
                                    }
                                }
                            }
                            if (show_buff_count>0){
                                var color = 'color-'+buff_name.split('_')[1];
                                buff_str1 += "<Panel class='panel_end_buff_one' style='height:60px;'>";
                                buff_str1 += "<DOTAAbilityImage class='img_end_buff_one' abilityname='"+buff_name+"'/>";
                                buff_str1 += "<Label class='text_end_buff_one' text='("+show_buff_count+")' style='font-size:18px;'/>";
                                buff_str1 += "</Panel>";
                            }
                        }
                    }
                }

                if (have_spec_buff == false && buff_count_list['is_god'] == 1){
                    buff_str1 = "<Panel class='panel_end_buff_one' style='height:60px;'><DOTAAbilityImage class='img_end_buff_one' abilityname='is_god'/><Label class='text_end_buff_one' text='(1)' style='font-size:18px;'/></Panel>" + buff_str1;
                }
                if (have_spec_buff == false && buff_count_list['is_god'] == 2){
                    buff_str1 = "<Panel class='panel_end_buff_one' style='height:60px;'><DOTAAbilityImage class='img_end_buff_one' abilityname='is_god'/><Label class='text_end_buff_one' text='(2)' style='font-size:18px;'/></Panel>" + buff_str1;
                }
                if (have_spec_buff == false && buff_count_list['is_god'] >= 3){
                    buff_str1 = "<Panel class='panel_end_buff_one' style='height:60px;'><DOTAAbilityImage class='img_end_buff_one' abilityname='is_god'/><Label class='text_end_buff_one' text='(3)' style='font-size:18px;'/></Panel>" + buff_str1;
                }

                buff_str1 = "<Panel class='end_buff_line_1' style='height:60px;'>"+buff_str1+"</Panel>";
                // buff_str2 += "</Panel>";

                $('#player_details_buff_'+player_id).RemoveAndDeleteChildren();

                $('#player_details_buff_'+player_id).BCreateChildren(buff_str1);
                // $('#end_buff_'+(i+1)).BCreateChildren(buff_str2);
            }

            if (info.is_vip){
                $('#avatar_player_vip_badge_'+player_id).SetHasClass('invisible',false);
                $('#avatar_player_vip_'+player_id).SetHasClass('invisible',false);
            }
            else{
                $('#avatar_player_vip_badge_'+player_id).SetHasClass('invisible',true);
                $('#avatar_player_vip_'+player_id).SetHasClass('invisible',true);
            }

        }
    }
}
// function SettingTableChanged(table,key,data){
//     if (key == 'show_settings'){
//         var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
//         var my_setting = data[local_id];

//         if (parseInt(my_setting.is_click_select) == 0){
//             toggle_select();
//         }
//         if (parseInt(my_setting.is_auto_combine) == 0){
//             toggle_combine();
//         }
//         if (parseInt(my_setting.is_bullet_show) == 0){
//             toggle_bullet();
//         }
//     }
// }
function DACTableChanged(table,key,data){
    if (key == 'cdkey'){
        var steamid = data.steam_id;
        var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
        var cdkey = data.text;
        if (local_id == steamid){
            ActivateCDKEY(cdkey);
        }
    }
    //修改血条和排序
    if (key == 'user_panel_ranking'){
        var arr = [];         
        for (var d in data.table){
            data.table[d].steamid = d;
            data.table[d].score = 1000*data.table[d].hp + data.table[d].duration;
            arr.push(data.table[d]);
        }
        arr.sort(function(a,b){return b.score-a.score});
        for (var i=0;i<arr.length;i++){
            for (var j=0;j<8;j++){
                if (arr[i].player_id == j){
                    $('#outer_player_board_'+j).style['position'] = '0px '+i*105+'px 0px';
                    if (arr[i].p2team){
                        $('#p2team_flag_'+j).SetImage('file://{resources}/images/custom_game/p2team_'+arr[i].p2team+'.png');
                        $('#p2team_flag_'+j).SetHasClass('invisible',false);
                        // $('#panel_player_board_'+j).style['opacity'] = '1';
                    }
                }
            }
        }
        $("#button_board_right").SetHasClass('invisible',false);
    }
    //个人信息显示
    if (key == 'player_info'){
        refresh_shop();
        for (var i in data.info){
            var player_id = data.info[i].player_id;
            $('#panel_player_board_'+data.info[i].player_id).SetHasClass('invisible',false);
            $('#panel_player_board_'+data.info[i].player_id).style['opacity'] = '1';
            // $("#button_board_right").SetHasClass('invisible',false);

            $('#avatar_player_'+data.info[i].player_id).steamid = i;
            if (data.info[i].badge){
                // $('#panel_badge_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/huizhang/"+data.info[i].badge+".png')";
                $('#panel_badge_'+data.info[i].player_id).style['background-image'] = "url('http://drodo.oss-cn-shanghai.aliyuncs.com/ads/"+data.info[i].badge+".png?x-oss-process=image/resize,h_180,w_180')";
            }
            if (player_id==0){
                $('#avatar_player_0').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(0);}
                ); 
            }
            if (player_id==1){
                $('#avatar_player_1').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(1);}
                ); 
            }
            if (player_id==2){
                $('#avatar_player_2').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(2);}
                ); 
            }
            if (player_id==3){
                $('#avatar_player_3').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(3);}
                ); 
            }
            if (player_id==4){
                $('#avatar_player_4').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(4);}
                ); 
            }
            if (player_id==5){
                $('#avatar_player_5').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(5);}
                ); 
            }
            if (player_id==6){
                $('#avatar_player_6').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(6);}
                ); 
            }
            if (player_id==7){
                $('#avatar_player_7').SetPanelEvent("onactivate", 
                    function(){ change_camera_2_player_ground(7);}
                ); 
            }
            
            $('#player_name_'+data.info[i].player_id).steamid = i;

            var team = Players.GetTeam(data.info[i].player_id);
            // $('#player_name_'+data.info[i].player_id).Children()[0].style['color'] = TEAM_COLOR[team];

            // $('#player_name_'+data.info[i].player_id).SetPanelEvent(
            //     "onactivate", 
            //     function(){
            //         change_camera_2_player_ground(player_id);
            //     }
            // )

            var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
            if (i == local_id){
                if (!data.info[i].match){
                    //show_panel_guide();
                }
            }
            
            $('#pic_player_hero_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/skaters/"+(data.info[i].onduty_hero)+".png')";
            var level = data.info[i].mmr_level;
            var queen_rank = data.info[i].queen_rank;

            $('#pic_player_level_'+data.info[i].player_id).style['background-image'] = "url('file://{images}/custom_game/level_"+level+".png')";
            if (level >= 38 && queen_rank){
                $('#text_player_level_'+data.info[i].player_id).text = '#'+queen_rank;
            }
            else{
                $('#text_player_level_'+data.info[i].player_id).text = $.Localize('text_player_level_'+level);
            }
            
            if (level > 0 ){
                $('#text_player_level_'+data.info[i].player_id).style['color'] = '#fff';
            }
            else{
                $('#text_player_level_'+data.info[i].player_id).style['color'] = '#bbb';
            }
        }
    }

    if (key == "damage_stat"){
        for (var ii in data.damage_table){
            if (ii==Players.GetTeam(Game.GetLocalPlayerID())){

                $("#board_left").SetHasClass('invisible',false);

                var damages = [];
                var total_damage = 0;
                if (data.damage_table[ii]){
                    for (var i in data.damage_table[ii]){
                        total_damage += parseInt(data.damage_table[ii][i]||0);

                        if (!Entities.GetTeamNumber( parseInt(i) )){
                            return;
                        }

                        damages.push({
                            team:Entities.GetTeamNumber( parseInt(i) ),
                            name:i,
                            damage:data.damage_table[ii][i]}
                        );
                    }
                }
                if (total_damage<=0) {
                    return;
                }
                damages.sort(function(a,b){return b.damage-a.damage;});

                for (var k=0;k<10;k++){
                    $("#panel_damage_stat_"+k).SetHasClass('invisible',true);
                    $("#panel_damage_stat_text_per_"+k).style['color'] = "#bbb";
                }

                for (var j=0;j<damages.length;j++){
                    if (j>=10) break;

                    if (!damages[j]){
                        continue;
                    }

                    var color = '#fff';
                    var n = $.Localize(damages[j].name);

                    var dps = Math.floor(damages[j].damage/data.time_this_level);

                    if (dps>1000) {
                        dps = Math.floor(dps/1000)+'K';
                    }

                    var unit_index = damages[j].index;
                    var unit_team = damages[j].team;
                    var local_team = Players.GetTeam( Players.GetLocalPlayer() );

                    // if (local_team == unit_team){
                        // 绿的
                        $("#panel_damage_stat_bar_"+j).style['background-color'] = 'gradient( linear, 0% 0%, 0% 100%, from( #425d25  ), color-stop( 0.2, #5BA539 ), color-stop( .5, #4D9030), to( #425d25) );';
                    // }
                    // else{
                    //     // 红的
                    //     $("#panel_damage_stat_bar_"+j).style['background-color'] = 'gradient( linear, 0% 0%, 0% 100%, from( #5d0025  ), color-stop( 0.2, #A50039 ), color-stop( .5, #900030), to( #5d0025) );';
                    // }

                    

                    $("#panel_damage_stat_"+j).SetHasClass('invisible',false);
                    $("#panel_damage_stat_bar_"+j).style['width'] = ''+Math.floor(damages[j].damage/total_damage*150)+'px';
                    $("#panel_damage_stat_text_"+j).text = n;
                    $("#panel_damage_stat_text_"+j).style['color'] = color;
                    $("#panel_damage_stat_text_per_"+j).text = '('+dps+' dps)';
                }
            }
        }
    }
    if (key == "hide_damage_stat"){
        $("#board_left").SetHasClass('invisible',true);
    }

    if (key = "disconnect"){
        for (var i in data.table){
            if (data.table[i] == false){
                if ($("#outer_player_board_"+i)){
                    $("#outer_player_board_"+i).style["opacity"] = "0.3";
                }
            }
            else{
                if ($("#outer_player_board_"+i)){
                    $("#outer_player_board_"+i).style["opacity"] = "1";
                }
            }
        }
    }
    if (key == 'say_bubble'){
        // var p = EMOJI_LIST[data.text] || null;
        // DisplayBubble({text:data.text,unit:data.unit,pic:p});
    }
}

function RankingTopTableChanged(table,key,data){
	if (key == 'ranking_top'){
		UpdateRankingTop(data);
	}
}

function UpdateRankingTop(data){
    for (var j=1;j<=20;j++){
        $("#ranking_top_"+j).SetHasClass('invisible',true);
    }

    for (var j in data){
        var i = parseInt(j-1);
        if (i+1 > 20){
            break;
        }

        $("#ranking_top_"+(i+1)).SetHasClass('invisible',false);
        $("#ranking_top_avatar_"+(i+1)).steamid = data[j].steam_id;
        $("#ranking_top_name_"+(i+1)).steamid = data[j].steam_id;
        // if (Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid == data[j].steam_id){
        //     $("#ranking_top_"+(i+1)).style['background-color'] = 'rgba(128,128,128,0.1)';
        // }
        // else{
        //     $("#ranking_top_"+(i+1)).style['background-color'] = 'rgba(0,0,0,0.1)';
        // }

        if (data[j].is_vip){
            $("#ranking_top_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/vip/vip_name_bg.png")';
            $("#ranking_top_vip_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/vip/player_board_04.png")';
            $("#ranking_top_"+(i+1)).style['background-position'] = '15px 0px';
        }
        else{
            $("#ranking_top_"+(i+1)).style['background-image'] = 'none';
            $("#ranking_top_vip_"+(i+1)).style['background-image'] = 'none';
            $("#ranking_top_"+(i+1)).style['background-position'] = '0px 0px';
        }

        $("#ranking_top_level_pic_"+(i+1)).style['background-image'] = "url('file://{images}/custom_game/level_"+data[j].mmr_level+".png')";

        var queen_rank = data[j].queen_rank;
        if (data[j].mmr_level >= 38 && queen_rank){
            $("#ranking_top_level_text_"+(i+1)).text = '#'+queen_rank;
        }
        else{
            $("#ranking_top_level_text_"+(i+1)).text = $.Localize("text_player_level_"+data[j].mmr_level);
        }
        
        $("#ranking_top_level_text_"+(i+1)).style['color'] = 'white';
    }
}

// 发送弹幕
var bullet = [0,0,0,0,0,0,0,0,0,0];
function bullet_chat(steam_id, player_name, text, target, c, player_id,vip){
    var hero = null, color = '#fff';
    if (target){
        var show_name = target;
        if (show_name.indexOf('11')>-1){
            show_name = show_name.substr(0,show_name.length-2);
        }
        if (show_name.indexOf('1')>-1){
            show_name = show_name.substr(0,show_name.length-1);
        }
        if (CHESS_2_LEVEL[show_name]){
            color = LEVEL_2_COLOR[CHESS_2_LEVEL[show_name]];
        }
        if (CHESS_2_HERO[show_name]){
            hero = CHESS_2_HERO[show_name];
        }
        text = target;
    }

    if (!IS_BULLET_SHOW && !hero){
        return;
    }

    var channel = 0;
    for (var i in bullet){
        if (bullet[i] == 0){
            channel = i;
            bullet[i] = 1;
            break;
        }
    }
    channel ++;

    if (channel == 0){
        return;
    }
    if (vip){
        $("#bullet_img_"+channel).SetImage("file://{images}/custom_game/vip/little_drodo_"+Math.floor(Math.random()*5)+".png");
        $("#bullet_img_"+channel).SetHasClass('invisible',false);
        $("#bullet_banner_"+channel).style['background-image'] = "url('file://{images}/custom_game/vip/bg3.png')";
        $("#bullet_banner_"+channel).style['background-size'] = "100% 100%";
        $("#bullet_text_"+channel).style['color'] = "#ffdb86";
    }
    else{
        $("#bullet_img_"+channel).SetHasClass('invisible',true);
        $("#bullet_banner_"+channel).style['background-image'] = "none";
        $("#bullet_text_"+channel).style['color'] = "#ffffff";
    }
    $("#bullet_text_"+channel).text = player_name+':';
    $("#bullet_tower_"+channel).text = $.Localize(text);
    $("#bullet_empty_"+channel).style.width = "0px";

    var team = Players.GetTeam(player_id);
    $("#bullet_tower_"+channel).style.color = color || c || "white" ;
    if (hero){
        $('#bullet_hero_icon_'+channel).heroname = hero;
        $('#bullet_hero_icon_'+channel).SetHasClass('invisible',false);
    }
    else{
        $('#bullet_hero_icon_'+channel).SetHasClass('invisible',true);
    }


    $.Schedule(20,function(){
        bullet[channel-1] = 0;
        $("#bullet_empty_"+channel).style['transition-duration'] = "0s";
        $("#bullet_empty_"+channel).style.width = "3840px";
        $("#bullet_empty_"+channel).style['transition-duration'] = "20s";
        $("#bullet_img_"+channel).SetHasClass('invisible',true);
        $("#bullet_banner_"+channel).style['background-image'] = "none";
    });
}
function tips_over(t, pos){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos), $.Localize(t+'_title'), $.Localize(t) );
}
function tips_over_guide(t, pos){
    $.DispatchEvent( "DOTAShowTextTooltip", $("#"+pos), $.Localize(t+'_title'));
}
function tips_out(){
    $.DispatchEvent( "DOTAHideTitleTextTooltip");
    $.DispatchEvent( "DOTAHideTextTooltip");
}

GameUI.SetMouseCallback( function( eventName, arg ) {
    var nMouseButton = arg
    var CONSUME_EVENT = true;
    var CONTINUE_PROCESSING_EVENT = false;
    if ( GameUI.GetClickBehaviors() !== CLICK_BEHAVIORS.DOTA_CLICK_BEHAVIOR_NONE )
        return CONTINUE_PROCESSING_EVENT;

    if ( eventName === "pressed" )
    {
        if ( arg === 0 && IS_CURSOR_HERO_ICON_SHOWING == true )
        {
            // OnLeftButtonPressed();
            var position = Game.ScreenXYToWorld( GameUI.GetCursorPosition()[0], GameUI.GetCursorPosition()[1] );
            GameEvents.SendCustomGameEventToServer( "pick_chess_position", { x:position[0], y:position[1], z:position[2], player_id : Game.GetLocalPlayerID() } );
            var par = Particles.CreateParticle( "particles/ui_mouseactions/clicked_basemove.vpcf", 0,0);
            Particles.SetParticleControl( par, 0, position );
            Particles.SetParticleControl( par, 1, {x:0,y:255,z:0} );

            GameUI.SelectUnit( -1, false );

            return CONSUME_EVENT;
        }
        if ( arg === 1 && IS_CURSOR_HERO_ICON_SHOWING == true )
        {
            GameEvents.SendCustomGameEventToServer( "cancel_pick_chess_position", { player_id : Game.GetLocalPlayerID() } );
            
            // GameUI.SelectUnit( -1, false );

            return CONSUME_EVENT;
        }

        // if ( arg === 1 )
        // {
        //     // OnRightButtonPressed();
        //     // show_msg('右键！');
        //     // 发出一个英雄移动命令
        //     var player_id = Game.GetLocalPlayerID();

        //     // 判断是否不能动
        //     if (Entities.IsCommandRestricted(Players.GetPlayerHeroEntityIndex(Game.GetLocalPlayerID()))){
        //         return CONSUME_EVENT;
        //     }

        //     var pos = Game.ScreenXYToWorld( GameUI.GetCursorPosition(0)[0], GameUI.GetCursorPosition(0)[1] );

        //     var par = Particles.CreateParticle( "particles/ui_mouseactions/clicked_basemove.vpcf", 0,0);
        //     Particles.SetParticleControl( par, 0,    Game.ScreenXYToWorld( GameUI.GetCursorPosition()[0], GameUI.GetCursorPosition()[1] ));
        //     Particles.SetParticleControl( par, 1, {x:0,y:255,z:0} );
            
        //     // Game.EmitSound("DOTA_Item.Butterfly");
        //     // $.Schedule(0.2,function(){
        //         GameEvents.SendCustomGameEventToServer( "mouse_right_click", {"x":pos[0],"y":pos[1],"steam_id" : local_id} );
        //     // });
            

        //     return CONSUME_EVENT;
        // }
    }

    // MousePosition()
    return CONTINUE_PROCESSING_EVENT;
} );


// 抽牌面板
var MY_DRAW_CHESS_LIST = {};
var IS_PANEL_DRAW_CARD_SHOW = false;
var IS_PANEL_DRAW_CARD_LOCKED = false;
var IS_PANEL_PLAYER_DETAILS_SHOW = false;
function show_panel_draw_card(){
    close_panel_list();
    close_panel_guide();
    close_panel_ranking();
    close_panel_shop();
    close_player_details();
    IS_PANEL_DRAW_CARD_SHOW = true;
    IS_PANEL_DRAW_CARD_CAN_OPEN = true;
    $("#panel_draw_card").style['position'] = '0px 0px 0px';
    $("#panel_draw_card").style['transform'] = 'scale3d( 1,1,1)';
    // $("#panel_draw_card").style['position'] = '-600px -600px 0px';
    // $("#panel_draw_card").style['transform'] = 'scale3d( 0.1,0.1,0.1)';

    for (var i in MY_DRAW_CHESS_LIST){
        if ($('#hero_draw_card_box_'+i) && CHESS_2_HERO[MY_DRAW_CHESS_LIST[i]]){
            $('#panel_hero_draw_card_'+i).style['opacity'] = '1';
            var text = '<DOTAScenePanel id="hero_draw_card_'+i+'" class="hero_draw_card" unit="'+CHESS_2_HERO[MY_DRAW_CHESS_LIST[i]]+'"  light="global_light" antialias="true" renderdeferred="false" particleonly="false"/>';
            $('#hero_draw_card_box_'+i).RemoveAndDeleteChildren();
            $('#hero_draw_card_box_'+i).BCreateChildren(text);

            $('#text_draw_card_'+i).text = $.Localize(MY_DRAW_CHESS_LIST[i]);
            // $('#text_draw_card_'+i).SetAttributeString('chess',MY_DRAW_CHESS_LIST[i]);
            $('#text_draw_card_'+i+'_spec_class').text = chess2specclass(MY_DRAW_CHESS_LIST[i]);
            if (MY_DRAW_CHESS_LIST[i].indexOf('ssr') > -1){
                $('#text_draw_card_'+i).style['color'] = LEVEL_2_COLOR[6];
            }
            else{
                $('#text_draw_card_'+i).style['color'] = LEVEL_2_COLOR[CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]]];
            }
            $('#text_draw_card_price_'+i).text = '×'+CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]];
            $('#img_draw_card_price_'+i).SetHasClass('invisible',false);
        }
    }
    
    set_draw_card_status();
}
function chess2specclass(chess){
    var arr = CHESS_2_SPEC_CLASS[chess].split(',');
    var arr2 = [];
    for (var i=0;i<arr.length;i++){
        arr2.push($.Localize('DOTA_Tooltip_ability_'+arr[i]));
    }
    return arr2.join('  ');
}

// 购买第index个棋子
function request_buy_chess(index){
    var price = CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[index]];

    if (!MY_DRAW_CHESS_LIST[index]){
        return;
    }

    if (price <= Entities.GetMana(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer()))){
    	// 请求购买
    	GameEvents.SendCustomGameEventToServer( "request_buy_chess", { 
    		"buy_index": index,
    	});
    }
    else{
        OnMima({text: "text_mima_no_mana",key:CLIENT_KEY});
    }
}
function OnRequestBuyChessCb(keys){
	if (!CheckClientKey(keys.key)) return;
	// 购买棋子成功
	var buy_index = keys.buy_index;
	Game.EmitSound("General.Buy");
	MY_DRAW_CHESS_LIST[buy_index] = null;
	$('#panel_hero_draw_card_'+buy_index).style['opacity'] = '0';

    // 选中自己棋手
    GameUI.SelectUnit( Players.GetPlayerHeroEntityIndex( Players.GetLocalPlayer() ), false );
}
function open_panel_draw_card(){
    // for (var x=0;x<=4;x++){
    //     if ($('#text_draw_card_'+x)){
    //         var c = $('#text_draw_card_'+x).GetAttributeString('chess',"");
    //         $('#text_draw_card_'+x).text = '('+ (-CHESS_STAT[c] || 0) + ') ' +$.Localize(c);
    //     }
    // }
    if (!IS_PANEL_DRAW_CARD_CAN_OPEN){
        return;
    }
    if (IS_PANEL_DRAW_CARD_SHOW == true){
        Game.EmitSound("ui.profile_close")
        IS_PANEL_DRAW_CARD_SHOW = false;
        $("#panel_draw_card").style['position'] = '-370px -250px 0px';
        $("#panel_draw_card").style['transform'] = 'scale3d( 0.001,0.001,0.001)';
    }
    else{
        Game.EmitSound("ui.map_open");
        IS_PANEL_DRAW_CARD_SHOW = true;
        $("#panel_draw_card").style['position'] = '0px 0px 0px';
        $("#panel_draw_card").style['transform'] = 'scale3d( 1,1,1)';
        // $("#panel_draw_card").style['position'] = '-600px -600px 0px';
        // $("#panel_draw_card").style['transform'] = 'scale3d( 0.1,0.1,0.1)';
        close_panel_list();
        close_panel_guide();
        close_panel_ranking();
        close_panel_shop();
        close_player_details();
    }
}
function close_panel_draw_card(keys){
    if (!CheckClientKey(keys.key)) return;
    IS_PANEL_DRAW_CARD_SHOW = false;
    $("#panel_draw_card").style['position'] = '-370px -250px 0px';
    $("#panel_draw_card").style['transform'] = 'scale3d( 0.001,0.001,0.001)';
}
function OnShowDrawCard(keys){
    if (!CheckClientKey(keys.key)) return;
    if (keys.unlock == true){
        Game.EmitSound("ui.crafting_newslot");
        IS_PANEL_DRAW_CARD_LOCKED = false;
        $("#image_lock").SetImage("file://{images}/custom_game/unlock.png");
        $("#image_lock").style['opacity'] = '0.1';
    }
    if (keys.auto_unlock == true){
        Game.EmitSound("ui.crafting_newslot");
        IS_PANEL_DRAW_CARD_LOCKED = false;
        $("#image_lock").SetImage("file://{images}/custom_game/unlock.png");
        $("#image_lock").style['opacity'] = '0.1';
        return;
    }
    var cards = keys.cards.split(',');
    MY_DRAW_CHESS_LIST = {};
    if (cards && cards.length>1){
        for (var i=0;i<cards.length;i++){
            if (cards[i]){
                MY_DRAW_CHESS_LIST[i] = cards[i];
            }
        }
    }
    show_panel_draw_card();
    GameUI.SelectUnit( -1, false );
}
function set_draw_card_status(){
    if (MY_DRAW_CHESS_LIST){
        for (var i in MY_DRAW_CHESS_LIST){
            var price = CHESS_2_LEVEL[MY_DRAW_CHESS_LIST[i]];
            var my_gold = MY_GOLD || Math.round(Entities.GetMana(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer())));
            if (price > my_gold){
                $('#text_draw_card_price_'+i).style['color'] = '#ff0000';
            }
            else{
                $('#text_draw_card_price_'+i).style['color'] = '#ffffff';
            }
        }
    }
}
var MY_GOLD = 0;
function OnShowGold(keys){
    if (!CheckClientKey(keys.key)) return;
    // 计算连胜、连败的奖励
    if (keys.lose_streak && keys.lose_streak>=2){
        lose_streak_anwei = Math.floor(parseFloat(keys.lose_streak)/2);
        if (lose_streak_anwei>3){
            lose_streak_anwei = 3;
        }
    }
    else{
        lose_streak_anwei = 0;
    }
    if (keys.win_streak && keys.win_streak>=2){
        win_streak_anwei = Math.floor(parseFloat(keys.win_streak)/2);
        if (win_streak_anwei>3){
            win_streak_anwei = 3;
        }
    }
    else{
        win_streak_anwei = 0;
    }

    if (keys.gold || keys.gold == 0){
    	$('#gold_count').text = Math.round(keys.gold);
        MY_GOLD = Math.round(keys.gold);
    }
    else{
    	if (Players.GetLocalPlayer() || Players.GetLocalPlayer() == 0){
	        $('#gold_count').text = Math.round(Entities.GetMana(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer())));
            MY_GOLD = Math.round(Entities.GetMana(Players.GetPlayerHeroEntityIndex(Players.GetLocalPlayer())));
	    }
    }
    
    set_draw_card_status();
}
function lock_panel_draw_card(){
    if (IS_PANEL_DRAW_CARD_LOCKED){
        Game.EmitSound("ui.crafting_newslot");
        IS_PANEL_DRAW_CARD_LOCKED = false;
        $("#image_lock").SetImage("file://{images}/custom_game/unlock.png");
        $("#image_lock").style['opacity'] = '0.1';
        GameEvents.SendCustomGameEventToServer( "unlock_chess", {"team":Players.GetTeam(Players.GetLocalPlayer())});
    }
    else{
        Game.EmitSound("ui.crafting_gem_drop");
        IS_PANEL_DRAW_CARD_LOCKED = true;
        $("#image_lock").SetImage("file://{images}/custom_game/lock.png");
        $("#image_lock").style['opacity'] = '1';
        GameEvents.SendCustomGameEventToServer( "lock_chess", {"team":Players.GetTeam(Players.GetLocalPlayer())});
    }
}
function OnMouseInTips(pos,title,text){
    $.DispatchEvent( "DOTAShowTitleTextTooltip", $("#"+pos), $.Localize(title), $.Localize(text));
}
function OnMouseOutTips(){
    $.DispatchEvent( "DOTAHideTitleTextTooltip" );
}

function get_chess_cost(chess){
    var chess_name = chess;
    if (chess.indexOf('11')>-1){
        chess_name = chess_name.substr(0,chess_name.length-2);
    }
    if (chess.indexOf('1')>-1){
        chess_name = chess_name.substr(0,chess_name.length-1);
    }
    return CHESS_2_LEVEL[chess_name] || 0;
}

var IS_PANEL_GUIDE_OPEN = false;
var IS_PANEL_LIST_OPEN = false;
var IS_PANEL_RANKING_OPEN = false;
var IS_PANEL_SHOP = false;
function close_panel_guide(){
    IS_PANEL_GUIDE_OPEN = false;
    $('#panel_guide').style['opacity'] = '0';
    $('#panel_guide').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_guide').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_guide(){
    IS_PANEL_GUIDE_OPEN = true;
    $('#panel_guide').style['opacity'] = '1';
    $('#panel_guide').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_guide').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_list();
    close_panel_draw_card({key:CLIENT_KEY});
    close_panel_ranking();
    close_panel_shop();
    close_player_details();
}
function open_panel_guide(){
    if (IS_PANEL_GUIDE_OPEN){
        IS_PANEL_GUIDE_OPEN = false;
        $('#panel_guide').style['opacity'] = '0';
        $('#panel_guide').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_guide').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_GUIDE_OPEN = true;
        $('#panel_guide').style['opacity'] = '1';
        $('#panel_guide').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_guide').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_list();
        close_panel_draw_card({key:CLIENT_KEY});
        close_panel_ranking();
        close_panel_shop();
        close_player_details();
    }
}
function close_panel_list(){
    IS_PANEL_LIST_OPEN = false;
    $('#panel_list').style['opacity'] = '0';
    $('#panel_list').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_list').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
    close_panel_vote();
}
function show_panel_list(){
    IS_PANEL_LIST_OPEN = true;
    $('#panel_list').style['opacity'] = '1';
    $('#panel_list').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_list').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card({key:CLIENT_KEY});
    close_panel_ranking();
    close_panel_shop();
    close_player_details();
}
function open_panel_list(){
    if (IS_PANEL_LIST_OPEN){
        IS_PANEL_LIST_OPEN = false;
        $('#panel_list').style['opacity'] = '0';
        $('#panel_list').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_list').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_LIST_OPEN = true;
        $('#panel_list').style['opacity'] = '1';
        $('#panel_list').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_list').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card({key:CLIENT_KEY});
        close_panel_ranking();
        close_panel_shop();
    }
}
function close_panel_ranking(){
    IS_PANEL_RANKING_OPEN = false;
    $('#panel_ranking').style['opacity'] = '0';
    $('#panel_ranking').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_ranking').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_ranking(){
    IS_PANEL_RANKING_OPEN = true;
    $('#panel_ranking').style['opacity'] = '1';
    $('#panel_ranking').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#panel_ranking').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card({key:CLIENT_KEY});
    close_panel_list();
    close_panel_shop();
    close_player_details();
}
function open_panel_ranking(){
    if (IS_PANEL_RANKING_OPEN){
        IS_PANEL_RANKING_OPEN = false;
        $('#panel_ranking').style['opacity'] = '0';
        $('#panel_ranking').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#panel_ranking').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_RANKING_OPEN = true;
        $('#panel_ranking').style['opacity'] = '1';
        $('#panel_ranking').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#panel_ranking').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card({key:CLIENT_KEY});
        close_panel_list();
        close_panel_shop();
        close_player_details();
    }
}
function close_panel_shop(){
    IS_PANEL_SHOP = false;
    $('#store_panel').style['opacity'] = '0';
    $('#store_panel').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#store_panel').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
}
function show_panel_shop(){
    IS_PANEL_SHOP = true;
    $('#store_panel').style['opacity'] = '1';
    $('#store_panel').style['transform'] = 'scale3d( 1, 1, 1)';
    $('#store_panel').style['position'] = '0px 0px 0px';
    Game.EmitSound("ui.settings_open");
    close_panel_guide();
    close_panel_draw_card({key:CLIENT_KEY});
    close_panel_list();
    close_panel_ranking();
    close_player_details();
}
function open_panel_shop(){
    if (IS_PANEL_SHOP){
        IS_PANEL_SHOP = false;
        $('#store_panel').style['opacity'] = '0';
        $('#store_panel').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
        $('#store_panel').style['position'] = '-100px -50px 0px';
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_PANEL_SHOP = true;
        $('#store_panel').style['opacity'] = '1';
        $('#store_panel').style['transform'] = 'scale3d( 1, 1, 1)';
        $('#store_panel').style['position'] = '0px 0px 0px';
        Game.EmitSound("ui.settings_open");
        close_panel_guide();
        close_panel_draw_card({key:CLIENT_KEY});
        close_panel_list();
        close_panel_ranking();
        close_player_details();
    }
}
// SendHTTP('ranking_top','ranking_top_cb',{language:$.Language()},0);
// 获取全球排行并显示
for (var j=1;j<=20;j++){
    $("#ranking_top_"+j).SetHasClass('invisible',true);
}
for (var j=1;j<=20;j++){
    $("#ranking_friend_"+j).SetHasClass('invisible',true);
}

var keys=[
    '968CE0A7C36CA9440441899F19C1707F',
    '990E299A833D8BCDCDE781ED98192574',
    'D90B5894B88D6FF32D3D39F8C5AE0060',
    '7F14C3F4EC674A7C72AA8A7C1BF17C03',
    '5EF7E4AC4FCAC916C6BE712D696D2854',
    '1DB32B03E887FF71A59E5C7481087DB2',
];
var key = keys[Math.floor(Math.random()*6)];

$.AsyncWebRequest( 
    'http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key='+key+'&relationship=friend&steamid='+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid, 
    { 
        type: 'GET',
        complete: function(a,b,c,d,e) { 

            var tt = a.responseText;
            tt = tt.substr(0,tt.length-1);
            var aa = JSON.parse(tt);
            var ff = aa.friendslist.friends;
            var ids = [];

            for (var fff in ff){
                //if (ids.length<20){
                    ids.push(ff[fff].steamid);
                //}
            }

            ids.push(Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid);
            var url222 = 'http://autochess.ppbizon.com/ranking/get?player_ids='+ids.join(',')+'&myself='+Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;

            $.AsyncWebRequest( 
                url222, 
                { 
                    type: 'GET',
                    success: function(a) { 
                        var aa = JSON.parse(a);
                        if (!aa || !aa['ranking_info']){
                            return;
                        }
                        var data = aa['ranking_info'];

                        for (var j=1;j<=20;j++){
                            $("#ranking_friend_"+j).SetHasClass('invisible',true);
                        }

                        data.sort(function(a,b){
                            return parseInt(b.score) - parseInt(a.score);
                        });

                        for (var i=0;i<data.length;i++){
                            if (!$("#ranking_friend_"+(i+1))){
                                break;
                            }
                            $("#ranking_friend_"+(i+1)).SetHasClass('invisible',false);
                            $("#ranking_friend_avatar_"+(i+1)).steamid = data[i].player;
                            $("#ranking_friend_name_"+(i+1)).steamid = data[i].player;
                            if (data[i].is_vip){
                                $("#ranking_friend_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/vip/vip_name_bg.png")';
                                $("#ranking_friend_vip_"+(i+1)).style['background-image'] = 'url("file://{images}/custom_game/vip/player_board_04.png")';
                                $("#ranking_friend_"+(i+1)).style['background-position'] = '15px 0px';
                            }
                            else{
                                $("#ranking_friend_"+(i+1)).style['background-image'] = 'none';
                                $("#ranking_friend_vip_"+(i+1)).style['background-image'] = 'none';
                                $("#ranking_friend_"+(i+1)).style['background-position'] = '0px 0px';
                            }
                            $("#ranking_friend_level_pic_"+(i+1)).style['background-image'] = "url('file://{images}/custom_game/level_"+data[i].mmr_level+".png')";
                            
                            var queen_rank = data[i].queen_rank;
                            if (data[i].mmr_level >= 38 && queen_rank){
                                $("#ranking_friend_level_text_"+(i+1)).text = '#'+queen_rank;
                            }
                            else{
                                $("#ranking_friend_level_text_"+(i+1)).text = $.Localize("text_player_level_"+data[i].mmr_level);
                            }

                            $("#ranking_friend_level_text_"+(i+1)).style['color'] = 'white';
                        }
                    }
                }
            );
        },
        error: function(){
        }
    }
);
function refresh_chess(){
    GameEvents.SendCustomGameEventToServer( "dac_refresh_chess",{
        "team":Players.GetTeam(Players.GetLocalPlayer())
    });
}
function toggle_panel(){
    if(IS_PANEL_DRAW_CARD_SHOW){
        close_panel_draw_card({key:CLIENT_KEY})
    }
    else{
        open_panel_draw_card()
    }
}

var STORE_CD_VER = 0;
var MY_ONDUTY_HERO = '';

function refresh_shop(){
    SendHTTP('refresh_shop','refresh_shop_cb',{language:$.Language()},1);
}
function buy_effect(eid){
    SendHTTP('buy_effect','buy_effect_cb',{hero:eid},1);
    close_confirm();
    refresh_shop();
}
var click_cd = false;
function choose_hero(hid){
    if (!click_cd){
        //click_cd = true;
        SendHTTP('choose_hero','change_zhugong_cb',{hero:hid},1);
    }
}
function lottery_go(){
    SendHTTP('lottery_go','lottery_cb',{},1);
    close_confirm();
}

function time2showtime(t){
    if (t>6039) t = 6039;
    var m = 0, s = 0;
    if (!t) return "00:00";

    t = parseInt(t);
    m = Math.floor(t/60);
    s = t - m*60;

    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return m+':'+s;
}
function time2showtime_hour(t){
    if (t>362439) t = 362439;
    var h = 0, m = 0, s = 0;
    if (!t) return "00:00:00";

    t = parseInt(t);
    h = Math.floor(t/3600);
    m = Math.floor((t-h*3600)/60);
    s = t-h*3600 - m*60;

    h = h<10?'0'+h:h;
    m = m<10?'0'+m:m;
    s = s<10?'0'+s:s;
    return h+':'+m+':'+s;
}
function show_store_cd(refresh_time,ver){
    if (ver !=STORE_CD_VER){
        return;
    }
    if (Date.now()/1000>=refresh_time){
        // refresh_shop();
        return;
    }
    var text = time2showtime_hour(refresh_time-Math.floor(Date.now()/1000));
    $("#ramaining").text = $.Localize("text_store_cd")+": "+text;
    $.Schedule(1,function(){
        show_store_cd(refresh_time,ver);
    });
}

function confirm_recycle_hero(hero){
    show_confirm($.Localize('text_confirm_recycle_hero'),"recycle_hero('"+hero+"')")
}
function recycle_hero(hero){
    close_confirm();
    SendHTTP('recycle_hero','recycle_hero_cb',{hero:hero},1);
}
function end_game(){
    // Game.FinishGame();
    GameEvents.SendCustomGameEventToServer( "quit_game", {player_id:Players.GetLocalPlayer()});
}
function show_kejin_qrcode(){
    // $('#kejin').style['background-image'] = 'url("file://{images}/custom_game/kejinjia.png")';
    $('#buy_candy_ad').SetHasClass('invisible',false);
}
function hide_kejin_qrcode(){
    // $('#kejin').style['background-image'] = 'url("file://{images}/custom_game/kehuijia.png")';
    $('#buy_candy_ad').SetHasClass('invisible',true);
}

function OnCdkeySubmitted(){
    var text = $("#entry_cdkey").text;
    ActivateCDKEY(text);
    $("#entry_cdkey").text = '';
}
var activate_cd = false;
function ActivateCDKEY(cdkey){
    if (cdkey.length != 17){
        Game.EmitSound("General.CastFail_NoMana");
        return;
    }
    if (!activate_cd){
        activate_cd = true;
        $("#btn_entry_cdkey").style['opacity'] = '0.1';
        SendHTTP('activate_cdkey','activate_cdkey_cb',{hero:cdkey},1);
        $.Schedule(10,function(){
            activate_cd = false;
            $("#btn_entry_cdkey").style['opacity'] = '1';
        });
    }
}
function SendHTTP(event,cb,params,user_specific){
    GameEvents.SendCustomGameEventToServer("catch_crab",{
        event:event, 
        cb:cb,
        params:params,
        user_specific:user_specific
    });
}

var CURR_SHOP_EFFECT,CURR_SHOP_COLLECT,CURR_SHOP_COLLECT_PARTS;
function SendHTTPCb(keys){
    if (!CheckClientKey(keys.key)) return;
    var event = keys.event;
    var data = JSON.parse(keys.data);

    // 刷新商店商品cb
    if (event == 'refresh_shop_cb'){
        var object = data;
        

        if (object.shop && object.shop.effect){
            // 显示商店cd
            var cd = object.ttl;
            if (!cd || cd < 0) {
                $("#ramaining").text = $.Localize("text_store_cd")+": ???";
            }
            else{
                var text0 = time2showtime_hour(cd);
                var refresh_time = Math.floor(Date.now()/1000) + cd;

                $("#ramaining").text = $.Localize("text_store_cd")+": "+text0;

                $.Schedule(1,function(){
                    STORE_CD_VER ++;
                    show_store_cd(refresh_time,STORE_CD_VER);
                });
            }

            var shop_effect = object.shop.effect;
            CURR_SHOP_EFFECT = shop_effect.id;
            
            
            CURR_SHOP_COLLECT = {};
            CURR_SHOP_COLLECT_PARTS = {};

            // 填写商店内容：集换
            object.shop.collect.sort(function(a,b){
                return parseInt(a.award.substr(1,3)) - parseInt(b.award.substr(1,3));
            });
            for (var c=0;c<object.shop.collect.length;c++)
            {
                var shop_jihuan = object.shop.collect[c];
                

                CURR_SHOP_COLLECT[c] = object.shop.collect[c].award;
                CURR_SHOP_COLLECT_PARTS[c] = object.shop.collect[c].parts;

                for (var i =0;i<=7;i++){
                    $('#img_shop_jihuan_part_'+c+'_'+i).SetHasClass('invisible',true);
                    $('#img_shop_jihuan_part_tick_'+c+'_'+i).SetHasClass('invisible',true);
                }
                var jihuan_hero = shop_jihuan.award.split('_')[0];
                var total_parts = shop_jihuan.parts.length;
                var have_parts = 0;
                $('#img_shop_jihuan_'+c).SetImage('file://{images}/custom_game/skaters/'+jihuan_hero+'.png');
                for (var i=0;i<shop_jihuan.parts.length;i++){
                    $('#img_shop_jihuan_part_'+c+'_'+i).SetHasClass('invisible',false);
                    $('#img_shop_jihuan_part_'+c+'_'+i).style['background-image'] = 'url("file://{images}/custom_game/skaters/'+shop_jihuan.parts[i].split('_')[0]+'.png")';
                    $('#img_shop_jihuan_part_'+c+'_'+i).style['background-size'] = '100% 100%';
                    if (shop_jihuan.collect_parts[i] || shop_jihuan.collect_parts[i] == 0){ 
                        // 窝有这个配件
                        have_parts++;
                        $('#img_shop_jihuan_part_tick_'+c+'_'+i).SetHasClass('invisible',false);
                    }
                    else{
                        // 窝木有这个配件
                        $('#img_shop_jihuan_part_tick_'+c+'_'+i).SetHasClass('invisible',true);
                    }
                }
                $('#panel_shop_jihuan_'+c).style['background-color'] = COLOR[jihuan_hero.slice(1,2)];
                $('#text_shop_jihuan_'+c).text = $.Localize(jihuan_hero);


                $('#text_shop_jihuan_desc_'+c).text = $.Localize('text_shoujijindu')+'('+have_parts+'/'+total_parts+')';
                if (have_parts == total_parts){
                    // 集齐了，可以兑换
                    $('#buy_jihuan_'+c).style['opacity'] = '1';
                    $('#buy_jihuan_'+c).SetPanelEvent(
                        "onactivate", 
                        confirm_jihuan_hero_outer(shop_jihuan.award)
                    )
                }
                else{
                    $('#buy_jihuan_'+c).style['opacity'] = '0.1';
                    $('#buy_jihuan_'+c).SetPanelEvent(
                        "onactivate", 
                        function(){
                            return;
                        }
                    )
                }
            }
                
            // 填写商店内容：特效
            object.shop.effect.sort(function(a,b){
                return parseInt(a.id.substr(1,3)) - parseInt(b.id.substr(1,3));
            });
            for (var e=0;e<object.shop.effect.length;e++)
            {
                // $('#img_shop_texiao_curr_hero').SetImage('file://{images}/custom_game/skaters/'+object.user_info.onduty_hero.split('_')[0]+'.png');
                var shop_texiao = object.shop.effect[e];
                var shop_texiao_id = shop_texiao.id;
                var shop_texiao_price = shop_texiao.price;
                $('#panel_shop_texiao_'+e).style['background-color'] = COLOR[shop_texiao_id.slice(1,2)];
                $('#img_shop_texiao_'+e).SetImage('file://{images}/custom_game/effect/'+shop_texiao_id+'.png')
                $('#text_shop_texiao_'+e).text = $.Localize(shop_texiao_id);
                $('#text_shop_texiao_price_'+e).text = '× '+shop_texiao_price;
                $('#buy_texiao_'+e).SetPanelEvent(
                    "onactivate", 
                    preview_effect_outer(e,shop_texiao_id)
                );
            }

            $('#store_panel_nogoods').SetHasClass('invisible',true);
            $('#store_panel_goods').SetHasClass('invisible',false);
        }


        if (object.user_info){
            var myinfo = object.user_info;

            $('#ice_storage').text = '× ' + myinfo.candy;

            if (myinfo.pre_candy){
                open_panel_award('dac','candy','',myinfo.pre_candy,'season');
            }
            if (myinfo.pre_courier){
                open_panel_award('dac','chessplayer',myinfo.pre_courier,'1','candystore');
            }

            var hero_count= 0;
            var zhugong_list = myinfo['zhugong'];
            var onduty_zhugong = myinfo['onduty_hero'];
            var onduty_hero = onduty_zhugong.split('_')[0];
            MY_ONDUTY_HERO = onduty_hero;
            var onduty_effect = onduty_zhugong.split('_')[1];
            var onduty_index = zhugong_list.indexOf(onduty_zhugong);
            var text = '';
            for (var i in zhugong_list){
                var zhugong = zhugong_list[i];
                
                var hero = zhugong.split('_')[0];
                var effect = zhugong.split('_')[1];

                var text_effect = '+'+$.Localize(effect);
                if (!effect || effect =='e000'){
                    text_effect = '';
                }
                
                if (i == onduty_index){
                    if (click_cd){
                       text_effect += '√';
                    }
                    text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20_highlight" text = "'+$.Localize(hero)+'"/><Label class="text_20_highlight" text = "'+text_effect+'"/></Panel>';
                }
                else{
                    text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20" text = "'+$.Localize(hero)+'"/><Label class="text_20" text = "'+text_effect+'"/><Panel class="panel_recycle_chesser" onactivate="confirm_recycle_hero(\''+zhugong+'\')" onmouseover="DOTAShowTextTooltip(\'#tips_recycle\')" onmouseout = "DOTAHideTextTooltip()"/></Panel>';
                }

                hero_count ++;
            }
            $('#select-block-inner').RemoveAndDeleteChildren();
            $('#select-block-inner').BCreateChildren(text);

            $("#text_mychessplayer").text = $.Localize('mychessplayer')+'('+hero_count+')';
        }

        if (object.event_info){
            // 填写排行榜内容：赛事列表
            if (object.event_info){
                var text = '';
                for (var i=0;i<object.event_info.length;i++){
                    var ee = object.event_info[i];
                    text += '<Panel class="ranking_line_event">';
                    text += '<Panel class = "img_event" style="background-image:url('+ee.pic+');"/>';
                    text += '<Panel class="event_details">';

                    text += '<Label class="event_title" text = "'+ee.name+'"/>';

                    text += '<Label class="event_sub_title" text="'+ee.time+'"/>';
                    if (ee.winner1 && ee.winner2 && ee.winner3){
                        text += '<DOTAAvatarImage class="event_winner1" steamid="'+ee.winner1+'"/>';
                        text += '<DOTAAvatarImage class="event_winner2" steamid="'+ee.winner2+'"/>';
                        text += '<DOTAAvatarImage class="event_winner3" steamid="'+ee.winner3+'"/>';
                    }
                    if (ee.badge){
                        text += '<Image class = "img_event_award1" src="'+ee.badge+'"/>';
                    }
                    if (ee.award){
                        text += '<Image class = "img_event_award2" src="'+ee.award+'" onmouseover="DOTAShowTextTooltip(\''+$.Localize(ee.award.substr(ee.award.length-8,4))+'\')" onmouseout="DOTAHideTextTooltip()"/>';
                    }
                    if (ee.tag){
                        var tag_color = ee.tag_color || 'rgba(0,200,0,0.7)';
                        text += '<Panel class="panel_new_event" style="background-color:'+tag_color+';"><Label class="text_new_event" text="'+ee.tag+'"/></Panel>';
                    }
                    text += '</Panel></Panel>';
                }

                $('#ranking_main_col_event').SetHasClass('invisible',false);
                $('#panel_ranking').style['width'] = '1520px';
                $('#panel_event_container').RemoveAndDeleteChildren();
                $('#panel_event_container').BCreateChildren(text);
            }
            else{
                
            }
        
        }

        if (object.vip_vote_info){
            VIP_VOTE_INFO = object.vip_vote_info;

            for (var i=0;i< object.vip_vote_info.length;i++){
                var v = object.vip_vote_info[i];
                var id = v.id;
                var options = v.options;
                var title = id.split(':')[0];
                var time = id.split(':')[1];
                if (title && time){
                    $('#panel_vote_box_'+(i+1)).SetHasClass('invisible',false);
                    $('#text_vote_box_'+(i+1)+'_title').text = $.Localize(title);
                    $('#text_vote_box_'+(i+1)+'_time').text = $.Localize(time);
                }
                // if (v.winner1){
                    var text = '<DOTAScenePanel id="panel_vote_box_'+(i+1)+'_winner_2_hero" class="panel_vote_box_winner_hero" unit="'+(CHESS_2_HERO[v.winner1]||'npc_dota_hero_wisp')+'"  light="global_light" antialias="true" renderdeferred="false" particleonly="false"/>';
                    $('#panel_vote_box_'+(i+1)+'_winner_1').RemoveAndDeleteChildren();
                    $('#panel_vote_box_'+(i+1)+'_winner_1').BCreateChildren(text);
                // }
                // if (v.winner2){
                    var text = '<DOTAScenePanel id="panel_vote_box_'+(i+1)+'_winner_2_hero" class="panel_vote_box_winner_hero" unit="'+(CHESS_2_HERO[v.winner2]||'npc_dota_hero_wisp')+'"  light="global_light" antialias="true" renderdeferred="false" particleonly="false"/>';
                    $('#panel_vote_box_'+(i+1)+'_winner_2').RemoveAndDeleteChildren();
                    $('#panel_vote_box_'+(i+1)+'_winner_2').BCreateChildren(text);
                // }
                // if (v.winner3){
                    var text = '<DOTAScenePanel id="panel_vote_box_'+(i+1)+'_winner_2_hero" class="panel_vote_box_winner_hero" unit="'+(CHESS_2_HERO[v.winner3]||'npc_dota_hero_wisp')+'"  light="global_light" antialias="true" renderdeferred="false" particleonly="false"/>';
                    $('#panel_vote_box_'+(i+1)+'_winner_3').RemoveAndDeleteChildren();
                    $('#panel_vote_box_'+(i+1)+'_winner_3').BCreateChildren(text);
                // }
                if (v.voted){
                    // 已投票
                    $('#button_vote_box_'+(i+1)).SetHasClass('invisible',true);
                    $('#panel_vote_box_'+(i+1)+'_voted').SetHasClass('invisible',false);
                    $('#panel_vote_box_'+(i+1)+'_hero').heroname = CHESS_2_HERO[v.voted];
                }
                else{
                    // 未投票
                    $('#panel_vote_box_'+(i+1)+'_voted').SetHasClass('invisible',true);
                    $('#button_vote_box_'+(i+1)).SetHasClass('invisible',false);
                }
            }
        }
        
        
    }

    // 购买特效cb
    if (event == 'buy_effect_cb'){
        var object = data;
        if (object.err == 0){
            $('#ice_storage').text = 'x '+object.candy;
            show_msg($.Localize('buysuccess'));
            refresh_shop();

            GameEvents.SendCustomGameEventToServer( "change_onduty_hero", 
                {
                    'player_id': Players.GetLocalPlayer(),
                    'onduty_hero_new': object.onduty_hero,
                }
            );
        }
        else{
            show_msg('#buyfail');
        }
    }
    // 更换当前棋手cb
    if (event == 'change_zhugong_cb'){
        var object = data;
        if (object.err == 0){
            MY_ONDUTY_HERO = object.onduty_hero;
            show_msg('#tips_choose_hero_success');
            refresh_shop();
            close_panel_shop();


            GameEvents.SendCustomGameEventToServer( "change_onduty_hero", 
                {
                    'player_id': Players.GetLocalPlayer(),
                    'onduty_hero_new': object.onduty_hero,
                }
            );
        }
        else{
            show_msg('#tips_choose_hero_fail');
        }
    }
    // 抽扭蛋机cb
    if (event == 'lottery_cb'){
        var object = data;
        if (object.err == 0){
            for (var i=0;i<object.fake.length;i++){
                var fake = object.fake[i].split('_')[0];
                $('#lottery_'+i).style['background-image'] = "url('file://{images}/custom_game/skaters/"+fake+".png')";
                $('#lottery_'+i).style['background-size'] = '100% 100%';
            }
            is_rolling = true;
            $('#go_lottery').SetHasClass('invisible',false);
            var s = Game.EmitSound('ui.treasure_spin');
            $('#lottery_track').style['position'] = "-8100px 0px 0px";
            $.Schedule(5,function(){
                Game.StopSound(s);
                Game.EmitSound('ui.npe_objective_given');
            });

            $.Schedule(6,function(){
                $('#go_lottery').SetHasClass('invisible',true);
                $('#lottery_track').style['transition-duration'] = "0.5s";
                $('#lottery_track').style['position'] = "0px 0px 0px";
                if(!object.award){
                    show_msg($.Localize('lotfailed'));
                }
                else{
                    open_panel_award('dac','chessplayer',object.award,'1','candystore');
                    refresh_shop();
                } 
                $.Schedule(1,function(){
                    is_rolling = false;
                    $('#lottery_track').style['transition-duration'] = "5s";
                })
            })
        }
        else{
            show_msg('#buyfail')
        }
    }
    // 激活激活码cb
    if (event == 'activate_cdkey_cb'){
        var object = data;
        //激活码无效
        if(object.msg == "invalid key"){  
            show_msg($.Localize('invalid_key'));
        }
        //已被激活
        if(object.msg == "already activated"){ 
            show_msg($.Localize('already_activated'));
        }

        //激活成功
        if(object.err == 0){
            if(object.award.test == true){  
                show_msg('内测资格激活成功！');   
            }
            else if(object.award.candy){
                open_panel_award('dac','candy','',object.award.candy,'cdkey');
                refresh_shop()
            }
            else if(object.award.courier){
                var c = object.award.courier.split('_')[0];
                open_panel_award('dac','chessplayer',c,'1','cdkey');
                refresh_shop();
            }
        }
    }
    // 汰换英雄cb
    if (event == 'recycle_hero_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#tips_recycle_hero_success');
            refresh_shop();
        }
        else{
            show_msg('#tips_recycle_hero_fail');
        }
    }

    // 集换英雄cb
    if (event == 'jihuan_hero_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#tips_jihuan_hero_success');
            if (object.award){
                var award_hero = object.award.split('_')[0];
                open_panel_award('dac','chessplayer',award_hero,'1','candystore');
            }
            refresh_shop();
        }
        else{
            show_msg('#tips_jihuan_hero_fail');
        }
    }

    // 投票cb
    if (event == 'request_vote_chess_cb'){
        var object = data;
        if (object.err == 0){
            show_msg('#vote_success');
            refresh_shop();
        }
        else{
            show_msg($.Localize('vote_fail'));
        }
    }
}
var streak_list = [];
function OnWinStreak(keys){
    if (!CheckClientKey(keys.key)) return;
    var streak = keys.streak;
    var is_vip = keys.is_vip;
    var player_name = Game.GetPlayerInfo(keys.player_id).player_name;
    streak_list.push({player_name:player_name,streak:streak,is_vip:is_vip});
    ShowMsg();
}
function ShowMsg(){
    if (streak_list.length > 0){
        var this_msg = streak_list.shift();
        $('#winstreak').text = (this_msg.player_name+$.Localize('hasgot')+this_msg.streak+$.Localize('winstreak'))
        $('#winstreak').SetHasClass('invisible',false);
        var effects;
        if (this_msg.streak == 5){
            Game.EmitSound("announcer_killing_spree_announcer_kill_mega_01");
            if (this_msg.is_vip){
                effects = Particles.CreateParticle('particles/econ/events/killbanners/screen_killbanner_compendium16_multikill_generic.vpcf',6,0)
            }
            else{
                effects = Particles.CreateParticle('particles/econ/events/killbanners/screen_killbanner_compendium14_doublekill.vpcf',6,0)
            }
        }
        if (this_msg.streak == 8){
            Game.EmitSound("announcer_killing_spree_announcer_kill_monster_01");
            if (this_msg.is_vip){
                effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium16_triplekill.vpcf",6,0)
            }
            else{
                effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium14_triplekill.vpcf",6,0)
            }
        }
        if (this_msg.streak == 10){
            Game.EmitSound("announcer_killing_spree_announcer_kill_holy_01");
            if (this_msg.is_vip){
                effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium16_rampage.vpcf",6,0)
            }
            else{
                effects = Particles.CreateParticle("particles/econ/events/killbanners/screen_killbanner_compendium14_rampage.vpcf",6,0)
            }
        }

        $('#winstreak').style['transform'] = 'scale3d( 1.5, 1.5, 1.5)';
        $.Schedule(0.3,function(){
            $('#winstreak').style['transform'] = 'scale3d( 1,1,1)';
        });

        $.Schedule(5,function(){
            Particles.DestroyParticleEffect(effects,true)
            $('#winstreak').SetHasClass('invisible',true);
            ShowMsg();
        })
    }
}
function show_lottery_content(){
    $('#panel_lottery_show').SetHasClass('invisible',false);
}
function hide_lottery_content(){
    $('#panel_lottery_show').SetHasClass('invisible',true);
}

// 发弹幕
function OnBullet(data){
    var steam_id = Game.GetPlayerInfo(data.player_id).player_steamid;
    var player_name = wordFilter(Game.GetPlayerInfo(data.player_id).player_name);
    var text = wordFilter(data.text || '');
    var vip = data.vip;

    var color = null;
    if (data.win || data.win == 0){
        var oppo = '';
        if (data.win.indexOf && data.win.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.win);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.win).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    if (data.draw || data.draw == 0){
        var oppo = '';
        if (data.draw.indexOf && data.draw.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.draw);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.draw).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    if (data.lose || data.lose == 0){
        var oppo = '';
        if (data.lose.indexOf && data.lose.indexOf('pve_')>=0 ){
            oppo = $.Localize(data.lose);
        }
        else{
            oppo = data.cloud_opp_name?$.Localize('cloud_player'):Game.GetPlayerInfo(data.lose).player_name;
        }
        text = text + data.score + ' '+ oppo;
        color = '#bbb';
    }
    var target = data.target;
    bullet_chat(steam_id, player_name, text, target, color, data.player_id,vip);
}

function wordFilter(text){
    if ($.Language() != "schinese"){
        return text;
    }
    for (var i=0;i<WORD_FILTER.length;i++){
        if (text.indexOf(WORD_FILTER[i])>=0){
            return '#%^@$!';
        }
    }
    return text;
}

function OnSyncHp(data){
    $('#text_player_hp_'+(data.player_id)).text = Math.round(data.hp)+'%';
    if (data.hp <= 0){
        $('#text_player_hp_'+(data.player_id)).text = "FAILED";
        $('#text_player_hp_'+(data.player_id)).style['color'] = '#888';
    }
    $('#player_hp_'+(data.player_id)).style['width'] = (data.hp/(data.hp_max||100))*190+'px';
    $('#player_mp_'+(data.player_id)).style['width'] = (data.mp/(100))*190+'px';
    $('#text_player_mp_'+(data.player_id)).text = '$'+Math.round(data.mp||0);
    $('#text_player_courier_level_'+(data.player_id)).text = Math.round(data.level)||0;
}

function OnPopulation(data){
    if (!CheckClientKey(data.key)) return;
    if(data.count <= data.max_count){
        $('#population').style['color'] = '#ffffff';
        $('#population').text = data.count+' / '+data.max_count;
    }
    else{
        $('#population').style['color'] = '#ff0000';
        $('#population').text = data.count+' / '+data.max_count;
    }    
}

function OnBattleInfo(data){
    if (!CheckClientKey(data.key)) return;
    CURR_HOST_OPPO = null;

    $('#panel_battle_0').SetHasClass('invisible',true);
    $('#panel_battle_1').SetHasClass('invisible',true);
    $('#panel_battle_2').SetHasClass('invisible',true);
    $('#panel_battle_3').SetHasClass('invisible',true);
    $('#panel_battle_4').SetHasClass('invisible',true);
    $('#panel_battle_5').SetHasClass('invisible',true);
    $('#panel_battle_6').SetHasClass('invisible',true);
    $('#panel_battle_7').SetHasClass('invisible',true);

    if (data.type=='prepare'){ // 准备中
        BATTLE_STATUS = 0;

        $('#round_battle').text = $.Localize('pve_preparing');
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',false);
        $('#cloud_name').SetHasClass('invisible',true);
        $('#round_battle').style['color'] = '#fff';
    }
    else if (data.type=='pve') { // pve
        BATTLE_STATUS = 1;
        $('#round_battle').text = $.Localize('pve_'+data.text);
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',false);
        $('#round_battle').SetHasClass('invisible',false);
        $('#round_battle').style['color'] = '#fff';
        $('#cloud_name').SetHasClass('invisible',true);
    }
    else if (data.type=='cloud') {
        // 云对战
        BATTLE_STATUS = 3;
        $('#battle_icon').SetHasClass('invisible',true);
        $('#cloud_icon').SetHasClass('invisible',false);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',true);
        $('#round_battle').style['color'] = '#fff';
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){}
        )
        $('#cloud_name').SetHasClass('invisible',false);
        $('#cloud_name').steamid = data.text;
    }
    else if (data.type=='pvp') {
        // 普通对战
        BATTLE_STATUS = 2;
        $('#battle_icon').SetHasClass('invisible',false);
        $('#cloud_icon').SetHasClass('invisible',true);
        $('#creep_icon').SetHasClass('invisible',true);
        $('#round_battle').SetHasClass('invisible',false);

        CURR_HOST_OPPO = parseInt(data.host_oppo_id);
        CURR_GUEST_OPPO = parseInt(data.guest_oppo_id);
        $('#round_battle').SetPanelEvent(
            "onactivate", 
            function(){
                change_camera_2_player_ground(CURR_HOST_OPPO);
            }
        )
        $('#cloud_name').SetHasClass('invisible',true);

        $('#round_battle').text = Players.GetPlayerName(parseInt(data.text));
        var team = Players.GetTeam(CURR_HOST_OPPO);
        // $('#round_battle').style['color'] = TEAM_COLOR[team];

        // 显示客场正在对战谁
        $('#panel_battle_'+CURR_GUEST_OPPO).SetHasClass('invisible',false);
        
    }
    $('#round_info').text = "ROUND "+data.round;
    ROUND = data.round;
}

// function OnPlayerDisconnect(data){
//     $("#outer_player_board_"+data.disconnectid).style["opacity"] = "0.3";
// }

function OnStartGame(keys){
    var setting =CustomNetTables.GetTableValue( "setting_table", 'show_settings' );
    if (!setting){
        return;
    }
    var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
    var my_setting = setting[local_id];

    if (my_setting){
        if (parseInt(my_setting.is_click_select) == 0){
            toggle_select();
        }
        if (parseInt(my_setting.is_auto_combine) == 0){
            toggle_combine();
        }
        if (parseInt(my_setting.is_bullet_show) == 0){
            toggle_bullet();
        }
    }
}

function OnPlayerReconnect(data){
    for (var i=0;i<10;i++) {
        if (Players.GetPlayerHeroEntityIndex(i)){
            heroindex2id[Players.GetPlayerHeroEntityIndex(i)] = i;
        }
    }
    $("#iconlist").style["position"] = "0px 0px 0px";
    $("#outer_player_board_"+data.id).style["opacity"] = "1";
    $("#button_board_right").SetHasClass('invisible',false);

    if (Players.GetLocalPlayer() == data.id){
        var setting =CustomNetTables.GetTableValue( "setting_table", 'show_settings' );
        var local_id = Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
        var my_setting = setting[local_id];

        if (parseInt(my_setting.is_click_select) == 0){
            toggle_select();
        }
        if (parseInt(my_setting.is_auto_combine) == 0){
            toggle_combine();
        }
        if (parseInt(my_setting.is_bullet_show) == 0){
            toggle_bullet();
        }

        var data =CustomNetTables.GetTableValue( "ranking_top_table", 'ranking_top' );
        if (data){
            UpdateRankingTop(data);
        }
    }
}

var IS_PREVIEW_CD = false;
function preview_effect(e,goods){
    if (IS_PREVIEW_CD){
        return;
    }
    IS_PREVIEW_CD = true;
    $("#buy_texiao_0").style['opacity'] = '0.1';
    $("#buy_texiao_1").style['opacity'] = '0.1';
    $("#buy_texiao_2").style['opacity'] = '0.1';
    close_panel_shop();
    GameUI.SetCameraTarget( Players.GetPlayerHeroEntityIndex(   Players.GetLocalPlayer()) );

    GameEvents.SendCustomGameEventToServer( "preview_effect", {"hero_index" : Players.GetPlayerHeroEntityIndex(   Players.GetLocalPlayer()),  "effect" : goods } );
    OnMima({text: 'PREVIEW: '+$.Localize(goods),key:CLIENT_KEY});
    GameUI.SetCameraDistance(700);

    // $('#ie_welcome_text2').text = 'PREVIEW: '+$.Localize(goods);
    // $("#ie_welcome").style["position"] = "0px 0px 0px";

    $.Schedule(5,function(){
        GameUI.SetCameraDistance(1400);
        GameUI.SetCameraTarget(-1);
        // $("#ie_welcome").style["position"] = "0px -200px 0px";
        show_confirm($.Localize('buyeffect1')+$.Localize(MY_ONDUTY_HERO.split('_')[0])+$.Localize('buyeffect2'),"buy_effect('"+goods+"')");
        $.Schedule(10,function(){
            IS_PREVIEW_CD = false;
            $("#buy_texiao_0").style['opacity'] = '1';
            $("#buy_texiao_1").style['opacity'] = '1';
            $("#buy_texiao_2").style['opacity'] = '1';
        });
    });
}

var CURR_COLLECT = null;
function confirm_jihuan_hero(jihuan_hero){
    CURR_COLLECT = jihuan_hero;
    show_confirm($.Localize('text_confirm_jihuan_hero')+' '+$.Localize(jihuan_hero.split('_')[0])+'?',"jihuan_hero()")
}
function jihuan_hero(){
    close_confirm();
    SendHTTP('jihuan_hero','jihuan_hero_cb',{hero:CURR_COLLECT},1)
}

var IS_BULLET_SHOW = true;
$('#img_bullet_toggle_tick').SetHasClass('invisible',false);
function toggle_bullet(){
    if (IS_BULLET_SHOW){
        // 隐藏弹幕
        IS_BULLET_SHOW = false;
        $('#img_bullet_toggle_tick').SetHasClass('invisible',true);
        Game.EmitSound("Shop.PanelUp");
        // $('#bulletbox').SetHasClass('invisible',true);
    }
    else{
        // 显示弹幕
        IS_BULLET_SHOW = true;
        $('#img_bullet_toggle_tick').SetHasClass('invisible',false);
        Game.EmitSound("ui.settings_open");
        // $('#bulletbox').SetHasClass('invisible',false);
    }
    //通知lua设置改变了
    GameEvents.SendCustomGameEventToServer( "user_settings_update", 
    {
        "key":"is_bullet_show",
        "value": IS_BULLET_SHOW?1:0,
        "hehe": Date.now(),
    });
}

var IS_AUTO_COMBINE = true;
$('#img_combine_toggle_tick').SetHasClass('invisible',false);
function toggle_combine(){
    if (IS_AUTO_COMBINE){
        IS_AUTO_COMBINE = false;
        $('#img_combine_toggle_tick').SetHasClass('invisible',true);
        Game.EmitSound("Shop.PanelUp");
        GameEvents.SendCustomGameEventToServer( "set_auto_combine", 
        {
            "player_id": Players.GetLocalPlayer(),
            "is_auto_combine": false,
            "hehe": Date.now()
        });
    }
    else{
        IS_AUTO_COMBINE = true;
        $('#img_combine_toggle_tick').SetHasClass('invisible',false);
        Game.EmitSound("ui.settings_open");
        GameEvents.SendCustomGameEventToServer( "set_auto_combine", 
        {
            "player_id": Players.GetLocalPlayer(),
            "is_auto_combine": true,
            "hehe": Date.now()
        });
    }
    //通知lua设置改变了
    GameEvents.SendCustomGameEventToServer( "user_settings_update", 
    {
        "key":"is_auto_combine",
        "value": IS_AUTO_COMBINE?1:0,
        "hehe": Date.now(),
    });
}

var IS_CLICK_SELECT = true;
$('#img_select_toggle_tick').SetHasClass('invisible',false);
function toggle_select(){
    if (IS_CLICK_SELECT){
        IS_CLICK_SELECT = false;
        $('#img_select_toggle_tick').SetHasClass('invisible',true);
        Game.EmitSound("Shop.PanelUp");
    }
    else{
        IS_CLICK_SELECT = true;
        $('#img_select_toggle_tick').SetHasClass('invisible',false);
        Game.EmitSound("ui.settings_open");
        GameUI.SelectUnit( -1, false );
    }
    //通知lua设置改变了
    GameEvents.SendCustomGameEventToServer( "user_settings_update", 
    {
        "key":"is_click_select",
        "value": IS_CLICK_SELECT?1:0,
        "hehe": Date.now(),
    });
}

function show_collect_part(c,index){
    if (CURR_SHOP_COLLECT_PARTS[c][index]){
        var jihuan_name = CURR_SHOP_COLLECT_PARTS[c][index].split('_')[0];
        $.DispatchEvent( "DOTAShowTextTooltip", $("#img_shop_jihuan_part_"+c+'_'+index), $.Localize(jihuan_name));
    }
}

function OnShowLiuju(keys){
    if (!CheckClientKey(keys.key)) return;
    $('#btn_liuju').SetHasClass('invisible',false);
}
function OnHideLiuju(keys){
    if (!CheckClientKey(keys.key)) return;
    $('#btn_liuju').SetHasClass('invisible',true);
}
function OnUpdateLiuju(keys){
    if (!CheckClientKey(keys.key)) return;
    $('#txt_liuju').text = $.Localize('txt_liuju')+'('+(keys.count||0)+'/'+(keys.total||0)+')';
}
function OnSuggestLiuju(){
    GameEvents.SendCustomGameEventToServer( "suggest_liuju", 
    {
        "player_id": Players.GetLocalPlayer(),
        "hehe": Date.now()
    });
}
var CLIENT_KEY;
function CheckClientKey(k){
    if (!CLIENT_KEY){
        CLIENT_KEY = k;
        return true;
    }
    else{
        if (CLIENT_KEY==k){
            return true;
        }
        else{
            return false;
        }
    }
}
function guanbi_panel_draw_card(){
    close_panel_draw_card({key:CLIENT_KEY});
}

function toggle_f9(){
    GameEvents.SendCustomGameEventToServer( "request_pause_game", { 
        "playerid": Players.GetLocalPlayer(),
    });
}

function preview_effect_outer(e,goods){
    return function(){
        preview_effect(e,goods)
    }
}

function confirm_jihuan_hero_outer(goods){
    return function(){
        confirm_jihuan_hero(goods)
    }
}

function toggle_player_details(){
    if (IS_PANEL_PLAYER_DETAILS_SHOW == true){
        Game.EmitSound("ui.profile_close")
        IS_PANEL_PLAYER_DETAILS_SHOW = false;
        $("#board_right").style['position'] = '1120px 0px 0px';
        $("#button_board_right").style['transform'] = 'rotateZ(0deg)';
    }
    else{
        Game.EmitSound("ui.map_open");
        IS_PANEL_PLAYER_DETAILS_SHOW = true;
        $("#board_right").style['position'] = '120px 0px 0px';
        $("#button_board_right").style['transform'] = 'rotateZ(180deg)';

        close_panel_list();
        close_panel_guide();
        close_panel_ranking();
        close_panel_shop();
        close_panel_draw_card({key:CLIENT_KEY});
    }
}
function close_player_details(){
    Game.EmitSound("ui.profile_close")
    IS_PANEL_PLAYER_DETAILS_SHOW = false;
    $("#board_right").style['position'] = '1120px 0px 0px';
    $("#button_board_right").style['transform'] = 'rotateZ(0deg)';
}

function OnShowGameover(keys){
    if (!CheckClientKey(keys.key)) return;

    // 填写个人结束面板的内容
    $("#gameover_text_rank_2").text = keys.rank || '?';
    $("#gameover_text_rank_3").text = '/'+(keys.total_rank || '?');
    if (keys.candy){
        $("#gameover_panel_candy").SetHasClass('invisible',false);
        $("#gameover_text_candy").text = '× '+keys.candy;
    }
    if (keys.level){
        $("#gameover_image_level").SetImage('file://{images}/custom_game/level_'+keys.level+'.png');
        $("#gameover_text_level_1").text = $.Localize('text_player_level_'+keys.level);
        if (keys.level >= 38 && keys.queen_rank){
            $("#gameover_text_level_1").text = '#'+keys.queen_rank;
        }
        if (keys.level > 0){
            $("#gameover_text_level_1").style['color'] = '#fff';
        }

        if (keys.mmr_delta > 0){
            if (keys.level_delta > 0){
                $('#gameover_text_level_2').text = "▲♫";
            }
            else{
                $('#gameover_text_level_2').text = "▲";
            }
            $('#gameover_text_level_2').style['color'] = "#88ff88";
        }
        if (keys.mmr_delta < 0){
            if (keys.level_delta < 0){
                $('#gameover_text_level_2').text = "▼♭";
            }
            else{
                $('#gameover_text_level_2').text = "▼";
            }
            $('#gameover_text_level_2').style['color'] = "#ff0000";
        }
    }
    


    Game.EmitSound("dac.liuju");
    $('#panel_gameover').style['position'] = '0px 0px 0px';
    refresh_shop();
}



// 监听选中的单位
GameEvents.Subscribe( "dota_player_update_query_unit", OnPlayerSelectUnit );
function OnPlayerSelectUnit(){
    if (!IS_CLICK_SELECT){
        return;
    }
    var unit = Players.GetLocalPlayerPortraitUnit();
    var team = Entities.GetTeamNumber( unit );
    var my_team = Players.GetTeam( Game.GetLocalPlayerID() );
    var unit_name = Entities.GetUnitName( unit );
    if (team == my_team && unit_name != "npc_dota_hero_wisp"){
        // $.Msg('select: '+unit_name);
        GameEvents.SendCustomGameEventToServer( "request_select_chess", { 
            "unit_index": unit,
        });
    }
}

function highlight_chess(class_name){
    var xxx = $("#chess_board").FindChildrenWithClassTraverse(class_name);
    var yyy = $("#chess_board").FindChildrenWithClassTraverse('list_line');
    var filtered = false;
    for (var j in yyy){
        if (yyy[j].BHasClass('opacity_5')){
            filtered = true;
        }
    }
    for (var i in xxx){
        if (xxx[i].BHasClass('opacity_5')){
            filtered = false;
        }
    }
    if (xxx.length){
        if (!filtered){
            for (var j in yyy){
                yyy[j].SetHasClass("opacity_100",false);
                yyy[j].SetHasClass("opacity_5",true);
            }
            for (var i in xxx){
                xxx[i].SetHasClass("opacity_100",true);
                xxx[i].SetHasClass("opacity_5",false);
            }
        }
        else{
            for (var j in yyy){
                yyy[j].SetHasClass("opacity_100",true);
                yyy[j].SetHasClass("opacity_5",false);
            }
        }
    }
    
}

var VIP_VOTE_INFO, VOTE_INFO = {}, CURR_VOTE_CHESS, CURR_VOTE_INDEX, CURR_VOTE_ID;
var IS_PANEL_VOTE_OPEN = false;
function show_vote_panel(index){
    if (IS_PANEL_VOTE_OPEN){
        return;
    }
    if (!VIP_VOTE_INFO || !VIP_VOTE_INFO[index-1]){
        show_msg($.Localize('vote_fail'));
    }
    // 显示投票面板
    $('#panel_vote').style['opacity'] = '1';
    $("#panel_vote").style['position'] = '0px 0px 0px';
    $("#panel_vote").style['transform'] = 'scale3d( 1,1,1)';
    Game.EmitSound("ui.settings_open");

    for (var i=1;i<=64;i++){
        $('#panel_vote_chess_'+i).SetHasClass('invisible',true);
        $('#panel_vote_grid_'+i).style['background-image'] = 'none';
    }

    var v = VIP_VOTE_INFO[index-1];
    var id = v.id;
    var title = id.split(':')[0];
    var time = id.split(':')[1];

    $('#text_vote_title').text = $.Localize(title);
    $('#button_vote').style['opacity'] = '0.1';
    CURR_VOTE_ID = id;
    var options = v.options;
    VOTE_INFO = {};
    IS_PANEL_VOTE_OPEN = true;
    
    for (var i=0;i<options.length;i++){
        var hero = CHESS_2_HERO[options[i]] || 'npc_dota_hero_wisp';

        var ii = 0, count = 0;
        while(!ii && count < 10000){
            var ran = Math.floor(Math.random()*64);
            if (!VOTE_INFO[ran]){
                ii = ran;
            }
            count ++;
        }

        if (!ii){
            show_msg($.Localize('vote_fail'));
            close_panel_vote();
            return;
        }


        VOTE_INFO[ii+1] = options[i];
        $('#panel_vote_chess_'+(ii+1)).heroname = hero;
        $('#panel_vote_chess_'+(ii+1)).SetHasClass('invisible',false);
    }
}
function close_panel_vote(){
    $('#panel_vote').style['opacity'] = '0';
    $('#panel_vote').style['transform'] = 'scale3d( 0.95, 0.95, 0.95)';
    $('#panel_vote').style['position'] = '-100px -50px 0px';
    Game.EmitSound("Shop.PanelUp");
    IS_PANEL_VOTE_OPEN = false;
}

function vote_chess(index){
    if (!VOTE_INFO[index]){
        return;
    }
    if (CURR_VOTE_INDEX && CURR_VOTE_CHESS){
        $('#panel_vote_grid_'+CURR_VOTE_INDEX).style['background-image'] = 'none';
        CURR_VOTE_CHESS = null;
        CURR_VOTE_INDEX = null;
    }

    var chess = VOTE_INFO[index];
    CURR_VOTE_CHESS = chess;
    CURR_VOTE_INDEX = index;
    $('#button_vote').style['opacity'] = '1';
    $('#panel_vote_grid_'+index).style['background-image'] = 'url("file://{images}/custom_game/vip/player_board_04.png")';
    Game.EmitSound('ui.npe_objective_given');

    $('#text_vote_title').text = $.Localize(CURR_VOTE_ID.split(':')[0])+': '+$.Localize(chess);
}

function request_vote(){
    if (CURR_VOTE_ID && CURR_VOTE_CHESS){
        SendHTTP('request_vote_chess','request_vote_chess_cb',{
            id: CURR_VOTE_ID,
            chess: CURR_VOTE_CHESS,
        },1);
        close_panel_vote();
    }
}