define(function(require,exports,module){
	function formate(Time){
		var t=parseInt(Time/86400),
			h=parseInt((Time-t*86400)/3600),
			m=parseInt((Time-t*86400-h*3600)/60),
			s=parseInt((Time-t*86400-h*3600)%60);
			return t+"天"+h+"小时"+m+"分"+s+"秒";
	}
	exports.formate=formate;
})