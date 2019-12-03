$(function(){
	//焦点图
	$(".pic-wrap").find("div").css("float","left");
	var num=0;
	var time=null;
	var w=$(".pic-wrap div").first().width();
	var len=$(".pic-wrap div").length;
	$(".pic-wrap").width(w*len);

	time=setInterval(change,2000);
	function change(){
		if($(".pic-wrap").is(":animated")) return false;
		num++;
		if(num>len-1) num=0;				
		$(".num-nav li").eq(num).addClass("on").siblings().removeClass("on")

		$(".pic-wrap").stop().animate({"margin-left":"-="+w},function(){
			$(".pic-wrap div").first().appendTo(".pic-wrap");
			$(".pic-wrap").css("margin-left",-w)
		})
	}

	function show(ind){
		$(".pic-wrap").stop().animate({"left":-w*num})
		$(".num-nav>li").eq(ind).addClass('on').siblings().removeClass('on')
	}
	//划过停止
	$(".focus").hover(function(){
		clearInterval(time);
	},function(){
		time=setInterval(change,2000);
	})
	
	//右边的按钮
	$("#next").on("click",function(){
		/*if($(".pic-wrap").is(":animated")) return false;
		num++;
		if(num>len-1) num=0;				
		$(".num-nav li").eq(num).addClass("on").siblings().removeClass("on")
		$(".pic-wrap").stop().animate({"margin-left":-w},function(){
			$(".pic-wrap div").first().appendTo(".pic-wrap");
			$(".pic-wrap").css("margin-left",0)
		})*/
		change()
	})

	//左边的按钮
	$("#prev").on("click",function(){
		num--;
		if(num<0){
			num=4
		}
		$(".num-nav li").eq(num).addClass("on").siblings().removeClass("on");
		
		$(".pic-wrap").css("margin-left",-w);
		$(".pic-wrap").stop().animate({"margin-left":0})
		$(".pic-wrap div").last().prependTo(".pic-wrap");
	})
	
	//弹出
	$(".btn").on("click",function(){
		$(this).hide();
		$(".layer").stop().animate({"left":0},1000);
	})
	//弹出层效果
	$.each($(".type").find("a"),function(){
		$(this).hover(function(){
			$(this).parent().addClass("hover").siblings().removeClass("hover");

			$(".sma-layer").stop().animate({"left":200},1000);

			$(".pics>div").eq($(this).parent().num()).addClass("cur").siblings().removeClass("cur").css("margin-top",0);

			$("#notice").stop().animate({"top":0},500)
		},function(){

		})
	})
	//收回二级按钮
	$("#toggle-btn").on("click",function(){
		$(".sma-layer").stop().animate({"left":-100},1000);
	})
	$(".close").on("click",function(){
		$(".sma-layer").stop().animate({"left":-100},1000);
		$(".layer").stop().animate({"left":-200},1000);
		$(".btn").show();
	})
	
	var h=$(".pics dl").outerHeight();
	//弹出层上下按钮
	$(".up-btn").on("click",function(){
		$(".cur>dl:first").stop().animate({"margin-top":-h},300,function(){
			$(this).appendTo(".cur").css("margin-top",0)
		})

		if($("#notice").is(":animated")) return false
		if($("#notice").position().top()==0){
			$("#notice").stop().animate("top",400)
		}else{
			$("#notice").stop().animate("top","-="+dis)
		}		
	});
	
	$(".down-btn").on("click",function(){
		$(".cur>dl:last").prependTo(".cur").css("margin-top",-h)
		$(".cur>dl:first").stop().animate({"margin-top":0})		
	});
})