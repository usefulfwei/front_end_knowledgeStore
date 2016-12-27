/**
 * Created by jwdn on 2016/11/3.
 */
function focusLabels(){
    if(!document.getElementsByTagName) return false;
    var labels = document.getElementsByTagName("label");
    for(var i=0;i<labels.length;i++){
        if(!labels[i].getAttribute("for"))continue;
        labels[i].onclick = function () {
            var id = this.getAttribute("for");
            if(!document.getElementById(id))return false;
            var element = document.getElementById(id);
            element.focus();
            /*
            * 当元素获得焦点时，发生 focus 事件。
             当通过鼠标点击选中元素或通过 tab 键定位到元素时，该元素就会获得焦点。
             focus() 方法触发 focus 事件，或规定当发生 focus 事件时运行的函数*/
        }
    }
}
addLoadEvent(focusLabels);
function resetFields(whichform){
    for(var i=0;i<whichform.elements.length;i++){
        var element = whichform.elements[i];
        //element数组只返回input元素，select元素，textarea元素和其他表单字段
        // if(element.type = "submit") continue;
        // if(!element.defaultValue) continue;
        //表单字段的初始值
        if(element.type == 'text'){
            element.focus = function(){
                if(this.value == this.defaultValue){
                    this.value = "";//清空默认值
                }
            };
            element.onblur = function(){
                if(this.value == ""){
                    this.value = this.defaultValue;
                    //恢复默认值
                }
            };
        }
    }
}
function prepareForms(){
    var form = document.getElementsByTagName("form");
    for(var i=0;i<form.length;i++){
        var thisform = form[i];
        resetFields(thisform);
        thisform.onsubmit = function(){
            return validateForm(this);
        }
    }
}
addLoadEvent(prepareForms);
function isFilled(field){
    if(field.value.length<1 || field.value == field.defaultValue){
        return false;
    }else{
        return true;
    }
}
function isEmail(field){
    if(field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1){
        return false;
    }
    else{
        return true;
    }
}
function validateForm(whichform){
    for(var i=0;i<whichform.length;i++){
        var element = whichform.elements[i];
        if(element.className.indexOf("required") != -1){
            if(!isFilled(element)){
                alert("please fill in the "+element.name+" field.");
                return false;
            }
        }
        if(element.className.indexOf("email") != -1){
            if(!isEmail(element)){
                alert("The"+element.name+"field must be a valid email address");
                return false;
            }
        }
    }
    return true;
}
