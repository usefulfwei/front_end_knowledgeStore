var options = {
        key: fs.readFileSync('./ssl/default.key'),
        cert: fs.readFileSync('./ssl/default.cer')
    };

//多了一个options对象，
//通过key和cert字段指定了HTTPS服务器使用的私钥和公钥。

var server = https.createServer(options, function (request, response) {
        // ...
    });

server.addContext('foo.com', {
    key: fs.readFileSync('./ssl/foo.com.key'),
    cert: fs.readFileSync('./ssl/foo.com.cer')
});

server.addContext('bar.com', {
    key: fs.readFileSync('./ssl/bar.com.key'),
    cert: fs.readFileSync('./ssl/bar.com.cer')
});

/*NodeJS支持SNI技术，可以根据HTTPS客户端
请求使用的域名动态使用不同的证书，
因此同一个HTTPS服务器可以使用多个域名提供服务。
接着上例，可以使用以下方法为HTTPS服务器添加多组证书。*/