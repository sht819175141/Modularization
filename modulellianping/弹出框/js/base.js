define(function(require,exports,module){
	require("jquery");
	function mod(){
		$.fn.popupPlug=function(opt){
			var setting=$.extend({},opt);
			return $.each($(this),function(){
				var elem=$(this);
				setTimeout(auto,2000);
				function auto(){
					var popup=  "<div id='mark'></div>"+
							    "<div id='popu'>"+
								  	"<img src='img/2.jpg' />"+
								  	"<span id='close'>"+
								  		"<img src='img/x.png'  />"+
								  	"</span>"+
							    "</div>";
					$(popup).appendTo(elem);
					$("#mark").height(elem.height());
					var t=($(window).height()-$("#popu").height())/2
					$("#popu").css("top",$(window).height()).stop().animate({"top":t},1000)
					$("#close").on("click",function(){
						$("#mark").remove();
						$('#popu').remove();
					})
				}
			})
		}
	}
	exports.mod=mod;
})