define(function(){
	return function(ctime){
		//时间转换
		var day=parseInt(ctime/86400),
			h=parseInt((ctime-day*86400)/3600),
			m=parseInt((ctime-day*86400-h*3600)/60),
			s=parseInt((ctime-day*86400-h*3600)%60);
		return day+"天"+h+"小时"+m+"分"+s+"秒"	
	}
})