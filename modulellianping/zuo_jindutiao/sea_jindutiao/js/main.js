define(function(require,exports,module){
  require("../jq/jquery-2.1.1.js");
  function auto(){
    $.fn.auto=function(opt){
      var obj={
        "scale":0.5
      };
      set=$.extend({},obj,opt);
      return $(this).each(function(){
          var w=$(this).width(),
              index=$(this).index();
          var str=$("<div class='prog'><div class='in'></div></div>");
          $(this).append(str);  

          $(".in").eq(index).width(w*set.scale);
          $(".in").eq(index).text(set.scale*100+'%');
      })
    }
  }
  exports.auto=auto
})