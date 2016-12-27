/**
 * Created by jwdn on 2016/11/4.
 */
// Babel是一个广泛使用的ES6转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。

// https://babeljs.io/

// let, const, class, extends,
// super, arrow functions, template string,
// destructuring, default, rest arguments
// 这些是ES6最常用的几个语法

//let const 声明变量

//eg1

var name = 'zach';

while(true){
    var name = 'obama';
    console.log(name);//obama
    break
}
console.log(name);//obama

// 这是因为ES5只有全局作用域和函数作用域，没有块级作用域，
// 这带来很多不合理的场景。第一种场景就是你现在看到的内层变量覆盖外层变量

// let则实际上为JavaScript新增了块级作用域。用它所声明的变量，只在let命令所在的代码块内有效
let name1 = 'CR7';
while(true){
    let name1 = 'Messi';
    console.log(name1);
    break;
}
console.log(name1);//CR7


// 另外一个var带来的不合理场景就是用来计数的循环变量泄露为全局变量

    var a = [];
    for(var i=0;i<10;i++){
        a[i] = function(){
            console.log(i);//10
        }
    }
    a[2]();//10

// 上面代码中，变量i是var声明的，在全局范围内都有效。
// 所以每一次循环，新的i值都会覆盖旧值，导致最后输出的是最后一轮的i的值

var b = [];
for(let i = 0;i<10;i++) {
    b[i] = function () {
        console.log(i);
    }
}
    b[8]();//8

//let避免了这个问题

//eg problem i不在函数中为全局变量自动刷新，点击哪一个都输出5
// var clickBoxs = document.querySelectorAll('.clickBox');
// for (var i = 0; i < clickBoxs.length; i++){
//     clickBoxs[i].onclick = function(){
//         console.log(i)
//     }
// }
//闭包解决方案，使用函数作用域
function iteratorFactory(i){
    var onclick = function(e){
        console.log(i)
        //此i在函数作用域中，函数外无效
    };
    return onclick;
}
var clickBoxs = document.querySelectorAll('.clickBox');
for (var i = 0; i < clickBoxs.length; i++){
    clickBoxs[i].onclick = iteratorFactory(i)
}


//const也用来声明变量，但是声明的是常量。一旦声明，常量的值就不能改变。
const PI = Math.PI

// PI = 23 //Module build failed: SyntaxError: /es6/app.js: "PI" is read-only

// 当我们尝试去改变用const声明的常量时，浏览器就会报错。
// const有一个很好的应用场景，就是当我们引用第三方库的时声明的变量，
// 用const来声明可以避免未来不小心重命名而导致出现bug：

// const monent = require('moment');

//class, extends, super
// 原型、继承，构造函数
window.onload = function() {
    class Animal {
        constructor()
        //constructor方法，这就是构造方法
        {
            this.type = 'animal';
            //this关键字则代表实例对象
        }

        says(say) {
            console.log(this.type + ' says ' + say)
        }
    }
// constructor内定义的方法和属性是实例对象自己的，
// 而constructor外定义的方法和属性则是所有实例对象可以共享的。

    let animal = new Animal();
    animal.says('hello'); //animal says hello
    alert(animal.type);

    class Cat extends Animal
// Class之间可以通过extends关键字实现继承，
// 定义了一个Cat类，该类通过extends关键字，
// 继承了Animal类的所有属性和方法
    {
        constructor() {
            super();
            this.type = 'cat'
        }
    }
// super关键字，它指代父类的实例（即父类的this对象）。
// 子类必须在constructor方法中调用super方法，否则新建实例时会报错。
// 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。
// 如果不调用super方法，子类就得不到this对象。

// ES6的继承机制，实质是先创造父类的实例对象this（所以必须先调用super方法），
// 然后再用子类的构造函数修改this。
    let cat = new Cat();
    cat.says('hello'); //cat says hello
    class Dog extends Animal{
        eat(){
            alert('eat meat');
    }
    }
    let dog = new Dog();
    console.log(dog.type)
    alert(dog.type);
};

// arrow function
//eg1
function(i){ return i + 1; } //ES5
(i) => i + 1 //ES6

// 如果方程比较复杂，则需要用{}把代码包起来：

function(x, y) {
    x++;
    y--;
    return x + y;
}
(x, y) => {x++; y--; return x+y}


//更简单的使用this对象
class Animal {
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout(function(){
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
// 上面的代码会报错 这是因为setTimeout中的this指向的是全局对象。


//solution1  第一种是将this传给self,再用self来指代this
    says(say){
        var self = this;
        setTimeout(function(){
            console.log(self.type + ' says ' + say)
        }, 1000)

//solution2    2.第二种方法是用bind(this)
        says(say)
        {
            setTimeout(function () {
                console.log(this.type + ' says ' + say)
            }.bind(this), 1000)
        }

}
var animal = new Animal()
animal.says('hi')  //undefined says hi

//新特性，箭头函数的解决方法
class Animal{
    constructor(){
        this.type = 'animal'
    }
    says(say){
        setTimeout( () =>
        //     使用箭头函数时，函数体内的this对象，
        // 就是定义时所在的对象，而不是使用时所在的对象
        //     箭头函数根本没有自己的this，它的this是继承外面的，
        // 因此内部的this就是外层代码块的this
        {
            console.log(this.type + ' says ' + say)
        }, 1000)
    }
}
var animal = new Animal()
animal.says('hi')  //animal says hi


// template string

$("#result").append(
    "There are <b>" + basket.count + "</b> " +
    "items in your basket, " +
    "<em>" + basket.onSale +
    "</em> are on sale!"
);

$("#result").append(`
  There are <b>${basket.count}</b> items
   in your basket, <em>${basket.onSale}</em>
  are on sale!
`);
// 用反引号（\）来标识起始，用${}`来引用变量，
// 而且所有的空格和缩进都会被保留在输出之中


// destructuring
// ES6允许按照一定模式，从数组和对象中提取值，
// 对变量进行赋值，这被称为解构（Destructuring）。
let cat = 'ken'
let dog = 'lili'
let zoo = {cat: cat, dog: dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

// 用ES6完全可以像下面这么写：

let cat = 'ken'
let dog = 'lili'
let zoo = {cat, dog}
console.log(zoo)  //Object {cat: "ken", dog: "lili"}

// 反过来可以这么写：

let dog = {type: 'animal', many: 2}
let { type, many} = dog
console.log(type, many)   //animal 2

// default很简单，意思就是默认值

function animal(type){
    type = type || 'cat';//传统方式给定默认值
    console.log(type)
}
// 如果用ES6我们而已直接这么写：

function animal(type = 'cat'){
    console.log(type)
}
animal()

// rest
function animals(...types){
    console.log(types)
}
animals('cat', 'dog', 'fish') //["cat", "dog", "fish"]

// 而如果不用ES6的话，我们则得使用ES5的arguments。