/**
 * Created by jwdn on 2016/11/2.
 * 需要和moveElement3.0一起使用
 */
function prepareSlideshow(){
    //make sure the browser understands the DOM methods
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    //make sure the elements exist
    if(!document.getElementById("linklist")) return false;
    // if(!document.getElementById("preview")) return false;

    //preview pic以及其div应该在JavaScript代码中生成
    var slideshow = document.createElement("div");
    slideshow.setAttribute("id","slideshow");
    var preview = document.createElement("img");
    preview.setAttribute("src","topics.jgp");
    preview.setAttribute("alt","building blocks of web design");
    preview.setAttribute("id","preview");

    slideshow.appendChild(preview);
    //get all the links in the list
    var list = document.getElementById("linklist");
    insertAfter(slideshow,list);
    var links = list.getElementsByTagName("a");
    //Attach the animation behavior to the mouseover event
    links[0].onmouseover = function(){
        moveElement("preview",-100,0,10);
    };
    links[1].onmouseover = function(){
        moveElement("preview",-200,0,10);
    };
    links[2].onmouseover = function(){
        moveElement("preview",-300,0,10);
    };
}
addLoadEvent(prepareSlideshow);