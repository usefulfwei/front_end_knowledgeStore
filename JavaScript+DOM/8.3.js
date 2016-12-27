/**
 * Created by jwdn on 2016/10/29.
 */
function displayAccesskeys(){
    if(!document.getElementsByTagName || !document.createElement
        || !document.createTextNode)  return false;
    //get all  the links in the document
    var links = document.getElementsByTagName("a");
    if(links.length<1) return false;
    //create an array to store the access keys
    var akeys = [];
    for(var i=0;i<links.length;i++){
        var current_links = links[i];
        //if there is no accesskey attribute, continue the loop
        if(!current_links.getAttribute("accesskey")) continue;
        //get the value of the accesskey
        var key = current_links.getAttribute("accesskey");
        //get the value of the link text
        var text = current_links.lastChild.nodeValue;
        //add them to the array
        akeys[key] = text;
    }
    //create the list
    var list = document.createElement("ul");
    //loop through the access keys
    for (key in akeys){
        var text = akeys[key];
        //create the string to put in the list item
        var str = key + ":" +text;
        //create the list item
        var item = document.createElement("li");
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);
        item.style.listStyle = "none";
        //add the list item to the list
        list.appendChild(item);
    }
    //create a headline
    var header = document.createElement("h3");
    var header_txt = document.createTextNode(Accesskeys);
    header.appendChild(header_txt);
    //add the headline to the body
    document.body.appendChild(header);
    //add the list to the body
    document.body.appendChild(list);
}
addLoadEvent(displayAccesskeys);
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}