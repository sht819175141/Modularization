define(["femate"],function(femate){
	//原型：构造函数，原型对象
	var Counter=function(opt){
		var _default={
			container:null,
			startTime:new Date(),//起始时间
			endTime:"",
			callback:null
		}
		//扩展参数opt扩展_default
		for(var k in opt){
			_default[k]=opt[k]
		}
		this.settings=_default;//扩展之后的参数作为属性
		//调用方法
		this.init();
	}
	//原型里放方法
	Counter.prototype={
		init:function(){
			//时差=截止时间-起始时间
			var that=this,//this指向，在定时器里this指window
				eTime=this.settings.pageTime || this.settings.endTime;
				//检测结束时间是否合法语法，数值2016-10-13,2016/10/15,2016/5-6
			var reg=/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})( \d{1,2}:\d{1,2}:\d{1,2})?$/;
			var result=reg.exec(eTime);
			//判断日期格式是否正确如果不正确弹出提示框
			if(!result){
				alert("请输入正确格式的日期");
				return;
			}
			//格式正确了，判断数值是否正确
			var y=result[1],
				m=result[3],
				d=result[4],
				newDate=new Date(y,m-1,d);
			if(newDate.getFullYear()!=y || newDate.getMonth()!=m-1 || newDate.getDate()!=d){
				alert("请输入正确数值的日期范围");
				return false;
			}
			eTime=new Date(this.settings.pageTime || this.settings.endTime);
			var	cTime=parseInt((eTime*1-this.settings.startTime*1)/1000);//时差
			if(cTime>0){//有剩余时间
				clearInterval(this.timer);
				this.timer=setInterval(function(){
					cTime--;
					if(cTime<0){//活动已经结束
						clearInterval(that.timer)//清除定时器
						that.settings.callback && that.settings.callback();
					}else{
						var timeTxt=femate(cTime)
						that.settings.container.innerHTML=timeTxt;
					}
					
				},1000)
				
			}else{//没有剩余时间
				//判断执行回调函数
				this.settings.callback && this.settings.callback();
			}
		}
	}
	return Counter;
})