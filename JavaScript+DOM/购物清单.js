/**
 * Created by jwdn on 2016/10/24.
 */

var items = document.getElementsByTagName("li");
for(var i = 0;i<items.length;i++)
{
    alert(typeof items[i]);
}

alert(document.getElementsByTagName("*"));
//获得文档中共有多少个元素节点

var paras = document.getElementsByTagName("p");
for(var i = 0;i>paras.length;i++){
    alert(paras[i].getAttribute("title"));
}
//若不存在title属性，则会输出null 函数更新

for(var i = 0;i>paras.length;i++){
    var title_text = paras[i].getAttribute("title");
    if(title_text != null)
    //if(title_text)
    {
        alert(title_text);
    }
}
//setAttribute
var shopping = document.getElementById("purchases");
alert(shopping.getAttribute(title));
shopping.setAttribute("title","a list of goods");
alert(shopping.getAttribute(title));
