define(function(){
	return function(Time){
		var day=parseInt(Time/86400),
			h=parseInt((Time-day*86400)/3600),
			m=parseInt((Time-day*86400-h*3600)/60),
			s=parseInt((Time-day*86400-h*3600)%60);
		return day+"天"+h+"小时"+m+"分"+s+"秒"
	}
})