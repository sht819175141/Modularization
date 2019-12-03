define(["jquery"],function(){
	function auto(){
		$.fn.auto=function(opt){
			var obj={
				ind:"",
				type:"",
				prev:"",
				next:""
			}
			var set=$.extend({},obj,opt);

			return $(this).each(function(){

				var uls=$("#box").find("ul");
				var click=set.type;
				var w=uls.children("li").outerWidth();
				var len=uls.children("li").length;
				var ols=$("#ols");
				var lis=ols.children("li");
				var timer=null;
				
				uls.width(w*(len+1));
				var prev=$(set.prev);
				var next=$(set.next);
				var ind=set.ind;

				$("#box").hover(function(){
					clearInterval(timer);
					
					lis.on("mouseover",function(){
						index=$(this).index(),
						ind=index;
						img(ind);
					})
					//点击前一个
					prev.on(click,function(){
						if(uls.is(":animated")) return false;
						ind--;
						if(ind<0){
							$(uls.children().last().clone()).prependTo(uls);

							uls.css("left",-w).stop().animate({'left':0},800,function(){
								uls.children("li").first().remove();
								uls.css('left',-w*(len-1));
							})
							ind=len-1;
							lis.eq(ind).addClass("bg").siblings().removeClass("bg")	
						}else{
							img(ind)
						}					
					})
					//点击后一个
					next.on(click,function(){
						if(uls.is(":animated")) return false;
						ind++;
						if(ind>=len){
							$(uls.children().first().clone()).appendTo(uls);
							uls.stop().animate({'left':-w*len},800,function(){
								uls.children("li").last().remove();
								uls.css('left',0);
							})
							ind=0;
							lis.eq(ind).addClass("bg").siblings().removeClass("bg")
						}else{
							img(ind)
						}		
					})
				},function(){
					timer=setInterval(function(){
						next.trigger(click);
					},1000)
				}).trigger("mouseleave")
				
				function img(ind){
					uls.stop().animate({"left":-w*ind},800);
					lis.eq(ind).addClass("bg").siblings().removeClass("bg")
				}
			})

		}
	}
	return auto;
})