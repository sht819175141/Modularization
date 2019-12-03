define(["jquery"],function(){
	$.fn.waterfull=function(opt){
		var _default={
			outerbox:".box",
			inbox:".pic"
		}
		var set=$.extend({},_default,opt);
		return $(this).each(function(){
			var that=$(this),
				box=$(this).children(set.outerbox),
				w=box.eq(0).outerWidth(),
				n=Math.floor($(window).width()/w),
				arr=[];
				$(this).width(n*w).css("margin","0 auto");
				fall()
				function fall(){
					that.children(set.outerbox).each(function(index){
						var h=$(this).outerHeight();
						if(index<n){
							arr[index]=h;
						}else{
							var minH=Math.min.apply(null,arr),
								minIndex=$.inArray(minH,arr);
							$(this).css({left:w*minIndex,top:minH,position:"absolute"});
							arr[minIndex]+=$(this).outerHeight();
						}
					})
				}
				$(window).scroll(function(){
					if(checkScrol()){
						$.ajax({
							url:"data.json",
							async:false,
							success:function(data){
								console.log(data)
								$.each(data,function(i,obj){
									var box=$("<div class='box'></div>"),
										pic=$("<div class='pic'></div>"),
										img=$("<img src='"+obj.src+"' />");
										img.appendTo(pic);
										box.append(pic).appendTo(that);
								})
							}
						})
						fall()
					}
				})
				function checkScrol(){
					var lastH=that.children(set.outerbox).last().offset().top+that.children(set.outerbox).last().outerHeight()/2;
					var docuH=$(window).height()+$(window).scrollTop();
					return lastH<docuH?true:false;
				}
		})
	}
	return $.fn.waterfull;
})