/**
 * Created by jwdn on 2016/11/28.
 */
var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("程序执行结束!");

//打印顺序不变