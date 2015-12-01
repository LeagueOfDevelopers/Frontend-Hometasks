function makeBuffer() {
    // your code goes here
	var string  = "";
	
	function buffer(value){
		if(value!=null){
			string+=value;
		} else {
			return string;
		}	
	};
	
	buffer.clear = function(){
		string = "";
	}
	
	return buffer;
}

var buffer = makeBuffer();

/* добавить значения к буферу */
buffer('Замыкания');
buffer(' Использовать');
buffer(' Нужно!');

/* получить текущее значение */
alert( buffer() ); // "Замыкания Использовать Нужно!"

buffer.clear();

alert( buffer() ); // ""