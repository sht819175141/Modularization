define(["jquery"],function(){
	
	$.fn.play=function(opt){
		var obj={

		}
		var set=$.extend({},obj,opt);
		return $(this).each(function(){
			var opts=this.options;  //获取原来的option
			var seltext=opts[this.selectedIndex].text;
			var that=this; //声明this指向 
			$(this).hide();
		//--------------------开始模仿----------------------
			var wrap=$("<div class='du'></div>"),
				menu=$("<h2></h2>"),
				list=$("<ul></ul>");

			for(var i=0;i<opts.length;i++){
				var li=$("<li>"+opts[i].text+"</li>")
				li.appendTo(list);
			}
			wrap.append(menu,list);
			$(this).after(wrap);
		//-----------------显示默认选项的文字-----------------
			menu.text(seltext);
		//-----------------模仿下拉列表的动作-----------------
			menu.on("click",function(){
				list.toggle();
			})	
			list.on("click","li",function(){
				menu.text($(this).text());
				list.hide();
				$(that).trigger("change");
			})
		})
	}

	return $.fn.play;
})
