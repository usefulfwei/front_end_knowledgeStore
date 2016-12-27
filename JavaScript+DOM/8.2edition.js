/**
 * Created by jwdn on 2016/10/28.
 */
function displayAbbreviations(){
    if(!document.getElementsByTagName || !document.createElement
        || !document.createTextNode) return false;
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1) return false;//浏览器无法读abbr标签
    var defs = new Array();
    for(var i=0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        if(current_abbr.childNodes.length<1) continue;
        //不能识别abbr标签的浏览器尽快离开该函数
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    //create the definition list
    var dlist = document.createElement("dl");
    //loop through the defitions
    for( key in defs){
        var definition = defs[key];
        //create the definition title
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if(dlist.childNodes.length<1) return false;
    //若abbr无法识别，那么defs数组以为空，应此dlist里面是没有子节点的，直接可以退出
    //create a headline
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviations");
    header.appendChild(header_text);
    //add the headline to the body
    document.body.appendChild(header);
    //add the definition list to the body
    document.body.appendChild(dlist);
}
function displayCitations(){
    var quotes = document.getElementsByTagName("blockquote");
    for(var i=0;i<quotes.length;i++){
        if(!quotes[i].getAttribute("cite")) continue;
        var url = quotes[i].getAttribute("cite");
        var quoteChildren = quotes[i].getElementsByTagName("*");
        //获取所有子元素,quoteChildren是一个数组，包含了所有的元素节点
        if(quoteChildren.length<1) continue;
        var elem = quoteChildren[quoteChildren.length-1];
        //数组下标从0开始，所以最后一个元素结点index为array.length-1
        var link = document.createElement("a");
        var link_text = document.createTextNode("source");
        link.appendChild(link_text);
        link.setAttribute("href",url);
        var superscript = document.createElement("sup");
        superscript.appendChild(link);
        elem.appendChild(superscript);
    }
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload !="function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
            //加括号表示调用，不加表示一个指向函数的指针
        }
    }
}
addLoadEvent(displayCitations);