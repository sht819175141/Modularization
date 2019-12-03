define(function(require,exports,module){
	require("../../sea-require模块/require_rikaojindu/js/jquery-2.1.1");
	var moduleC=require("./C")
	function B(){
		$("#btns").on("click",function(){
			var nodes=$("<div class='max'><div class='min'></div></div>");
			$("#box").append(nodes);

			$(".min").on("mousedown",function(e){
				l=e.pageX;
				p=e.pageY;

				w=$(".max").outerWidth();
				t=$(".max").outerHeight();

				$(document).on("mousemove",function(e){
					var lx=e.pageX-l,
						ty=e.pageY-p,

						movex=lx+w,
						movey=ty+t,

						noww=moduleC.C(movex,1000),
						nowt=moduleC.C(movey,1000);

					$(".max").css({"width":noww,"height":nowt})
				})
			})
			$(document).on("mouseup",function(){
	       		$(this).off("mousemove");
	   		})
		})
		
	}
	exports.B=B;
})	
