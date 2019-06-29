var local_id;
var click_cd = false;

var random_loading_index = Math.floor(Math.random()*2+1);
//$('#dac_loading_pic').style['background-image'] = "url('file://{images}/custom_game/loading/ld1"+random_loading_index+".jpg')";
$('#dac_loading_pic').style['background-image'] = "url('file://{images}/custom_game/loading/myld11.png')";

$('#dac_loading_ad').SetImage('http://abcdxyzk.github.io/images/tools/2018-04-16-4.jpg');
if (Math.random()>0.5){
	$('#dac_loading_ad2').SetImage('http://abcdxyzk.github.io/images/tools/2018-04-16-4.jpg');
}
$.Schedule(1,function(){
	get_local_id();
})
function get_local_id(){
	if (Game.GetPlayerInfo(Players.GetLocalPlayer())){
		local_id = '76561198101849234'; //Game.GetPlayerInfo(Players.GetLocalPlayer()).player_steamid;
		RefreshHeroInfo();

		if (GetPlayerCount() == 1){
			$('#select-block-difficulty').SetHasClass('invisible',false);
		}
		else{
			$('#select-block-difficulty').SetHasClass('invisible',true);
		}
	}
	else{
		$.Schedule(1,function(){
			get_local_id();
		})
	}
}
function GetPlayerCount(){
	var count = 0;
    for (var i=0;i<=7;i++){
        var playerdata = Game.GetPlayerInfo(i);
        if (playerdata){
            count++;
        }
    }
    return count;
}
show_tip();
function show_tip(){
	$('#gametips').text = $.Localize('gametip'+Math.ceil(Math.random()*18))
}
function RefreshHeroInfo(is_changed){
	$.AsyncWebRequest('http://autochess.ppbizon.com/courier/get/@'+local_id+'?test=1&hehe='+ Math.random(),
	{
	    type: 'GET',
	    timeout: 600000,
	    success: function(a) {
	    	info_received = true;
	        var object = JSON.parse(a);
	        var text = '';
	        if (object.err==0){
	        	var hero_count= 0;

	        	var zhugong_list = object['user_info'][local_id]['zhugong'];
	        	var onduty_zhugong = object['user_info'][local_id]['onduty_hero'];
	        	var onduty_hero = onduty_zhugong.split('_')[0];
	        	var onduty_effect = onduty_zhugong.split('_')[1];

	        	var onduty_index = zhugong_list.indexOf(onduty_zhugong);

	        	for (var i=0;i<zhugong_list.length;i++){
	        		if (hero_count>15) {
	        			text += '<Panel class="hero_sea_top_panel_summary"><Label class="text_20_highlight" text = "......"/></Panel>';
	        			break;
	        		}
	        		var zhugong = zhugong_list[i];
	        		
	        		var hero = zhugong.split('_')[0];
	        		var effect = zhugong.split('_')[1];

	        		var text_effect = '+'+$.Localize(effect);
	        		if (!effect || effect =='e000'){
	        			text_effect = '';
	        		}

	        		var duihao = '';
		        	if (is_changed){
		        		duihao = '√';
		        	}

		        	if (i == onduty_index){
		        		text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20_highlight" text = "'+$.Localize(hero)+'"/><Label class="text_20_highlight" text = "'+text_effect+'"/><Label class="text_20_highlight" text = "'+duihao+'"/></Panel>';
		        	}
		        	else{
		        		text += '<Panel class="hero_sea_top_panel_summary" onactivate = "choose_hero(\''+zhugong+'\');"><Image class="img_loading_select_chesser" src="file://{images}/custom_game/skaters/'+hero+'.png"/><Label class="text_20" text = "'+$.Localize(hero)+'"/><Label class="text_20" text = "'+text_effect+'"/></Panel>';
		        	}

	        		hero_count ++;

	        	}

			    $('#select-block-inner').RemoveAndDeleteChildren();
			    $('#select-block-inner').BCreateChildren(text);
			    $('#select-board').style['position'] = '0px 0px 0px';
	        }
	    }
	});
}
function choose_hero(hero){
	if (click_cd){
		return;
	}
	var url = 'http://autochess.ppbizon.com/courier/change/@'+local_id+'@'+hero+'?hehe='+ Math.random();
    $.AsyncWebRequest(url,
    {
        type: 'GET',
        success: function(a) {
        	//click_cd = true;
            RefreshHeroInfo(true);
        }
    });
}




var DIFFICULTY;
function select_difficulty(lv){
	if (!DIFFICULTY){
		DIFFICULTY = lv;
		$('#text_difficulty_1').text = $.Localize('text_difficulty_1');
		$('#text_difficulty_2').text = $.Localize('text_difficulty_2');
		$('#text_difficulty_3').text = $.Localize('text_difficulty_3');
		$('#text_difficulty_1').SetHasClass('text_20',true);
		$('#text_difficulty_2').SetHasClass('text_20',true);
		$('#text_difficulty_3').SetHasClass('text_20',true);
		$('#text_difficulty_1').SetHasClass('text_20_highlight',false);
		$('#text_difficulty_2').SetHasClass('text_20_highlight',false);
		$('#text_difficulty_3').SetHasClass('text_20_highlight',false);

		$('#text_difficulty_'+lv).text = $.Localize('text_difficulty_'+lv)+'  √';
		$('#text_difficulty_'+lv).SetHasClass('text_20',false);
		$('#text_difficulty_'+lv).SetHasClass('text_20_highlight',true);

		GameEvents.SendCustomGameEventToServer( "select_difficulty", 
	        {
	            player_id: Players.GetLocalPlayer(),
	            difficulty: lv,
	        }
	    );
	}
}