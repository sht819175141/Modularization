$(function(){
	var tuw=$(".waterfall-r").find(".wf-box").eq(0).width();
	var num=Math.floor($(".waterfall-r").width()/tuw);
	var arr=[];
	var p=0;

	$(window).on("scroll",function(){
				var maxh=Math.max.apply(null,arr);
				var maxinde=$.inArray(maxh,arr);

				var scrh=$(window).scrollTop()+$(window).height();
				if(scrh>minh){

					for(var j=0;j<6;j++){
						$(".waterfall-r").find(".wf-box").eq(0).clone().css({"left":maxinde*tuw,"top":maxh}).appendTo($(".waterfall-r"));
					}

					pailie(p,$(".waterfall-r").find(".wf-box").length)
				}
	
			})
	
	pailie(p,$(".waterfall-r").find(".wf-box").length);

	function pailie(ind,len){
		for(var i=ind;i<len;i++){
			var tuh=$(".waterfall-r").find(".wf-box").eq(i).height()+20;
			console.log(tuh);
			if(i<num){
				arr.push(0);
			}
			
			minh=Math.min.apply(null,arr);
			var inde=$.inArray(minh,arr);
			$(".waterfall-r").find(".wf-box").eq(i).stop().animate({"left":inde*tuw,"top":minh},1000);
			arr[inde]+=tuh;
			p++;
		}
	}
})