var login=require('./login');
var $=require('jquery');//引用jquery模块

$("#welcome").html(login.sayName());
