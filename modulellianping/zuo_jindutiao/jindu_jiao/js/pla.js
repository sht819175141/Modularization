define(function(require,exports,module){
	var drapmove=require("plan");
	require("jq");
	drapmove.drapmove();
	$("#move").drap()
	$("#mark").drap({
		"big":"#big",
		"txt":"#cont2",
		"bg":"#bg2"
	})
})