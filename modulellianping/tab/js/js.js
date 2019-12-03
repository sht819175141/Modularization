define(function(require,exports,module){

	require("../jq/jquery-2.1.1.js");
	require("../css/style.css");

	exports.tab=function(){
		var timer=null;
		var ind=0;
		var len=$("#uls li").length;
		timer=setInterval(auto,1000);
		function auto(){
			ind++;
			if(ind>=len) ind=0;
			$("#uls li").eq(ind).addClass("bg").siblings().removeClass("bg");
			$("#divs div").eq(ind).show().siblings().hide();
		}
		$("#box").hover(function(){
			clearInterval(timer);
			$("#uls li").on("click",function(){
				$(this).addClass("bg").siblings().removeClass("bg");
				ind=$(this).index();
				$("#divs div").eq(ind).show().siblings().hide();
			})
		},function(){
			timer=setInterval(auto,1000)
		})
	}	
})