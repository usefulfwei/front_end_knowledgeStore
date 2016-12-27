/**
 * Created by jwdn on 2016/10/24.
 */
/*
function中
var 局部变量
 没有var则被默认当成是全局变量
*/
// function square(num){
//     total = num*num;
//     return total;
// }
// var total = 50;
// var number = square(20);
// alert(total);
//total 为400 函数中的total在函数调用过程中更改了函数外的值


//正确的例子
function square(num){
    var total = num^2;
    return total;
}
var total = 50;
var number = square(20);
alert(total);