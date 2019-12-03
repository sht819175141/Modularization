require.config({
	paths:{
		"jquery":["jquery-2.1.1"]
	}
})
require(["js"],function(play){
	$("select").play().change();
})