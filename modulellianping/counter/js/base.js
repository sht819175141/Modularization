//入口文件
require(["counter"],function(Counter){
	var pro1=document.getElementById("pro1"),
		pro2=document.getElementById("pro2"),
		pageTime=pro1.getElementsByTagName("span")[0].innerHTML,
		conA=pro1.getElementsByTagName("h2")[0],
		conB=pro2.getElementsByTagName("p")[0];
	var counter1=new Counter({
		container:conA,
		pageTime:pageTime,
		callback:function(){
			this.container.innerHTML="活动已结束";
		}
	})
	var counter2=new Counter({
		container:conB,
		endTime:"2016-10-30",
		callback:function(){
			this.container.innerHTML="活动已结束";
			pro2.getElementsByTagName("img")[0].style.opacity=".5";
		}
	})
})