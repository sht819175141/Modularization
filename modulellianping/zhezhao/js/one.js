define(function(require,exports,module){
    require("jquery");
    function menu(){
        $.fn.alen=function(opt) {
            return $(this).each(function(){
                $(this).click(function(){
                    alert("1111")
                    var zhao=$("<div id='zhe'></div>");
                    var str=$("<div id='menu'>
                            <p>是否确认删除？</p>
                            <a href='javascript:;' id='ok'>确认</a>
                            <a href='javascript:;' id='cancel'>取消</a>
                            </div>");
                    $("body").append(zhao);
                    $(zhao).append(str);

                    var that=$(this);
                    $("#menu").show();
                    $("#ok").click(function(){
                        that.remove();
                        $("#menu").hide();
                    });
               
                    $("#cancel").click(function () {
                        $("#menu").hide();
                    })
                })
            })
        } 

        exports.menu=menu;
})