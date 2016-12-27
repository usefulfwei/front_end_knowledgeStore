/**
 * Created by jwdn on 2016/11/6.
 */
//这是一个抽象工厂模式
var XMLHttpFactory = function(){

}
XMLHttpFactory.prototype = {
    createFactory:function(){
        throw new Error('this is an abstract class')
    }
    //它不能被实例化，只能用来派生子类
}
//派生一个子类
var XHRHandler = function(){
    XMLHttpFactory.call(this);
    //内部this指针发生变化，由父类指向子类
};
XHRHandler.prototype = new XMLHttpFactory();//继承原有类
XHRHandler.prototype.constructor = XHRHandler;//名称指向自己
XHRHandler.prototype.createFactory = function(){
    var XMLHttp = null;
    if(window.XMLHttpRequest){
        XMLHttp = new XMLHttpRequest()
    }
    else if(window.ActiveXObject){
        XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    return XMLHttp;
}
//自己定义怎么工作