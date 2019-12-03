;(function(){
	$.fn.tab=function(opt){
		var obj={
			'type':'mouseover',
			'ind':0,
			'speed':2000,
			'spe':1000,
			'prev':'',
			'next':'',
			'dirction':'',
			'autoPlay':'',
			'timer':'',
			'ol':'',
			'cN':''
		};
		
		var set=$.extend({},obj,opt);
		var uls=$(this);
		var w=uls.children().eq(0).width();
		var h=uls.children().eq(0).height();
		var len=uls.children().length;
		var ind=set.ind;
		var box=uls.parent();
		
		$(set.ol).eq(0).addClass(set.cN)

		if(set.autoPlay=='true'){
			var timer=set.timer;
			timer=setInterval(autoAlay,set.speed)
			hover()
		}

		$(set.ol).on('mouseover',function(){
			var inde=$(this).index();
				ind=inde;
			if(set.dirction=='top'){
				uls.css({'top':-h*ind})
			}else if(set.dirction=='left'){
				uls.css({'left':-w*ind})
			}else{
				uls.children().eq(ind).stop().fadeIn(set.spe).siblings().fadeOut(set.spe)	
			}

			$(opt.ol).eq(ind).addClass(set.cN).siblings().removeClass(set.cN)
		})

		function hover(){
			box.hover(function(){
				clearInterval(timer)
			},function(){
				timer=setInterval(autoAlay,set.speed)
			})
		}

		//自动播
		function autoAlay(){
			dirc()
			ind++;
			autoAdd()
			$(set.ol).eq(ind).addClass(set.cN).siblings().removeClass(set.cN);
		}
		//点击下一张
		$(set.next).on(set.type,function(){
			if(uls.is(':animated'))return false;
			if(uls.children().is(':animated'))return false;
			dirc()
			ind++;
			autoAdd();
			$(set.ol).eq(ind).addClass(set.cN).siblings().removeClass(set.cN)
		})
		//点击上一张
		$(set.prev).on(set.type,function(){
			if(uls.is(':animated'))return false;
			if(uls.children().is(':animated'))return false;
			dirc()
			ind--;
			autoJian()
			$(opt.ol).eq(ind).addClass(set.cN).siblings().removeClass(set.cN)
		})
		function autoJian(){
			if(set.dirction=='left'){
				/*if(ind<0){
					$(uls.children().last().clone()).prependTo(uls).parent().css('left',-w).stop()
					.animate({'left':0},800,function(){
						uls.children().first().remove();
						uls.css('left',-w*(len-1))
					})
					ind=len-1
				}else{
					uls.stop().animate({'left':-w*ind},set.spe)
				}*/
				if(uls.is(":animated")) return false;
				uls.css({"left":-w});
				uls.children("li").last().prependTo(uls);
				uls.stop().animate({"left":0})

			}else if(set.dirction=='top'){
				if(ind<0){
					$(uls.children().last().clone()).prependTo(uls).parent().css('top',-h).stop()
					.animate({'top':0},800,function(){
						uls.children().first().remove();
						uls.css('top',-h*(len-1));
					})
					ind=len-1
				}else{
					uls.stop().animate({'top':-h*ind},set.spe)
				}
			}else{
				if(ind<0){
					ind=len-1;
				}
				uls.children().eq(ind).stop().fadeIn(set.spe).siblings().fadeOut(set.spe)
			}
		}
		
		function autoAdd(){
			if(set.dirction=='left'){
				if(ind>=len){
					uls.width(w*(len+1));
					$(uls.children().first().clone()).appendTo(uls).parent().stop();
					.animate({'left':-w*ind},800,function(){
						uls.children().last().remove();
						uls.css('left',0);
					})
					ind=0;
				}else{
					uls.stop().animate({'left':-w*ind},set.spe)
				}
			}else if(set.dirction=='top'){
				if(ind>=len){
					uls.height(h*(len+1))
					$(uls.children().first().clone()).appendTo(uls).parent().stop()
					.animate({'top':-h*ind},800,function(){
						uls.css('top',0)
						uls.children().last().remove();
					})
					ind=0
				}else{
					uls.stop().animate({'top':-h*ind},set.spe)
				}
			}else{
				if(ind>len){
					ind=0;
				}
				uls.children().eq(ind).stop().fadeIn(set.spe).siblings().fadeOut(set.spe)
			}
		}

		//判断运动类型和方向
		function dirc(){
			if(set.dirction=='left'){
				uls.width(w*len);
			}else if(set.dirction=='top'){
				uls.height(h*len)
			}else{
				uls.children().css('position','absolute')
			}
		}
	}
	
})(jQuery)