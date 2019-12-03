define(function(require,exports,module){
	$.fn.rili=function(opt){
		var set=$.extend({"y":"#year","m":"#mon"},opt);
		return $(this).each(function(){
			var dat=new Date(),
				y=dat.getFullYear(),
				m=dat.getMonth(),
				d=dat.getDate(),
				mon=[31,28,31,30,31,30,31,31,30,31,30,31],
				week=[6,0,1,2,3,4,5],
				that=$(this),
				year=$(set.y),
				month=$(set.m),
				str="";
			for(var i=0;i<42;i++){
				str+="<span></span>"
			}
			$(this).append($(str))
			//当年份的下拉菜单改变是下面日期也跟着改变
			year.on("change",function(){
				y=$(this).val()
				getday()
			})
			//当月份的下拉菜单改变是下面日期也跟着改变
			month.on("change",function(){
				m=$(this).val()-1
				getday()
			})
			//把当前对应的日期放到span里
			function getday(){
				that.children('span').text("").removeClass()
				var curDay=mon[m];
				var w=new Date(y,m);
				var we=w.getDay();
				var wee=week[we];
				if(m==1){
					if(!(y%4)){
						curDay=29;
					}
				}
				for(var i=1;i<=curDay;i++){
					if(i==d){
						that.children('span').eq(wee+i).text(i).addClass('on');
					}else{
						that.children('span').eq(wee+i).text(i);
					}
				}
			}
			function forMonth(){
				var str3="";
				for(var i=1;i<=12;i++){
					str3+="<option value='"+i+"'>"+i+"</option>"
				}
				month.html(str3);
			}
			function forYear(a,b){
				var str2="";
				for(var i=a;i<=b;i++){
					str2+="<option value='"+i+"'>"+i+"年</option>"
				}
				year.html(str2);
			}
			//当前的年月设为selectIndex
			function newTime(elem,n){
				$.each(elem,function(i,obj){
					if(obj.value==n){
						elem.parent()[0].selectedIndex=i;
					}
				})
			}
			getday()
			//下拉菜单月份从1-12
			forMonth()
			//下拉菜单年份从1990-2020
			forYear(1990,2020);
			//选择当前年份
			newTime(year.children("option"),y);
			//选中当前月份
			newTime(month.children("option"),m+1)
			that.children("span").on("click",function(){
				$(this).addClass("on").siblings().removeClass("on")
			})
			
		})
	}
	exports.rili=$.fn.rili
})