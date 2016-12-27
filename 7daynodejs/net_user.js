var options = {
        hostname: 'www.example.com',
        port: 80,
        path: '/upload',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

var request = http.request(options, function (response) {});

request.write('Hello World');
request.end();
/*.request方法创建了一个客户端，并指定请求目标和请求头数据。
之后，就可以把request对象当作一个只写数据流来写入请求体数据和结束请求。*/