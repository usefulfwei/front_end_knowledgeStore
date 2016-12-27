/**
 * Created by jwdn on 2016/11/1.
 */
window.onload = stripeTables;
addLoadEvent(highlightRows);
function stripeTables(){
    if(!document.getElementsByTagName) return false;
    var tables = document.getElementsByTagName("table");
    for(var i=0;i<tables.length;i++){
        var odd = false;
        //第一行为奇数
        var rows = tables[i].getElementsByTagName("tr");
        for(var j=0;j<rows.length;j++){
            if(odd == true){
                // rows[j].style.backgroundColor = "#ffc";
                addClass(rows[j],"odd");
                odd = false;
            }else{
                odd = true;
            }
        }
    }

}
function highlightRows(){
    if(!document.getElementsByTagName)return false;
    var rows = document.getElementsByTagName("tr");
    // var rows = document.getElementsByTagName("td");
    for(var i=0;i<rows.length;i++){
        rows[i].onmouseover = function(){
            this.style.fontWeight = "bold";
        };
        //鼠标移至上方加粗
        rows[i].onmouseout = function(){
            this.style.fontWeight = "normal";
        };
        //鼠标移开恢复正常
    }
}
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

