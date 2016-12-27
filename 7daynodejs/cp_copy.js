var child_process = require('child_process');
var util = require('util');

function copy(source,target,callback){
	child_process.exec(util.format('cp -r %s/* %s', source, target),callback);
	//一条cp -r source/* target命令就能搞定目录拷贝
}
copy('a','b',function(err){
	// ....
})