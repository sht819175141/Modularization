;(function(){
    $.fn.auto=function(opt){
        var obj={
            name:$(".wrap"),
            val:0,
            color:"blue"
        };
       
        var set=$.extend({},obj,opt);
        var num=set.name;
        var str="";
        var bwid=num.width();

        str="<div class='four'></div>";

        $(str).appendTo(num);

        num.find(".four").width(bwid*set.val);
        num.find(".four").css("background",set.color);

    };
})(jQuery);