var GEM_HERO_LIST = {
    h101 : "npc_dota_hero_enchantress",
    h102 : "npc_dota_hero_puck",
    h103 : "npc_dota_hero_omniknight",
    h104 : "npc_dota_hero_wisp",
    h105 : "npc_dota_hero_ogre_magi",
    h106 : "npc_dota_hero_lion",
    h107 : "npc_dota_hero_keeper_of_the_light",
    h108 : "npc_dota_hero_rubick",
    h109 : "npc_dota_hero_jakiro", //new

    h201 : "npc_dota_hero_crystal_maiden",
    h202 : "npc_dota_hero_death_prophet",
    h203 : "npc_dota_hero_templar_assassin",
    h204 : "npc_dota_hero_lina",
    h205 : "npc_dota_hero_tidehunter",
    h206 : "npc_dota_hero_naga_siren",
    h207 : "npc_dota_hero_phoenix",
    h208 : "npc_dota_hero_dazzle",
    h209 : "npc_dota_hero_warlock",
    h210 : "npc_dota_hero_necrolyte",
    h211 : "npc_dota_hero_lich",
    h212 : "npc_dota_hero_furion",
    h213 : "npc_dota_hero_venomancer",
    h214 : "npc_dota_hero_kunkka",
    h215 : "npc_dota_hero_axe",  //new
    h216 : "npc_dota_hero_slark",  //new

    h301 : "npc_dota_hero_windrunner",
    h302 : "npc_dota_hero_phantom_assassin",
    h303 : "npc_dota_hero_sniper",
    h304 : "npc_dota_hero_sven",
    h305 : "npc_dota_hero_luna",
    h306 : "npc_dota_hero_mirana",
    h307 : "npc_dota_hero_nevermore",
    h308 : "npc_dota_hero_queenofpain",
    h309 : "npc_dota_hero_juggernaut",
    h310 : "npc_dota_hero_pudge",
    h311 : "npc_dota_hero_shredder",
    h312 : "npc_dota_hero_slardar",  //new
    h313 : "npc_dota_hero_antimage",  //new

    h401 : "npc_dota_hero_vengefulspirit",
    h402 : "npc_dota_hero_invoker",
    h403 : "npc_dota_hero_alchemist",
    h404 : "npc_dota_hero_spectre",
    h405 : "npc_dota_hero_morphling",
    h406 : "npc_dota_hero_techies",
    h407 : "npc_dota_hero_chaos_knight",  //new
    h408 : "npc_dota_hero_faceless_void",  //new
    h409 : "npc_dota_hero_legion_commander", //new
}
var RARITY_COLOR_BG = {1:'rgba(128,128,128,0.7)',2:'rgba(96,96,255,0.7)',3:'rgba(200,0,200,0.8)',4:'rgba(255,128,0,0.9)'};
var RARITY_COLOR_TEXT = {1:'rgba(255,255,255,1)',2:'rgba(128,128,255,1)',3:'rgba(255,0,255,1)',4:'rgba(255,128,0,1)'};

