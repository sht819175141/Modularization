define(function(require,exports,module){
	require("../jq/jquery-2.1.1.js");
	require("../css/style.css");
	var base=require("base.js");
	$("#box").html("<span>"+base.mes.book+"</span>的作者是:<b>"+base.mes.author+"</b>出版于：<span>"+base.mes.data.toLocaleTimeString()+"</span>.出生于<span>"+base.mes.adres+"</span>");
})