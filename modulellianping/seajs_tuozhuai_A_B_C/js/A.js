define(function(require,exports,module){
	require("../jq/jquery-2.1.1.js");
	var moduleC=require("C.js");
		function A(){
			$(".min").on("mousedown",function(e){
				
				l=e.pageX;
				t=e.pageY;

				w=$(".max").outerWidth();
				t=$(".max").outerHeight();

				$(document).on("mousemove",function(e){
					var lx=e.pageX-l,
						ty=e.pageY-t,

						nowl=lx+w,
						nowy=ty+t,

						noww=moduleC.C(nowl,100,600),
						nowt=moduleC.C(nowy,100,600);

					$(".max").css({"width":noww,"height":nowt})
				})
			})
			$(document).on("mouseup",function(){
	       		$(this).off("mousemove");
	   		})				
		}
		exports.A=A;
})