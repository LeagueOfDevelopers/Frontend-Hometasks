// your code goes here

var arr = [1, 2, 3, 2.3, 4, 5, 6, 7, 10];

function filter(arr, func) {
	var newArr = [];
	arr.forEach(function(item) {
		if(func(item) == true) {
			newArr.push(item);
		}
	});
	return newArr;
};

function inBetween(a, b) {
	return function(item) {
		return ((a < item)&&(item < b));
	} 
}

function inArray(arr) {
	return function(item1) {
		var flag = false;
		arr.forEach(function(item2) {
			if(item1 == item2) {
				flag = true;
			}
		});
		return flag;
	}
}

function sumOf(arr) {
	var sum = 0;
	if(arr.lenght == 0){
		return "array is empty"
	} else {
		arr.forEach(function(item) {
			sum += item;
		})
		return sum;
	}
}
console.log(filter(arr, inBetween(3, 6)));
console.log(filter(arr, inArray([2, 4, 12, 6])));
console.log(sumOf(arr));