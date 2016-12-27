/**
 * Created by jwdn on 2016/10/24.
 */
function showPic(whichpic){
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
    var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    description.firstChild.nodeValue = text;
    // alert(description.nodeValue);//null p元素的nodeValue属性值为空
    // alert(description.childNodes[0].nodeValue)//获取p元素中文本的值
    // alert(description.firstChild.nodeValue);
}
function countBodyChildren() {
    var body_element = document.getElementsByTagName("body")[0];
    //bytagname返回一个承载元素的数组，在利用下标获取到具体的元素
    //因为只有一个body，故用下标0就能访问到
    alert(body_element.childNodes.length);
    //childNodes属性将返回一个数组，这个数组包含给定元素节点的全体子元素
    alert(body_element.nodeType);
}
window.onload = countBodyChildren;
/*
函数名就是指针，变量等于函数名，相当于增加了一个该函数的指针
而函数名+()相当于要求立即执行该函数
 function fun(){
 return 5
 }
 var a=fun
 var b=fun()
 a是fun函数，b是5

*/
function popUp(winURL){
    window.open(winURL,"popup","width=320,height=300");
                //url    name    features
}