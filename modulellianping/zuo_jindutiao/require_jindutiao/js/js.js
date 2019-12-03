require.config({
	paths:{"jquery":["../jq/jquery-1.11.1.min"]}
})
//引入模块
require(["jquery","main"],function($){
	$("li").eq(0).auto({"scale":0.5})
	$("li").eq(1).auto({"scale":0.9})	
})