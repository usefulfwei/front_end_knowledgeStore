/**
 * Created by jwdn on 2016/11/28.
 */
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});

console.log("程序执行结束!");

/*执行顺序改变
* 先打印程序执行结束*/