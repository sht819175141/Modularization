define(function(require,exports,module){
	function C(obj,max){
		if(obj>max) obj=max;
		return obj;
	}
	exports.C=C;
})