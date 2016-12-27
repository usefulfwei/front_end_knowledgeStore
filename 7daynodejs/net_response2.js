var http = require('http');
http.createServer(function(request,response){
  response.writeHead(200,{'Content-Type':'text/plain'});
  request.on('data',function(chunk){
  	response.write(chunk);
  });
  request.on('end',function(){
  	response.end();
  })	
}).listen(80);
/*在回调函数中，除了可以使用response对象来写入响应头数据外，
还能把response对象当作一个只写数据流来写入响应体数据。
例如在以下例子中，服务端原样将客户端请求的请求体数据
返回给客户端。*/