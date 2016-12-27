var http = require('http');

http.get('http://www.baidu.com',function(response){
	var body = [];

	console.log(response.statusCode);
	console.log(response.headers);

	response.on('data',function(chunk){
		body.push(chunk);
	});
	response.on('end',function(){
		body = Buffer.concat(body);
		console.log(body.toString());
	});
});
/*当客户端发送请求并接收到完整的服务端响应头时，就会调用回调函数。
在回调函数中，除了可以使用response对象访问响应头数据外，
还能把response对象当作一个只读数据流来访问响应体数据*/