// your code goes here
function filter(arr,func){
	var result = [];
	
	for(element in arr){
		if(func(arr[element])){
			result.push(arr[element]);
		}
	}
	
	return result;
	
}

function inBetween(a,b)
{
	var start = a;
	var end = b;
	return function(param){
		return (param>start)&&(param<end);
	}
}

function inArray(arr)
{
	var array = arr;
	return function(param){
		for(var element in array){
			if(param == array[element]){
				return true;
			}
		}
		return false;
	}
}

function sumOf(array)
{
	var result = 0;
	for(element in array){
		result+=array[element];
	}
	return result;
	
}
//alert(inBetween(5,9)(10));
//alert(inArray([1,2,3,4])(4));
//alert(inArray([1,2,3,4])(5));
//alert(sumOf([1,2,3,10,-5]));
//alert(filter([1,2,3,4,5,6,7,8,9], inBetween(5,9)));