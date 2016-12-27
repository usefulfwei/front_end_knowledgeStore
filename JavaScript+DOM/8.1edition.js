/**
 * Created by jwdn on 2016/10/28.
 */
function displayAbbreviations(){
    var abbreviations = document.getElementsByTagName("abbr");
    if(abbreviations.length<1)//为空
    {
        return false;
    }
    // var defs = new Array();
    var defs = [];
    for(var i = 0;i<abbreviations.length;i++){
        var current_abbr = abbreviations[i];
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
    // for(var i=0;i<abbreviations.length;i++){
    //     var definition = abbreviations[i].getAttribute("title");
    //     var key = abbreviations[i].lastChild.nodeValue;
    //     /*
    //      在<abbr title="Document Object Model"><em>DOM</em></abbr>
    //         情况下
    //         var key = abbreviations[i].firstChild.nodeValue;
    //         错误，不稳妥
    //      */
    //     defs[key] = definition;
    // }
    // for(var i=0;i<abbreviations.length;i++){
    //     def[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute("title");
    // }
    var dlist = document.createElement("dl");
    for(key in defs){
        var definition = defs[key];
        var dtitle = document.createElement("dt");
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);
        var ddesc = document.createElement("dd");
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    var header = document.createElement("h2");
    var header_text = document.createTextNode("Abbreviation");
    header.appendChild(header_text);
    document.body.appendChild(header);
    document.body.appendChild(dlist);
//document.getElementsByTagName("body")[0]
}
window.onload = displayAbbreviations;
// window.onload = displayAbbreviations();加了括号反而不执行了
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