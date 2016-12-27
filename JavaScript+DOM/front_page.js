/**
 * Created by jwdn on 2016/11/7.
 */
function float(){
    var jumbotron = document.getElementsByClassName("jumbotron");
    var imgs = jumbotron[0].getElementsByTagName('img');
    for(var i=0;i<imgs.length;i++){
        var current_src = imgs[i].getAttribute('src');
        var current_alt = imgs[i].getAttribute('alt');
        var float_src ='img/'+current_alt+'_float.png';
        imgs[i].onmouseover = function(){
            this.setAttribute('src',float_src);
        };
        imgs[i].onmouseout = function(){
            this.setAttribute('src',current_src);
        };
    }
}
function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != 'function'){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}
window.onload = float();