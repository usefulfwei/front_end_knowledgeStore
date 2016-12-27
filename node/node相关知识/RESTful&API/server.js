/**
 * Created by jwdn on 2016/12/3.
 */
/*
* 序号	 URI	       HTTP方法	      发送内容	     结果
 1	listUsers	          GET	         空	     显示所有用户列表
 2	addUser	           POST	        JSON 字符串	   添加新用户
 3	deleteUser	       DELETE	      JSON 字符串	   删除用户
 4	:id	               GET	        空	      显示用户详细信息*/
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/listUsers',function(req,res) {
  fs.readFile(__dirname+"/"+"user.json","utf8",function(err,data) {
    console.log( data );
    res.end(data);
  })
});
//////////////////////////////////////////////////////////
var user = {
  "user4":{
    "name":"mohit",
    "password":"password4",
    "profession":"teacher",
    "id":"4"
  }
};

app.get('/addUser',function(req,res) {
  fs.readFile(__dirname+"/"+"user.json","utf8",function(err,data) {
    data = JSON.parse(data);
    data["user4"] = user["user4"];
    console.log(data);
    res.end(JSON.stringify(data));
  })
});

/////////////////////////////////////////////////
app.get('/:id',function(req,res) {
  fs.readFile(__dirname+"/"+"user.json","utf8",function(err,data) {
    data = JSON.parse(data);
    var user = data["user"+req.params.id];
    console.log(user);
    res.end(JSON.stringify(user));
  })
})
//http://localhost:8081/3 这么访问
///////////////////////////////////////////////////////////
var id = 2;
app.get('/deleteUser',function(req,res) {
  fs.readFile(__dirname+'/'+"user.json",'utf8',function(err,data) {
    data = JSON.parse(data);
    delete data["user"+2];
    console.log(data);
    res.end(JSON.stringify(data))
  })
})

var server = app.listen(8081,function() {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})