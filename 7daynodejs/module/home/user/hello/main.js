var counter1 = require('./util/counter.js');
var counter2 = require('./util/counter.js');

function myFunction(){
	console.log(counter1.count());
	console.log(counter2.count());
	console.log(counter2.count());
}
myFunction();
//这个正常运行，1 2 3