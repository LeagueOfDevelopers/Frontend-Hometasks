// your code goes here

var users = [{
  name: "Вася",
  surname: 'Тестов',
  age: 20
}, {
  name: "Петя",
  surname: 'Чапаев',
  age: 25
}, {
  name: "Маша",
  surname: 'Медведева',
  age: 18
}];

function byField(input){
	var column = input;
	return function(a,b){
		return a[input] > b[input] ? 1:-1;
		
	}
}


users.sort(byField("age")); 

users.forEach(function(user) {
  alert( user.name );
});