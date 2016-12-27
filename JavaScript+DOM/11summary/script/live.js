/**
 * Created by jwdn on 2016/11/3.
 */
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var odd  = false;
        var rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd  == true)
            {
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }
}
function highlightRows(){
    if(!document.getElementsByTagName) return false;
    var rows = document.getElementsByTagName("tr");
    for(var i=0;i<rows.length;i++){
        rows[i].oldClassName = rows[i].className;
        rows[i].onmousemove = function(){
            addClass(this,"highlight");
        }
        rows[i].onmouseout = function(){
            rows[i].className = rows[i].oldClassName;
        }
    }
}
function displayAbbreviations(){
    // if(!document.getElementsByTagName) return false;
    // if(!document.createElement) return false;
    // if(!document.createTextNode) return false;
    if(!document.createTextNode || !document.createElement||
     document.getElementsByTagName) return false;
    var abb = document.getElementsByTagName("abbr");
    var defs = [];
    for(var i=0;i<abb.length;i++){
        var current_abbr = abbr[i];
        if(current_abbr.childNodes.length<1) continue;
            //为空
        var definition = current_abbr.getAttribute("title");
        var key = current_abbr.lastChild.nodeValue;
        defs[key] = definition;
    }
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
    if(dlist.childNodes.length<1) return false;
    var header = document.createElement("h3");
    var header_text = document.createElement("Abbreviations");
    header.appendChild(header_text);
    var container  = document.getElementById("content");
    container.appendChild(header);
    container.appendChild(dlist);
}
addLoadEvent(stripeTables);
addLoadEvent(highlightRows);
addLoadEvent(displayAbbreviations);