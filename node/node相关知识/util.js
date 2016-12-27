/**
 * Created by jwdn on 2016/12/1.
 */
/*util 是一个Node.js 核心模块，提供常用函数的集合，
用于弥补核心JavaScript 的功能 过于精简的不足。
 */

//util.inherits(constructor, superConstructor)
// 是一个实现对象间原型继承 的函数。

/*JavaScript 的面向对象特性是基于原型的，
与常见的基于类的不同。JavaScript 没有 提供对象继承的语言级别特性，
而是通过原型复制来实现的。*/

var util = require('util');
function Base() {
  this.name = 'base';
  this.base = 1991;
  this.sayHello = function() {
    console.log('Hello ' + this.name);
  };
}
Base.prototype.showName = function() {
  console.log(this.name);
};
function Sub() {
  this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

/*我们定义了一个基础对象Base 和一个继承自Base 的Sub，
Base 有三个在构造函数 内定义的属性和一个原型中定义的函数，
通过util.inherits 实现继承。*/

/*Sub 仅仅继承了Base 在原型中定义的函数，
而构造函数内部创造的 base 属 性和 sayHello 函数都没有被 Sub 继承。
 同时，在原型中定义的属性不会被console.log 作 为对象的属性输出。*/

/*util.inspect(object,[showHidden],[depth],[colors])
是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。
它至少接受一个参数 object，即要转换的对象。*/

var util = require('util');
function Person() {
  this.name = 'byvoid';
  this.toString = function() {
    return this.name;
  };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));

//如果给定的参数 "object" 是一个数组返回true，否则返回false。
util.isArray([])
// true
util.isArray(new Array)
// true
util.isArray({})
// false

//如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。



util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})
// false

/*util.isDate(object)
 如果给定的参数 "object" 是一个日期返回true，否则返回false。*/

util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})
// false

/*util.isError(object)
 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。*/

util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({ name: 'Error', message: 'an error occurred' })
// false
