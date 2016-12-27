/*NodeJS程序的标准输入流（stdin）、一个标准输出流（stdout）、
一个标准错误流（stderr）分别对应process.stdin、process.stdout和
process.stderr，第一个是只读数据流，
后边两个是只写数据流，对它们的操作按照对数据流的操作方式即可。*/

var child_process = require('child_process');

var child = child_process.spawn('code',['xxx.js']);
/*使用了.spawn(exec, args, options)方法，该方法支持三个参数。
第一个参数是执行文件路径，可以是执行文件的相对或绝对路径，
也可以是根据PATH环境变量能找到的执行文件名。
第二个参数中，数组中的每个成员都按顺序对应一个命令行参数。
第三个参数可选，用于配置子进程的执行环境与行为。*/

child.stdout.on('data',function(data){
	console.log('stdout:'+data);
});
child.stderr.on('data',function(data){
	console.log('stderr:'+data);
});
child.on('close',function(code){
	console.log('child process exited with code:'+code);
});