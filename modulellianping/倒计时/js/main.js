define(function(require,exports,module){
	//引用倒计时插件
	var plug=require("count_down.js");
	var product=document.getElementById("product"),
		dl=product.getElementsByTagName("dl"),
		tit=product.getElementsByTagName("h2");
	var pro1=new plug.CountDown({
		pageTime:document.getElementById("end").innerHTML,
		box:tit[0],
		endCallback:function(){}
	});
	var pro2=new plug.CountDown({
		endTime:"2016/10/23  16:55:00",
		box:tit[1],
		endCallback:function(){
			dl[1].style.opacity=0.5;
			var mark=document.createElement("div");
			mark.className="mark";
			mark.innerHTML="X";
			dl[1].getElementsByTagName("dd")[0].appendChild(mark);
		}
	});
	
})