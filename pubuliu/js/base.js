require.config({
	paths:{
		"jquery":["jquery-1.11.1.min"]
	}
})
require(["jquery","waterfull"],function(jq,water){
	$(".wrap").waterfull({
		outerbox:".box",
		inbox:".pic"})
		
	
})	