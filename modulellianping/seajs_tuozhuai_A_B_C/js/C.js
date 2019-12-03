define(function(require,exports,module){
	function C(move,min,max){
		if(move<min) move=min;
		if(move>max) move=max
		return move;
	}
	exports.C=C;
})