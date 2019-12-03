define(["jquery","C"],function(jq,C){
	function modA(){
		var x,y;
		$("#btn1").on("click",function(){
			$("#drop").show();
		})
		$("#btn3").on("click",function(){
			$("#drop").hide();
		})
		$("#drop").on("mousedown",function(e){
			x=e.pageX-$(this).offset().left;
			y=e.pageY-$(this).offset().top;
			$(document).on("mousemove",move);
			$(document).on("mouseup",up);
		})
		function move(e){
			var l=e.pageX-x;
			var t=e.pageY-y;
			l=C(l,$(window).width()-$("#drop").width(),0);
			t=C(t,$(window).height()-$("#drop").height(),0);
			$('#drop').css({'left':l,"top":t})

		}
		function up(){
			$(document).off("mousemove");
			$(document).off("mouseup");
			
		}
	}
	return modA
})