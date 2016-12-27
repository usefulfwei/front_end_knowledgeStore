/**
 * Created by jwdn on 2016/11/4.
 */
// import export

// ES6模块的设计思想，是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。

//before
// 假设我们有两个js文件: index.js和content.js,
// 现在我们想要在index.js中使用content.js返回的结果，我们要怎么做呢？

// 首先定义：

//content.js
define('content.js', function(){
    return 'A cat';
})

// 然后require：

//index.js
require(['./content.js'], function(animal){
    console.log(animal);   //A cat
})

// 那CommonJS是怎么写的呢？

//index.js
var animal = require('./content.js')

//content.js
module.exports = 'A cat'

// ES6的写法
//index.js
import animal from './content'
//content.js
export default 'A cat'



// ES6 module的其他高级用法
//content.js
export default 'A cat'
export function say(){
    return 'Hello!'
}
export const type = 'dog'
// 上面可以看出，export命令除了输出变量，
// 还可以输出函数，
// 甚至是类（react的模块基本都是输出类）

//index.js
import { say, type } from './content'
let says = say()
console.log(`The ${type} says ${says}`)  //The dog says Hello
// 这里输入的时候要注意：大括号里面的变量名，
// 必须与被导入模块（content.js）对外接口的名称相同

// 如果还希望输入content.js中输出的默认值(default), 可以写在大括号外面。
//index.js
import animal, { say, type } from './content'
//写在大括号外面
let says = say();
console.log(`The ${type} says ${says} to ${animal}`);
//The dog says Hello to A cat

// 修改变量名
// 此时我们不喜欢type这个变量名，因为它有可能重名，
// 所以我们需要修改一下它的变量名。
// 在es6中可以用as实现一键换名。
//index.js
import animal, { say, type as animalType } from './content'
let says = say()
console.log(`The ${animalType} says ${says} to ${animal}`)
//The dog says Hello to A cat


// 模块的整体加载
// 除了指定加载某个输出值，还可以使用整体加载，
// 即用星号（*）指定一个对象，所有输出值都加载在这个对象上面。

//index.js

import animal, * as content from './content'
let says = content.say()
console.log(`The ${content.type} says ${says} to ${animal}`);
//The dog says Hello to A cat
// 通常星号*结合as一起使用比较合适。