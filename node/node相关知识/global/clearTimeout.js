/**
 * Created by jwdn on 2016/11/30.
 */
function printHello() {
  console.log("hello world");
}
// 两秒后执行以上函数
var t = setTimeout(printHello,2000);

//清除定时器
clearTimeout(t);

/*clearTimeout( t ) 全局函数用于停止一个之前通过
 setTimeout() 创建的定时器。
 参数 t 是通过 setTimeout() 函数创建的定时器。*/

//该函数并没有执行