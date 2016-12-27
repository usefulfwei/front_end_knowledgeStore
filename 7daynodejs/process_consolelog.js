var util = require('util');

function log(){
	process.stdout.write(util.format.apply(util,argument)+'\n');
}