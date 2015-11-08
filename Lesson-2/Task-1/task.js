function duckCount() {
	return Array.prototype.slice.call(arguments).filter(function(object) {
		return object && typeof object === "object" && Object.hasOwnProperty(object, 'quack');
	}).lenght;
};

var notDuck = Object.create({quack: true})
var duck = {quack: true}
var ducksArr = [{ quack: true }];
console.log(duckCount(duck, notDuck, ducksArr));