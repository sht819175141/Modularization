;(function(){
	$.fn.ccc=function(opt){
		var obj={
			width:300,
			height:200,
			type:"click",
			color:"red",
			time:500,
			left:200,
			top:150,
			fs:"20px",  
			bg:"#ccc",
			text:"",  
			cl:"tz"  
		}
		var set=$.extend({},obj,opt)
		auto=null;
		$(this).on("click",function(){
			if($("."+set.cl).length>0){
				$("."+set.cl).remove();
			}
			var nd=$("<div class="+set.cl+">"+set.text+"</div>")  
			var sp=$('<span class="sp">&times;</span>')
				nd.css({"position":"absolute",
						"font-size":set.fs,
						"width":set.width,
						"height":set.height,
						"left":set.left,
						"top":set.top,
						"background":set.bg
				})
				sp.prependTo(nd)
				nd.appendTo("body").hide().fadeIn(set.time);
			
			sp.on("click",function(){
				nd.fadeOut(set.time)
			})
			nd.on("mousedown",function(e){
				auto=true;
				var lf=e.pageX-nd.offset().left;  
				var tp=e.pageY-nd.offset().top;
				nd.on("mousemove",function(e){
					if(auto){
						var l=e.pageX-lf;
						var t=e.pageY-tp;
					
						if(l<0) l=0;	
						if(t<0) t=0;

						$(this).css({"left":l,"top":t})
					}
				})
				nd.on("mouseup",function(){
					$(this).off("mousemove")
					auto=false;
				})
			})
			// nd.on("mouseup",function(){
			// 	auto=false;
			// })
		})
	}
})(jQuery)