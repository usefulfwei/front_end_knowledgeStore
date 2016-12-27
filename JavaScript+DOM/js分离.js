/**
 * Created by jwdn on 2016/10/24.
 */
window.onload = prepareLinks;
//当window对象触发onload事件时，document对象已经存在。
function prepareLinks(){
    var links = document.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        if(links[i].className == 'popup'){
            links[i].onclick = function(){
                popUp(this.getAttribute("href"));
                //通过className绑定元素，调用函数
                return false;
                //避免默认属性
            }
        }
    }
}
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=300");
    //url    name    features
}
//向后兼容性，确保浏览器理解当前的JavaScript语句
function myFunction(){
    if(document.getElementById){
        //statements using getElementById
    }
}
//if(!getElementById) return false; 如果不理解该语句，离开
//测试多个方法或者属性是否存在 ||
// if(!getElementById || !getElementsByTagName) {
//     return false;
// }
//向后兼容性实例
window.onload = function(){
    if(!document.getElementsByTagName) return false;
    var links = document.getElementsByTagName("a");
    for(var i = 0;i<links.length;i++){
        var text = links[i].getAttribute("class");
        var string = text.match("popup");
        // if(links[i].getAttribute("class") == 'popup')
                               //这里万一有多个类名怎么办
        if(string)
        //字符串匹配成功,string为一字符串，否组为null
        {
            links[i].onclick = function(){
                popUp(this.getAttribute("href"));
                return false;
            }
        }
    }
}
