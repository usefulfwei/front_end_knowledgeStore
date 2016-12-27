var rs = fs.createReadStream(src);

rs.on('data',function(chunk){
	rs.pause();
	doSomething(chunk,function(){
		rs.resume();
	})
})
//代码给doSomething函数加上了回调，
//因此我们可以在处理数据前暂停数据读取，
//并在处理数据后继续读取数据。


rs.on('end',function(){
	cleanUp();
})