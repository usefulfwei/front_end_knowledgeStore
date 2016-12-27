/**
 * Created by jwdn on 2016/12/1.
 */
//express_demo.js 文件
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
})

app.get('/CR7', function (req, res) {
  res.send('Hello CR7');
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})