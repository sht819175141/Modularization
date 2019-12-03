;(function($){
	$.fn.auto=function(opt){
		var obj={
			autoplay:false,
			ind:"",
			speed:"",
			prev:"",
			next:""
		}
		var set=$.extend({},obj,opt);

		var uls=$("#list").find("ul");
		var w=uls.children("li").outerWidth();
		var len=uls.children("li").length;
		
		uls.width(w*(len+1))

		var prev=$(set.prev);
		var next=$(set.next);
		var ind=set.ind;

		
		if(set.autoplay){
		 	isplay();
		}

		$(".con").hover(function(){
			clearInterval(timer)
		},function(){
			autoplay();
		})
	

		function autoplay(){
			timer=setInterval(function(){	
				if(uls.is(":animated")) return false;
				ind++
				if(ind>=len){	
					$(uls.children().first().clone()).appendTo(uls);
					uls.stop().animate({'left':-w*ind},800,function(){
						uls.children().last().remove();
						uls.css('left',0)
					})
					ind=0
				}else{
					uls.stop().animate({'left':-w*ind},set.speeed)
				}
			},1000)
		}
		//前一张
		prev.on("click",function(){ 
			if(uls.is(":animated")) return false;
			uls.css({"left":-w})
			uls.children("li").eq(len-1).prependTo(uls);
			uls.stop().animate({"left":0})
		})
		//后一张
		next.on("click",function(){
			if(uls.is(":animated")) return false;
			console.log(cur-grounp.text)

			uls.stop().animate({'left':-w},function(){
				uls.children("li").eq(0).appendTo(uls);
				uls.css('left',0)
			})
		})	
	}
})(jQuery);