/**
 * Created by jwdn on 2016/11/29.
 */
function say(word) {
  console.log(word);
}

function execute(someFunction, value) {
  someFunction(value);
}

execute(say, "Hello");

/*我们把 say 函数作为execute函数的第一个变量进行了传递。
这里返回的不是 say 的返回值，而是 say 本身！*/


//匿名函数
/*。但是我们不一定要绕这个"先定义，再传递"的圈子，
我们可以直接在另一个函数的括号中定义和传递这个函数*/
function execute2(someFunction, value) {
  someFunction(value);
}

execute2(function(word){ console.log(word) }, "Hello");

//////////////////////////////////
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);

//////////////////////////////////////
function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);