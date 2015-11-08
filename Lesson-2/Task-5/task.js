
var Spy = function(target, method) {
	var result = {
		count : 0,
		calledArgs : []
	};
	var oldMethod = target[method];
	target[method] = function() {
		oldMethod.apply(this, arguments);
		result.count++;
		result.calledArgs.push(arguments);

	}
	return result;
}




var spy = Spy(console, 'error'); // Spy(цель, название метода)

console.error('calling console.error');
console.error('calling console.error');
console.error('calling console.error');

console.log(spy.count);
console.log(spy.calledArgs);