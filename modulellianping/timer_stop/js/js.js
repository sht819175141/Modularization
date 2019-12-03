define(["format"],function(format){
	//原生插件=构造函数+原型
	var stop=function(opt){
		var obj={
			content:null,
			startTime:new Date(), //起始时间
			endTime:"",     	//截止时间
			callback:null   //活动结束后的动作
		}
		//扩展参数
		for(var k  in opt){
			obj[k]=opt[k];
		}
		//将扩展后的参数作为属性
		this.set=obj;

		this.init();
	}
	stop.prototype={
		init:function(){
			var that=this;
			etime=this.set.pagetime || this.set.endtime;

				//检测结束时间是否合法语法，数值2016-10-13,2016/10/15,2016/5-6
			var reg=/^(\d{4})(-|\/)(\d{1,2})\2(\d{1,2})( \d{1,2}:\d{1,2}:\d{1,2})?$/;
			var result=reg.exec(etime);
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
			etime=new Date(this.set.pagetime || this.set.endTime);
			var ctime=parseInt((etime*1-this.set.startTime*1)/1000); //时差，起始时间，截止时间
			//判断还有没有剩余时间
			if(ctime>0){ //有剩余时间
				this.timer=setInterval(function(){
					ctime--;
					if(ctime<=0){   //活动已经结束
						clearInterval(that.timer);
						if(that.set.callback) that.set.callbcak();
					}else{
						var timetxt=format(ctime);
						that.set.content.innerHTML=timetxt;
					}	
				},1000)
			}else{
				if(this.set.callback) this.set.callback();
			}
		} 
	}
	return stop;
})