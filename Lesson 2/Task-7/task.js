// your code goes here.

var elem = document.querySelector('h1');

function fn(event) {
	console.log(event);
};

elem.addEventListener('click', fn);