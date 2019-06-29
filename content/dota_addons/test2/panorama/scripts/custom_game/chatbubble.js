/* 
	玩家面板聊天气泡
*/ 
(function () {
    GameEvents.Subscribe( "chat_bubble", OnShowChatBubble );
})();
var IS_CHAT_BUBBLE_SHOWING = [0,0,0,0,0,0,0,0];
function OnShowChatBubble(keys){
	var player_from = keys.player_from;
	var player_to = keys.player_to;
	// if (!CheckClientKey(keys.key)) return;

	if (IS_CHAT_BUBBLE_SHOWING[player_from]){
		$.Schedule(0.5,function(){
			OnShowChatBubble(keys);
		});
	}
	else{
		// $('#panel_chat_bubble_'+player_from).SetHasClass('invisible',false);
		$('#panel_chat_bubble_'+player_from).style['position'] = '0px 0px 0px';
    	$('#panel_chat_bubble_'+player_from).style['transform'] = 'scale3d( 1,1,1)';
		$('#text_chat_bubble_'+player_from).text = keys.text;
		IS_CHAT_BUBBLE_SHOWING[player_from] = 1;
		Game.EmitSound("ui.courier_in_use");

		$.Schedule(5,function(){
			IS_CHAT_BUBBLE_SHOWING[player_from] = 0;
			// $('#text_chat_bubble_'+player_from).text = '';
			$('#text_chat_bubble_'+player_from).style['font-size'] = '22px';
			// $('#panel_chat_bubble_'+player_from).SetHasClass('invisible',true);
			$('#panel_chat_bubble_'+player_from).style['position'] = '100px 0px 0px';
    		$('#panel_chat_bubble_'+player_from).style['transform'] = 'scale3d( 0.001,0.001,0.001)';
		});
	}
}