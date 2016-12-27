/**
 * Created by jwdn on 2016/10/22.
 */

var empty_object = {};

var stooge = {
    first_name :"John",
    "first-name":"cristia",
    // -  必须加双引号 而 _  则不需要
    second_name :"Howard"
};

var flight = {
    airline:"Rennes",
    number:8,
    departure:{
        time:"today to the day after tomorrow"

    },
    arrival:{
        city:"paris",
        IATA:"LAX"
    }
    //嵌套
};

//检索

stooge[first_name];
flight.departure.IATA;

//试图检索一个并不存在的成员元素的值，将返回一个undefined值
stooge[middle_name]   //undefined
flight.status   //undefined
stooge["FIRST-NAME"]   //undefined   javascript大小写敏感

//利用 ||运算符来填充默认值
var middle = stooge[middle_name]||"(none)";
var status = flight.status || "unknown"

//检索一个undefined值会导致TypeError异常，可以通过 && 运算符来避免错误

flight.equipment  //undefined
flight.equipment.model //throw "TypeError"
flight.equipment && flight.equipment.model //undefined


//更新

stooge[first_name] = "Jeorme";

//若没有那个属性名，该属性名就被扩充到该对象中
stooge['middle-name'] = "lester";
stooge.nickname = 'niubi';
flight.equipment = {
    model:"boeing 777"
};
flight.status = "overdue";

//引用 对象通过引用来传递。它们永远不会被拷贝。

var x = stooge;
x.nickname = 'curly';
var nick = stooge.nickname;
//因为x和stooge指向同一个对象的引用，所以nick为'curly'

var a = {} , b = {}, c = {};
//a,b,c分别引用不同的空对象
var a = b = c = {};
//a,b,c引用同一个的空对象

//原型(继承)
if(typeof Object.beget !== 'function'){
    Object.beget = function(o){
        var F = function(){};
        F.prototype = o;
        return new F();
    }
}
//利用该beget方法，创建一个使用原对象作为其原型的新对象。

var another_stooge = Object.beget(stooge);

//原型连接在更新是不起作用，改变不会触及到该对象的原型
another_stooge = ['first-name'] = "harry";
another_stooge = ['middle-name'] = "harry";
another.stooge.nickname = 'moe';

//原型连接只有在检索值的时候才被用到，如果我们尝试去获取某个对象的某个属性值
//且该对象没有此属性名，javascript会试着从原型对象中获取属性值。//
//以此类推，直到最后重点Object。若不存在于原型链中，结果undefined

//若添加一个新的属性到原型中，该属性对于所有基于该属性创建的对象可见。

stooge.profession = 'actor';
another_stooge.profession //亦为actor

//反射，检查对象并确定对象有什么属性

typeof flight.airline //
typeof flight.arrival //
typeof flight.number // number
typeof flight.status // string

//重要的是原型链的任何属性也会产生一个值（不需要）

typeof flight.toString //function
typeof flight.constructor //function

//剔除这些不需要的属性。第一个函数检查并剔除函数值
//第二个 hasownproperty

flight.hasOwnProperty('number') //true
typeof flight.constructor // false

//枚举  for in eg来除去原型中的属性
var name;
for(name in another_stooge){
    if(typeof another_stooge[name] !== 'function'){
        document.writeln(name+':'+another_stooge[name]);
    }
}

//该例子存在的问题是属性名出现的顺序是不确定。若想确保属性以特定的
//顺序出现，一定完全避免使用 for in，而是创建一个数组

var i;
var properites = [
    'first-name',
    'first_name',
    'last-name',
    'profession'
];
for( i=0;i<properites.length;i++){
    document.writeln(properites[i]+":"+another_stooge[properites[i]]);
}

//删除 delete运算符可以用来删除对象的属性。不会触及原型链中的任何对象
//因此删除可能会让来自原型链中的属性浮现出来

// another_stooge.nickname moe
delete.another_stooge.nickname;
another_stooge.nickname;//curly原型当中的值

//减少全局变量污染
//全局变量限制了程序的灵活性
//最小化使用全局变量的一个方法是只创建唯一一个全局变量

var MYAPP = [];
MYAPP.stooge = {
    first_name :"John",
    second_name :"Howard"
};
MYAPP.flight = {
    airline:"Rennes",
    number:8,
    departure:{
        time:"today to the day after tomorrow"

    },
    arrival:{
        city:"paris",
        IATA:"LAX"
    }
    //嵌套
};
