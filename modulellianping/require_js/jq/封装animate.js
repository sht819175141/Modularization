function animate(obj,json,fn){
	clearInterval(obj.time)
	var bool=true;
	obj.time=setInterval(function(){
		for(var i in json){
			var ciur='';
			if(i=='opacity'){
				ciur=Math.round(parseFloat(getStyle(obj,i))*100)
			}else{
				ciur=parseInt(getStyle(obj,i))
			}
			var speed=(json[i]-ciur)/8
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			if(ciur!=json[i]){
				bool=false;
			}
			if(i=='opacity'){
				obj.style[i]=(ciur+speed)/100;
			}else{
				obj.style[i]=ciur+speed+'px'
			}
			if(bool){
				clearInterval(obj.time)
				if(fn){
					fn()
				}
			}
		}
	},50)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr]
	}else{
		return getComputedStyle(obj,null)[attr]
	}
}