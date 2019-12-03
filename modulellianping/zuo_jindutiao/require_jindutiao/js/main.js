define(["jquery"],function(){
	$.fn.auto=function(opt){
      var obj={
          "scale":0.5
      };
       //扩展插件
      var set=$.extend({},obj,opt);
      return $(this).each(function(){
          var w=$(this).width();
          var index=$(this).index();
       		var str=$("<div class='prog'><div class='in'></div></div>");
       		$(this).append(str);	

          $(".in").eq(index).width(w*set.scale);
          $(".in").eq(index).text(set.scale*100+'%');
       })
    };
})