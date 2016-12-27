/**
 * Created by jwdn on 2016/11/6.
 */
//构造函数模式
//用于创建特定类型的对象
//函数名
//js尽量多写单引号
//js里构造函数比较特殊的地方new
//而其他的语言PHP 有一个关键字 A class
//此时造门zaomen就是构造函数

//单例模式与构造模式的配合
var AA = {
    zaomen:function(huawen)
    {
        if(!(this instanceof zaomen)){
            return new zaomen();
        }
    var _huawen = "普通";
    if(huawen){
        _huawen = huawen;
    }
    this.suo = "普通";
    this.huawen = _huawen;
    this.create = function (){
        return "[锁头]" + this.suo + "[样式]" + this.huawen;
    }
    }
}
//与单例模式相结合

//instanceof父类的类型
// function zaomen(huawen){
//     if(!(this instanceof zaomen)){
//         return new zaomen();
//     }
//     var _huawen = "普通";
//     if(huawen){
//         _huawen = huawen;
//     }
//     this.suo = "普通";
//     this.hua = _huawen;
//     this.create = function(){
//         return "[锁头]"+this.suo +"[样式]" +this.huawen;
//     }
// }
// var xiaozhang = zaomen();
// //var xiaozhang = new zaomen();

// alert(xiaozhang.create());

    var xiaoli = new AA.zaomen('绚丽');
    alert(xiaoli.create());

