/**
 * Created by jwdn on 2016/11/6.
 */
//代理模式需要3方
// 1 买家
function maijia(argument){
    this.name = '小明';
}
// 2 中介卖房
function zhongjie(){

}
zhongjie.prototype.maifang = function(){
    new fangdong(new maijia().maifang('20万'));
}
// 3 房东
function fangdong(maijia){
    this.maijia_name = maijia.name;
    this.maifang = function(money){
        alert('收到了来自['+this.maijia.name+']'+money+'人民币');
    }
}
(new zhongjie).maifang();
