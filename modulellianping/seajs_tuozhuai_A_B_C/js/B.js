define(function(require,exports,module){
	require("../jq/jquery-2.1.1.js");
	var move=require("C.js");
	function B(){
		$(".zhong").on("mousedown",function(e){
			l=e.pageX-$(this).offset().left;
			t=e.pageY-$(this).offset().top;
			$(document).on("mousemove",function(e){
				var lx=e.pageX-l,
					ty=e.pageY-t;
				$(".zhong").css({"left":lx,"top":ty})
			});
		})
		$(document).on("mouseup",function(){
			$(document).off("mousemove");
		})
	}
	exports.B=B;
})