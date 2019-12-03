define(function(require,exports,module){
	require("jq");
	function drapmove(move,big,txt,bg){
		$.fn.drap=function(opt){
			var obj={
				"big":"#box",
				"txt":"#cont",
				"bg":"#bg"
			}
			var opt=$.extend({},obj,opt);
			var move=$(this);
			var big=$(opt.big);
			var txt=$(opt.txt);
			var bg=$(opt.bg);
			var w=big.width();
			var moveW=move.outerWidth();
			txt.change(function(){
				var value=$(this).val();
				if(isNaN(value)){
					alert("请输入0-100的正整数字！")
				}else{
					var reg=/^1?\d{1,2}$/;
					if(reg.test(value)){
						if(value*1<=100){
							var n=(w*value*1)/100;
							move.css({left:n})
							bg.width(n)
						}else{
						alert("请输入0-100的正整数字！")	
						}
					}else{
						alert("请输入0-100的正整数字！")
					}
				}
			})
			move.on("mousedown",function(e){
				var x=e.pageX-$(this).position().left;
				$(document).on("mousemove",function(e){
					var l=e.pageX-x;
					if(l<0)l=0;
					if(l>big.width()-moveW){
						l=big.width()-moveW;
					}
				move.css({left:l})
					bg.width(l)
					var num=(move.position().left/(w-moveW))*100;
					$(txt).val(parseInt(num))
				})
				$(document).on("mouseup",function(){
					$(document).off("mousemove")
					$(document).off("mouseup")
				})
			})		
		}
		
	}
	exports.drapmove=drapmove;
})