/**
 * Created by jwdn on 2016/10/31.
 */
// window.onload = styleHeaderSiblings;
addLoadEvent(styleHeaderSiblings);
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h2");
    //无参函数
    if(headers.length<1) return false;
    for(var i=0;i<headers.length;i++){
        var elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "400";
        elem.style.fontSize = "2em";
        elem.style.color = "red";
    }
}
function getNextElement(node){
    if(node.nodeType == 1){
        return node;
    }
    if(node.nextSibling){
        return getNextElement(node.nextSibling);
    }
    return null;
    /*
    元素节点的nodeType属性值是1
    属性节点的nodeType属性值是2
    文本节点的nodeType属性值是3
    */
}
/*
* 寻找目标节点所有兄弟节点中的第一个元素节点
* nodeType == 1
* */
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func();
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
function styleElementSibling(tags,theclass){
    if(!document.getElementsByTagName) return false;
    var elems = document.getElementsByTagName(tags);
    for(var i=0;i<elems.length;i++){
        var elem = getNextElement(elems[i].nextSibling);
        addClass(elem,theclass);
    }
}
function addClass(element,value){
    if(!element.className){
        element.className = value;
    }else{
        newClassName = element.className;
        newClassName += " ";
        newClassName += value;
        element.className = newClassName;

    }
}
