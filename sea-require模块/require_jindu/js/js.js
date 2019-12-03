define(["jquery"],function(){
	function play(){
		$.fn.play=function(opt){
			var obj={
				"color":"",
				"scale":0.3
			}
			var set=$.extend({},obj,opt);
			return $(this).each(function(){
				var str=$("<div class='du'></div><span>"+(set.scale*100)+"%</span>");
				$(this).append(str);

				var w=$(this).width()*set.scale;
				$(this).find(".du").width(w);
				$(this).find(".du").css({"background":set.color});
			})
		}	
	}
	return play;
})