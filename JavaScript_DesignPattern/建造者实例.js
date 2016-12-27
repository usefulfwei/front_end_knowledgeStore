/**
 * Created by jwdn on 2016/11/6.
 */
//白富美要求产出房子
//包工头 调用工人进行开工，而且他清楚工程具体项目
//工人 盖房子完成具体工作
// 包工头仅仅是一个接口，但不干活。
function Fangzi(){
    this.woshi = "";
    this.keting = "";
    this.chufang = "";
}
function Baogongtou(){
    this.gaifangzi = function(gongren){
        gongren.jian_woshi();
        gongren.jian_keting();
        gongren.jian_chufang();
    }
}
function Gongren(){
    this.jian_woshi = function(){
        console.log('卧室我盖好了');
    }
    this.jian_keting = function(){
        console.log('客厅建好了')
    }
    this.jian_chufang = function(){
        console.log('厨房建好了')
    }
    this.jiaogong = function(){
        var _fangzi = new Fangzi();
        _fangzi.woshi = 'OK';
        _fangzi.keting = 'OK';
        _fangzi.chufang = 'OK';
        return _fangzi;
    }
}
var gongren = new Gongren;
var baogongtou = new Baogongtou();
baogongtou.gaifangzi(gongren);
var myfangzi = gongren.jiaogong();
console.log(myfangzi);