var http = require('http');

http.createServer(function(request,response) {
	resonse.writeHead(200,{"Content-Type":"text-/plain"});
	resonse.write("hello world");
	resonse.end();
}).listen(8888);