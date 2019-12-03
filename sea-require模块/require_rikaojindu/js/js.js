define(["jquery"],function(){
	function play(){
		$.fn.play=function(opt){
			var obj={
				"scale":"",
				"color":""
			}
			var set=$.extend({},obj,opt);
			return $(this).each(function(){
				var nodes=$("<div class='du'></div><span>"+(set.scale*100)+"%</span>")
				$(this).append(nodes);
				var w=$(this).width()*set.scale;
				$(this).find(".du").width(w);
				$(this).find(".du").css({"background":set.color});
			})
		}
	}
	return play;
})