// 通用弹出窗
var is_panel_award_poping = false;
function close_panel_award(){
    $('#panel_award').style['position'] = '0px -1000px 0px';
    $('#panel_award').style['opacity'] = '0';
    Game.EmitSound("ui.books.pageturns");
    $.Schedule(0.5,function(){
        is_panel_award_poping = false;
    });
}
// game=gem/sm/dac
// award=shell/ice/candy/hero/skater/card/effect/item/smability/gemability
// count=数量
// from=shellstore/icestore/candystore/cdkey/pass/season/hidden/lucky/beginner
function open_panel_award(game,award,id,count,from){
    if (is_panel_award_poping){
        $.Schedule(0.5,function(){
            open_panel_award(game,award,id,count,from);
        });
    }
    else{
        $('#panel_award').style['position'] = '0px 0px 0px';
        $('#panel_award').style['opacity'] = '1';
        Game.EmitSound("ui.trophy_levelup");
        is_panel_award_poping = true;

        // 背景
        $('#panel_award_bgimg').SetImage('file://{images}/custom_game/panel_award_bgimg_'+game+'.jpg');
        if (game == 'dac'){
            $('#panel_award_bgimg_zhezhao').style['background-color'] = 'rgba(0,0,0,0.9)';
        }
        if (game == 'sm'){
            $('#panel_award_bgimg_zhezhao').style['background-color'] = 'rgba(0,0,0,0.5)';
        }
        if (game == 'gem'){
            $('#panel_award_bgimg_zhezhao').style['background-color'] = 'rgba(0,0,0,0.7)';
        }
        // 文字
        $('#panel_award_title_subtitle').text = $.Localize('award_subtitle_'+game);
        $('#panel_award_title_desc').text = $.Localize('award_from_'+from);
        if (award=='chessplayer'){
            $('#panel_award_title_text').text = $.Localize(id);
        }
        else{
           $('#panel_award_title_text').text = $.Localize('award_name_'+award+'_'+id); 
        }
        $('#panel_award_title_count').text = '× '+count;
        var color = parseInt(id.substr(1,1)) || 1;
        $('#panel_award_title').style['background-color'] = RARITY_COLOR_BG[color];
        $('#panel_award_title_desc').style['color'] = '#fff';
        // 图片
        if (award=='shell' || award=='ice' || award=='candy'){
            $('#panel_award_img').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetHasClass('invisible',false);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetImage('file://{images}/custom_game/award_'+award+'.png');
            $('#panel_award_title_desc').style['color'] = '#fff';
        }
        if (award=='card'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('file://{images}/custom_game/award_daccard_'+id+'.png');
            $('#panel_award_title_desc').style['color'] = '#fff';
        }
        if (award=='hero'){
            $('#panel_award_img').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',false);
            $('#panel_award_img_hero').heroname = GEM_HERO_LIST[id];
            // $('#panel_award_title_desc').style['color'] = RARITY_COLOR_TEXT[color];
            $('#panel_award_title_desc').text = $.Localize('award_rarity_'+color)+' '+$.Localize('award_type_hero');
            $('#panel_award_title_text').text = $.Localize(GEM_HERO_LIST[id]);
        }
        if (award=='skater'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('http://101.200.189.65:2009/pic/show?file_name='+id+'.png');
            // $('#panel_award_title_desc').style['color'] = RARITY_COLOR_TEXT[color];
            $('#panel_award_title_desc').text = $.Localize('award_rarity_'+color)+' '+$.Localize('award_type_skater');
            $('#panel_award_title_text').text = $.Localize(id);
        }
        if (award=='effect'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('http://101.200.189.65:2009/pic/show?file_name='+id+'.png');
            // $('#panel_award_title_desc').style['color'] = RARITY_COLOR_TEXT[color];
            $('#panel_award_title_desc').text = $.Localize('award_rarity_'+color)+' '+$.Localize('award_type_effect');
            $('#panel_award_title_text').text = $.Localize(id);
        }
        if (award=='smability'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('http://101.200.189.65:2009/pic/show?file_name='+id+'.png');
            // $('#panel_award_title_desc').style['color'] = RARITY_COLOR_TEXT[color];
            $('#panel_award_title_desc').text = $.Localize('award_rarity_'+color)+' '+$.Localize('award_type_smability');
            $('#panel_award_title_text').text = $.Localize(id);
        }
        if (award=='gemability'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('http://101.200.189.65:2009/pic/show?file_name=gem_'+id+'.png');
            // $('#panel_award_title_desc').style['color'] = RARITY_COLOR_TEXT[color];
            $('#panel_award_title_desc').text = $.Localize('award_rarity_'+color)+' '+$.Localize('award_type_gemability');
            $('#panel_award_title_text').text = $.Localize(id);
        }
        if (award=='item' && id=='extend'){
            $('#panel_award_img').SetHasClass('invisible',false);
            $('#panel_award_img_small').SetHasClass('invisible',true);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img').SetImage('file://{images}/custom_game/award_item_'+id+'.png');
            $('#panel_award_title_desc').style['color'] = '#fff';
        }
        if (award=='item' && id!='extend'){
            $('#panel_award_img').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetHasClass('invisible',false);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetImage('file://{images}/custom_game/award_item_'+id+'.png');
            $('#panel_award_title_desc').style['color'] = '#fff';
        }
        if (award=='chessplayer'){
            $('#panel_award_img').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetHasClass('invisible',false);
            $('#panel_award_img_hero').SetHasClass('invisible',true);
            $('#panel_award_img_small').SetImage('file://{images}/custom_game/skaters/'+id+'.png');
            $('#panel_award_title_desc').style['color'] = '#fff';
        }
    }
}

// 弹提示框，待美化
function show_msg(text){
    $('#msg_box_text').text = $.Localize(text);
    $('#msg_box').SetHasClass('invisible',false);
    Game.EmitSound("ui.crafting_gem_drop");

    $.Schedule(2,function(){
        $('#msg_box').SetHasClass('invisible',true);
    });
}

// 测试用
// function toggle_exchange(){
//     open_panel_award('gem','gemability','a201','1','candystore');
// }

function show_confirm(text,fun){
    $('#confirmtextall').text = text;
    $('#btnarea').RemoveAndDeleteChildren();
    $('#btnarea').BCreateChildren('<Label class="confirmres" text="" onactivate="'+fun+'"></Label><Label class="confirmrej" text="" onactivate="close_confirm()"></Label>');
    $('#confirm_box').SetHasClass('invisible',false);
}

function close_confirm(){
    $('#confirm_box').SetHasClass('invisible',true);
}

// open_panel_award('gem','gemability','h402','1','candystore');
// open_panel_award('dac','candy','','320','season');