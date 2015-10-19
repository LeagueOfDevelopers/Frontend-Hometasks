// your code goes here

var sumOfTwo = function(a) {
	return function(b) {
		return a+b
	}
}

console.log(sumOfTwo(4)(6));

// Дополнение

 var sumOfAll = function(a) {
 	var sum = function(item) {
 		if(item != "=") {
 		a += item;
 		return sum;
 		} else {return a};
 	}
 	return sum;
 }

 console.log(sumOfAll(2)(4)(10)(29)(12)(14)('='));