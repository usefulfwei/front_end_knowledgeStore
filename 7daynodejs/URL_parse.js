/*传给.parse方法的不一定要是一个完整的URL，
例如在HTTP服务器回调函数中，
request.url不包含协议头和域名，
但同样可以用.parse方法解析。*/

var http = require('http');

http.createServer(function(request,response){
	//var tmp = request.url;
	var tmp = "/foo/bar?a=b";
	url.parse(tmp);
}).listen(8124);

//url.format url object -> url string

//url.resolve connect two url