define(["jquery","C"],function(jq,C){
	function modB(){
		var x,y,w,h;
		$("#btn2").on("click",function(){
			$("#out").show();
		})
		$("#in").on("mousedown",function(e){
			x=e.pageX;
			y=e.pageY;
			w=$('#out').width();
			h=$('#out').height();
			$(document).on("mousemove",move);
			$(document).on("mouseup",up);
		})
		function move(e){
			var l=w-(x-e.pageX),
				t=h-(y-e.pageY);
			l=C(l,600,50);
			t=C(t,600,50);
			$('#out').css({'width':l,"height":t});

		}
		function up(){
			$(document).off("mousemove");
			$(document).off("mouseup");
		}
	}
	return modB
})