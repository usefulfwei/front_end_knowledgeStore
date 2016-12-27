/**
 * Created by jwdn on 2016/11/6.
 */
    // 1 独立的对象两个 xiaowang xiaoli
    // 2 让xiaoli跟xiaowang通过门铃进行通信
    // 3 先看一下xiaowang家有没有门，如果没有门先建一个门
    // 4 两个单例进行通信
var xiaowang = (function(argument){
        var xiaowangjia = function(message){
            this.menling = message;
        };
        var men;
        var info = {
            sendMessage:function (message) {
                if(!men){
                    men = new xiaowangjia(message);
                };
                return men;
            }
        };
        return info;
    })();
//自执行函数
var xiaoli ={
    callXiaowang:function(msg){
        var _xw = xiaowang.sendMessage(msg);
        alert(_xw.menling);
        _xw = null;//清空释放内存 等待垃圾回收
    }
}
xiaoli.callXiaowang('didi');


//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
//页面上一共六个按钮
//a b c => top
//d e f => banner
var top = {
    init:function () {
        this.render();
        this.bind();
    },
    a:4,
    render:function(){
        var me = this;
        me.btna = $('#a');
    },
    bind:function(){
        var me = this;
        me.btna.click(function(){
            me.test();
            //执行的逻辑放到外面
        })
    },
    test:function () {
        //a = 5;
        top.a = 6;//somevalue
    }
};
var banner = {
    init:function () {
        this.render();
        this.bind();
    },
    a:4,
    render:function(){
        var me = this;
        me.btnd = $('#d');
    },
    bind:function(){
        var me = this;
        me.btna.click(function(){
            me.test();
            //执行的逻辑放到外面
        })
    },
    test:function () {
        banner.a = 4;
    }
}
top.init();
banner.init();
$('#a').click(function(){
    //
});
$('#b').click(function(){
    //
})