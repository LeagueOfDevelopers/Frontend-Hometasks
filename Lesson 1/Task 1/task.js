// your code goes here

var sum = function(a) {
	return function(b) {
		return a+b
	}
}

console.log(sum(4)(6));