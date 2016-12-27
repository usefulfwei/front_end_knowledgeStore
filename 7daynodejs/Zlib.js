var http = require('http');

http.createServer(function(request,response){
	var i=1024;
	data='';

	while(i--){
		data+='.';
	}
	if((request.header['accept-encoding']||'').indexOf('gzip')!= -1)
	//判断了客户端是否支持gzip
	{
		zlib.gzip(data,function(err,data){
			//200(请求成功），404（未找到）
			response.writeHead(200,{
				'Content-Type':'text/plain',
				'Content-Encoding':'gzip'
			});
			response.end(data);
		});
	}else{
		response.writeHead(200,{
			'Content-Type':'text/plain'
		});
		response.end(data);
	}
}).listen(80);