/**
 * Created by jwdn on 2016/10/27.
 */
var placeholder = document.createElement("img");
placeholder.setAttribute("id","placeholder");
placeholder.setAttribute("src",".....");
placeholder.setAttribute("alt","my image gallery");
var description = document.createElement("p");
description.setAttribute("id","description");
var desctext = document.createTextNode("choose an image");

description.appendChild(desctext);

document.getElementsByTagName("body")[0].appendChild(placeholder);
document.getElementsByTagName("body")[0].appendChild(description);
//有且仅有一个的body标签

// document.body.appendChild(placeholder);
// document.body.appendChild(description); //等效代码

// parentElement.insertBefore(newElement,targetElement);
var gallery = document.getElementById("imagegallery");
gallery.parentNode.insertBefore(placehold,gallery);

//编写insertAfter()函数
function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastChild == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
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
