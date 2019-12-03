define(function(require,exports,module){
	//引入格式化时间模块
	var formate=require("formate");
	//定义倒计时插件
	var CountDown=function(opt){
		//默认参数
		var obj={
			startTime:new Date(),//开始时间
			endTime:"",//截止时间
			endCallback:null //活动结束后的动作
		}
		//扩展参数
		for(var key in opt){
			obj[key]=opt[key];
		}
		this.settings=obj;//扩展后的参数作为属性
		//开始调用方法
		this.count();
	}
	CountDown.prototype={
		//计算倒计时
		count:function(){
			//倒计时=截止的时间-开始的时间
			var box=this.settings.box,
				sTime=this.settings.startTime, //开始时间 对象

			//如果页面中有截止时间就用它，没有才用参数中的截止时间
				eTime=new Date(this.settings.pageTime || this.settings.endTime),
				count=(eTime-sTime)/1000,
				timer=null;
				//判断是否还有剩余时间
				var that=this;
				if(count<=0){
					clearInterval(timer);
					that.settings.endCallback && that.settings.endCallback();
					box.innerHTML="活动已经结束"
				}else{

					timer=setInterval(function(){
						count--;
						if(count<=0){
							clearInterval(timer);
							//活动已经结束
							that.settings.endCallback && that.settings.endCallback();
							console.log(box)
							console.log(box.innerHTML)
							box.innerHTML="活动已经结束"

						}else{
							var str=formate.formate(count);
							box.innerHTML=str;	
						}
						//将倒计时转为天小时分秒显示出来
						
					},1000)
					
				}
		}
	}
	exports.CountDown=CountDown;
})