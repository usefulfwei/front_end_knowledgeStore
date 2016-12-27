var options = {
	port:80,
	host:'www.example.com'
};

//Socket客户端在建立连接后发送了一个HTTP GET请求
var client = net.connect(options,function(){
	client.write([
		    'GET / HTTP/1.1',
            'User-Agent: curl/7.26.0',
            'Host: www.baidu.com',
            'Accept: */*',
            '',
            ''
		].join('\n'));
	client.on('data',function()
//并通过data事件监听函数来获取服务器响应。
	{
		console.log(data.toString());
		client.end();
	})
})