define(function(require,exports,module){
	require("jquery");
	function createPlug(){
		var Dialog=function(opt){
			var _default={
				txt:"内容"
			},
			settings=$.extend({},_default,opt);

			//创建html结构
			var nodes=$('<div class="mark"></div>'
					+'<div class="dialog">'
						+'<img src="'+settings.txt+'" alt="" />'
						+'<span class="del">&times;</span>'
					+'</div>');
			$("body").prepend(nodes);
			
			$(".dialog").stop().animate({"bottom":"100px"},1000)
			//删除
			$(".del").on("click",function(){
				$(".mark").remove();
				$(".dialog").remove();
			})

		}
		$.dialog=function(opt){
			new Dialog(opt);
		}
	}
	exports.createPlug=createPlug;
})