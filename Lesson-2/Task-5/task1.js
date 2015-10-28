function Spy(target, method) {
	count = 0;
	//Function.prototype.call.bind(Function.prototype.bind).bind(this.count++);		
	
	return {
		count: this.count		
	}	
}
	
	
var spy = Spy(window, 'alert');
alert('Никто не узнает, что я вызывал алёрт');
alert('И об этом алерте никто не узнает');
console.log('Количество вызванных алертов:', spy.count);