/**
 * Created by jwdn on 2016/11/2.
 */
function showSection(id){
    var divs = document.getElementsByTagName("div");
    for(var i=0;i<divs.length;i++){
        if(divs[i].className.indexOf("section") == -1) continue;
        //限定有section类名的div
        if(divs[i].getAttribute("id")!= id){
            divs[i].style.display = "none";
        }else{
            divs[i].style.display = "block";
        }
    }
}
function prepareInternalnav(){
    if(!document.getElementsByTagName) return false;
    if(!document.getElementById) return false;
    if(!document.getElementById("internalnav")) return false;
    var nav = document.getElementById("internalnav");
    var links = nav.getElementsByTagName("a");
    for(var i=0;i<links.length;i++){
        var sectionID = links[i].getAttribute("href").split("#")[1];
        //以#为界限分为两个字符串，下标为1代表第二个字符串
        if(!document.getElementById(sectionID)) continue;
        document.getAnonymousElementByAttribute(sectionID).style.display = "none";
        //首先隐藏所有
        links[i].destination = sectionID;
        //通过自定义的destination属性来传递sectionID值
        links[i].onclick = function(){
            showSection(this.description);
            return false;
            //取消a标签跳转的默认属性
        }
    }
}
addLoadEvent(prepareInternalnav);