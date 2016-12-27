/**
 * Created by jwdn on 2016/10/24.
 */
function prepareGallery(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementsById) return false;
    //语句是否被浏览器支持
    if(!document.getElementsById("imagegallery")) return false;
    //id为imagegallery的元素是否存在
    var gallery = document.getElementsById("imagegallery");
    var links = gallery.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        links[i].onclick = function () {
            return showPic(this);
        }
    }
}

function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
        //若没有被绑定则绑定参数函数
    }
    else{
        window.onload = function(){
            oldonload();
            func();
            //按照次序执行已经绑定了的和要求绑定的函数。
        }
    }
}
//showPic()函数没有成功，返回true，若完成了任务切换图片则返回false
function showPic(whichpic){
    if(!document.getElementById("placeholder")) return true;
    var source = whichpic.getAttribute("href");
    var placeholder = document.getElementById("placeholder");
    if(placeholder.nodeName != "IMG") return true;//nodeName返回的值全部为大写字母
    placeholder.setAttribute("src",source);
    if(!document.getElementById("description")) return false;

    var text = whichPic.getAttribute("title")? whichpic.getAttribute("title"): "";
    // if(whichPic.getAttribute("title")){
    //     var text = whichPic.getAttribute("title");
    // }else{
    //     var text = "";
    // }
    // var text = whichpic.getAttribute("title");
    var description = document.getElementById("description");
    if(description.firstChild.nodeType == 3) //文本节点类型 为3
    {
        description.firstChild.nodeValue = text;
    }
    return false
}