//在客户端模式下，发起一个HTTPS客户端请求与http模块几乎相同
var options = {
        hostname: 'www.example.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

var request = https.request(options, function (response) {});

request.end();