/**
 * Created by jwdn on 2016/11/6.
 */
var XMLHttpFactory = function(){

};
XMLHttpFactory.createXMLHttp = function(){
    var XMLHttp = null;
    if(window.XMLHttpRequest){
        XMLHttp = new XMLHttpRequest();
    }
    else if(window.ActiveXObject){
        XMLHttp = new ActiveXObject("Microsoft.XMLHttp")
    }
    return XMLHttp;
};
var AjaxHander = function(){
    var XMLHttp = XMLHttpFactory.createXMLHttp();
}