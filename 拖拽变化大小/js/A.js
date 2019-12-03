define(function(require,exports,module){
	require("../../sea-require模块/require_rikaojindu/js/jquery-2.1.1");
	function A(){
		$("#btn").on("click",function(){
			var str=$("<div class='dian'><button id='btna'>确定</button></div>");
			$("#box").append(str);
			$(".dian").on("mousedown",function(e){
				l=e.pageX-$(this).offset().left;
				t=e.pageY-$(this).offset().top;
				$("#btna").on("click",function(){
					$(this).parent().remove();
				})
			$(document).on("mousemove",function(e){
				var lx=e.pageX-l,
					ty=e.pageY-t;
				$(".dian").css({"left":lx,"top":ty});
			})
		})
			$(document).on("mouseup",function(){
       			$(document).off("mousemove");
   			})
		})

	}
	exports.A=A;
})
