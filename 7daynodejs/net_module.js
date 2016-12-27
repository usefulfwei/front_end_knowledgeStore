/*net模块可用于创建Socket服务器或Socket客户端*/
//使用Socket搭建一个很不严谨的HTTP服务器的例子
net.createServer(function(conn){
	conn.on('data',function(data){
		conn.write([
			 'HTTP/1.1 200 OK',
            'Content-Type: text/plain',
            'Content-Length: 11',
            '',
            'Hello World'
            ].join('\n'));
		//这个HTTP服务器不管收到啥请求，
		//都固定返回相同的响应。
	});
}).listen(80);