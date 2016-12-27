/**
 * Created by jwdn on 2016/10/26.
 */
function insertParagraph(text){
    var str = "<p>";
    str += text;
    str += "</p>";
    document.write(str);
}
window.onload = function(){
    var testdiv = document.getElementById("testdiv");
    alert(testdiv.innerHTML);
};

window.onload = function(){
    var testdiv2 = document.getElementById("testdiv2");
    testdiv2.innerHTML = "<p>This is <em>my</em> content</p>";
};
window.onload = function(){
    var testdiv2 = document.getElementById("testdiv2");
    var para = document.createElement("p");
    var info = "nodeName: ";
    info += para.nodeName;
    info += " nodeType: ";
    info += para.nodeType;
    alert(info);
    testdiv2.appendChild(para);
}
window.onload = function(){
    var para = document.createElement("p");
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);
}
window.onload = function(){
    var para = document.createElement("p");
    var txt = document.createTextNode("Hello World");
    para.appendChild(txt);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
};

//big example
window.onload = function(){
    var para = document.createElement("p");
    var txt1 = document.createTextNode("This is ");
    para.appendChild(txt1);
    var emphasis = document.createElement("em");
    var txt2 = document.createTextNode("my");
    emphsis.appendChild(txt2);
    para.appendChild(emphasis);
    var txt3 = document.createTextNode("  content.");
    para.appendChild(txt3);
    var testdiv = document.getElementById("testdiv");
    testdiv.appendChild(para);
}