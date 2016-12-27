/**
 * Created by jwdn on 2016/10/22.
 */
var add = function(a,b){
    return a+b;
};
//方法调用模式
//当一个函数被保存为对象的一个属性时，称它为一个方法。

var myObject = {
    value : 0,
    increment:function(inc){
        this.value +=typeof inc === 'number'?inc:1;
    }
};
myObject.increment();
document.writeln(myObject.value); //1  参数缺失被替换为undefined

myObject.increment(2);
document.writeln(myObject.value); //3

//函数调用模式
//当一个函数并非一个对象的属性时，那它被当作一个函数来调用
var sum = add(3,4);
//this仍绑定到全局对象。
//定义一个变量that并给它赋值为this，那么内部函数就可以通过那个变量访问到this

myObject.double = function(){
    var that = this;

    var helper = function(){
        that.value = add(that.value,that.value);
    };
    helper();//以函数的形式调用helper
};

myObject.double();
document.writeln(myObject.getValue());

//构造器调用模式
//如果在一个函数前面带上new来调用，那么将创建一个隐藏连接到该函数的prototype
//成员的新对象，同时this会被绑定到那个新对象上

var Quo = function(string){
    this.status = string;
};

//get_status的公共方法
Que.prototype.get_status = function(){
    return this.status;
};

var myQuo = new Que("confused");
document.writeln(myQuo.get_status());


//Apply调用模式 推荐
//函数可以拥有方法。
//apply方法 构建一个参数数组并用其去调用函数。允许我们选择this的值。
//apply方法接收两个参数。第一个是将被绑定给this的值，第二个参数数组

var array = [3,4];
var sum = add.apply(null,array); //7

var statusObject = {
    status:'A-OK'
};

//statusObject并没有继承自Quo.prototype,但我们可以在statusObject上
//调用get_status方法，尽管statusObject并没有一个名为get_status方法

var status = Quo.prototype.get_status.apply(statusObject);//A-OK

//参数 函数被调用  arguments数组
//可以访问所有它被调用时传递给它的参数列表.
//包括那些没有被分配给函数声明时定义的形式参数的多余参数。
//这使得编写一个无需制定参数个数的函数成为可能。

var sum = function(){
    var i, sum=0;
    for(i=0;i<arguments.length;i++)
    {
        sum += arguments(i);
    }
    return sum;
};
document.writeln(sum(4,8,15,16,23,42));//108

//异常
var add = function(a,b){
    if(typeof a !== 'number'|| typeof b !== 'number'){
        throw {
            name:'TypeError',
            message:'add needs numbers'
        };
    }
    return a+b;
};
//throw中断函数的执行。抛出一个exception对象：包含name属性和message属性
var try_it = function(){
    try{
        add("seven");
        //可能出现问题的代码块
    }catch(e){
        document.writeln(e.name+":"+e.message);
    }
};

//给类型增加方法
//Object.prototype对函数，数组，字符串，数字，正则表达式和布尔值使用来添加方法

Function.prototype.method = function(name, func){
    this.prototype[name] = func;
    return this;
};
//确认该属性名没有的情况下再添加
Function.prototype.method = function(name,func){
    if(!this.prototype[name]){
        this.prototype[name] = func;
        return this;
    }
};


//提取数字的整数部分

Number.method('integer',function(){
   return Math[this<0 ? 'ceiling':'floor'](this);
});
//骚气

document.writeln((-10/3).integer());//-3

//移除字符串末端空白的方法
//这里使用了之前添加功能的method方法
String.method('trim',function () {
    return this.replace(/^\+|\s+$/g,'');
    //正则表达式
});
document.writeln('"'+"   neat   ".trim() + '"');


//递归

var hanoi = function(disc,src,aus,dst){
    if(disc>0){
        hanoi(disc-1,src,dst,aus);
        document.writeln("Move disc" + disc + 'from' + src +'to'+dst );
        hanoi(disc-1,aus,src,dst);
    }
};
hanoi(3,'src','aux','dst');
//该函数对于非法值不予理会，我们不必担心死循环。


//递归函数高效操作属性结构，例如DOM。每次递归调用时处理给定树的一小段。
/*
* 定义walk_the_DOM函数，从某个给定的节点开始，按照HTML源码重的顺序访问树的每个节点
* 它会调用一个函数，并以此传递每个节点给它。walk_the_DOM调用自身去处理每一个子节点*/

