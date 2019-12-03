require(["js"],function(js){
	var one=document.getElementById("one"),
		two=document.getElementById("two"),
		timer1=one.getElementsByTagName("span")[0].innerHTML,
		timer2=two.getElementsByTagName("span")[0].innerHTML,
		htext=one.getElementsByTagName("h2")[0],
		ttext=two.getElementsByTagName("h3")[0]
	var js1=new js({
		content:htext,
		pagetime:timer1,
		callback:function(){
			this.content.innerHTML="活动已经结束了";
		}
	})

	var js2=new js({
		content:ttext,
		endtime:timer2,
		callback:function(){
			this.content.innerHTML="活动已经结束了";
		}
	})
})