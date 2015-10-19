// your code goes here

function makeLine() {

  var students = [];
  
  function student(i) {
  		return function() {
  			console.log(i);
  	}
  };

  for(var i = 0; i < 10; i++) {
  	students.push(student(i));
  }

  return students;
}

var line = makeLine();

line[0](); 
line[5](); 