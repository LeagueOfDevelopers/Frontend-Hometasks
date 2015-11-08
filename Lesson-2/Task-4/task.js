var slice = Function.prototype.call.bind(Array.prototype.slice);

var nums = [1,2,3,4,5];

// Ваша slice функция должна действовать также, как обычная 
// за исключением того, что вы в свою функцию передаете первым аргументом массив.

console.log(slice(nums, 0, 2)); // [1, 2]
console.log(slice(nums, 1, 2)); // [2]

