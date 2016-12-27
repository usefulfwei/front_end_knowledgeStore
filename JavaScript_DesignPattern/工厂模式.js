/**
 * Created by jwdn on 2016/11/6.
 */
var gongchang = {};
gongchang.chanyifu = function(argument){
    this.gongren = 50;
};
gongchang.chanxie = function(){
    alert("产鞋子");
}
gongchang.yushu = function(){
    alert('运输');
}
gongchang.changzhang = function(para){
    return new gongchang[para]();
}
var me = gongchang.changzhang('chanyifu');
alert(me.gongren);