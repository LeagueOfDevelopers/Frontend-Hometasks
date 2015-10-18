function makeBuffer() {
    // your code goes here
   var string = "";

   function buffer(str){
   	if(str != undefined) {
   		 string += str;
   		 return buffer;
   	} else {
   		return string;
   	}
   }

   buffer.clear = function() {
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
console.log( buffer() ); // "Замыкания Использовать Нужно!"

buffer.clear();

console.log( buffer() ); // ""