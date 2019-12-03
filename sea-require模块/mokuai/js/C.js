define(function(){
	return function c(move,max,min){
		if(move>max)move=max;
		if(move<min)move=min;
		return move;
	}
})