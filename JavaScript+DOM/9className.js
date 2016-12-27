/**
 * Created by jwdn on 2016/11/1.
 */
function styleHeaderSiblings(){
    if(!document.getElementsByTagName) return false;
    var headers = document.getElementsByTagName("h1");
    for(var i=0;i<headers.length;i++){
        var elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = "bold";
        elem.style.fontSize = "1.2em";
        addClass(elem,"intro");
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
