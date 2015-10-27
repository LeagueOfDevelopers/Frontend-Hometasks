function duckCount() {
  // SOLUTION GOES HERE
  function definitelyNotALoop(array,i){	//У меня реально нет идей как нормально перебирать неизвестное количество значений без цикла.{
		if(i>0){
			if(!Object.prototype.hasOwnProperty.call(array[i-1],'quack')){
				array.splice(i-1,1);
			}
			return definitelyNotALoop(array, i-1);			
		} else {
			return array.length;
		}
	  
  }
  
  return definitelyNotALoop(Array.prototype.slice.call(arguments), Array.prototype.slice.call(arguments).length);
  
}

var notDuck = Object.create({quack: true})
var duck = {quack: true}
var ducksArr = [{ quack: true }];
alert(duckCount(duck, notDuck, ducksArr)); // 1
