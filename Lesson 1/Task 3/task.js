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

function byField(field) {
	var sortFunc = new Function("a, b", "return a." + field + " > b." + field + " ? 1 : -1")
	return sortFunc;
};

users.sort(byField('age'));

users.forEach(function(user) {
  console.log(user.name);
});