var walk_the_DOM = function walk(node,func){
    func(node);
    node = node.firstChild;
    while(node){
        walk(node,func);
        node = node.nextSibling;
    }
};

//getElementsByAttribute函数，参数为一个属性名称字符串和一个可选的匹配值

var getElementsByAttribute = function(att,value){
                                        //属性名称和可选的属性值
    var results = [];

    walk_the_DOM(document.body,function(node){
        var actual = node.nodeType === 1 && node.getAttribute(att);
                    //存在该节点且该节点有此属性并获取该属性的值
        if(typeof actual ==='string' &&
                //第一种情况为字符
            (actual === value || typeof  value !== 'string'))
            //  第二种情况不是字符情况下对比值是否相等
        {
            results.push(node);
            //相等的话把符合要求的节点推入results数组中
        }
    });
    return results;
};

//尾递归优化：一个函数返回自身递归调用的结果，调用的过程会被替换为一个循环
//可以显著提高速度

var factorial = function factorial(i,a){
    a = a||1;
    if(i<2){
        return a;
    }
    return factorial(i-1,a*i);
};
document.writeln(factorial(4));

//作用域：控制着变量与参数的可见性及生命周期
var foo = function(){
    var a = 3,b = 5;
    var bar = function(){
        var b = 7,c = 11;
        a += b+c;//a = 21 b=7 c=11
    };
    //a=3 b=5
    bar();
    //a=21  b=5
};
//不支持块级作用域。但是有函数作用域
//定义在函数中的参数和变量在函数外都是不可见的，而且在一个函数中的任何位置定义的变量
//在函数中的任何地方都可见
//在函数体的顶部声明函数中可能用到的所有变量

//闭包
var myObject = {
    value : 0,
    increment:function(inc){
        this.value +=typeof inc === 'number'?inc:1;
    }
};
//可见
//而利用函数作用域使其不可见
var myObject = function(){
    var value = 0;
    return{
        increment:function(inc){
            this.value +=typeof inc === 'number'?inc:1;
        },
        getValue:function(){
            return value;
        }
    }
}();
//注意这个括号，不是把一个函数赋值给myObject，而是把函数运行的结果，即return{}
//赋值给它

//eg2 Quo 私有属性
var Quo = function(string){
    this.status = string;
};
Que.prototype.get_status = function(){
    return this.status;
};
var myQuo = new Que("confused");
document.writeln(myQuo.get_status());

//目标：创建一个名为Que的构造函数
//构造出有get_status方法和status私有属性的一个对象
var quo = function(status){
    return{
        get_status:function(){
            return status;
        }
    };
};
//构造一个实例
var myQuo = quo("amazed");
//无需前面加new来使用
document.writeln(myQuo.get_status());

//闭包eg3
//定义一个函数，它设置一个DOM节点为黄色，然后让它渐变为白色
var fade = function(node){
    var level = 1;
    var step = function(){
        var hex = level.toString(16);
        //number.toString(radix) radix省略基数为10.功能为把数字转化为字符串
        node.style.backgroundColor = "#FFFF"+hex+hex;
        //字符串连接
        if(level<15){
            level += 1;
            setTimeout(step,100);
        }
    };
    setTimeout(step,100);
};
fade(document.body);


//内部函数能访问外部函数的实际变量而无需复制是很重要的。

var add_the_handlers = function (nodes){
    var i;
    for(i=0;i<nodes.length;i+=1){
        nodes[i].onclick = function (e) {
            alert(i);
        }
    }
};
//糟糕
//目标为点击一个节点时显示出该节点的序号
//但实际总是会显示节点的数目

//原因：它未能达到目的是因为事件处理器函数绑定了变量i，而不是在函数构造时的变量i
//的值

//好的例子
var add_the_handlers = function (nodes){
    var i;
    for(i=0;i<nodes.length;i+=1){
        nodes[i].onclick = function(i){
            return function(e){
                alert(e);
            };
            //这个事件处理器函数绑定的是传递进去的i的值
            //而不是定义在add_the_handlers函数里面i的值。
            //那个被返回的函数被赋值给onclick
        }
    }
};