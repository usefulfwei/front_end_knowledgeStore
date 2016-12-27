/**
 * Created by jwdn on 2016/10/23.
 */
//回调

request = prepare_the_request();
response = send_request_syschronously(request);
display(response);
//网络上的同步请求将会导致客户端进入假死状态

//发起异步请求
//提供一个当服务器的响应到达时将被调用的回调函数。
//异步的函数立即返回，这样客户端不会被堵塞。
request = prepare_the_request();
send_request_asyschronously(request,function(response){
    display(response);
});


//模块 = 函数 + 闭包
//模块是一个提供接口却隐藏状态与实现的函数或对象。


//eg1  实现寻找字符并替换功能
String.method('deentityify',function(){
    var entity = {
        quot:'"',
        lt:'<',
        gt:'>'
    };
    return function(){
        //这才是deentityify方法，调用字符串的replace方法
        //查找‘&’开头和‘;’结束的子字符串。如果这些字符可以在字符实体表中找到，
        //那么就将该字符实体替换为映射表中的值
        return this.replace(/&([^&;]+);/g,
                            //正则表达式
            function(a,b){
                var r = entity[b];
                return typeof r == 'string'? r : a;
            }
         )

    }
}());
//最后一行用()立即调用我们构造出的函数
document.writeln('&lt;&quot;&gt;'.deentityify());

/**正则表达式
 *
 *    前面的字符任意多个
 ?    前面的字符0个或1个
 +    前面的字符1个或以上
 s*    s任意多个
 ^s*    以s开头的s任意多个
 s*$    以s结尾的s任意多个
 /(^s*)|(s*$)/g    全局模式下，匹配任意多个s开头、或任意多个s结尾的字符。
 return this.replace(/(^s*)|(s*$)/g, "");    删除字符串头尾的任意多个s，并返回处理后的字符串
 */


//模块模式的一般形式：一个定义了私有变量和函数的函数，利用闭包创建可以访问私有变量
//和函数的特权函数；最后返回这个特权函数，或者把它们保存到一个可以访问到的地方。

//eg2用来产生安全的对象：产生序列号

var serial_maker = function(){
    //返回一个用来产生唯一字符串的对象。
    //唯一字符串有两部分组成：前缀+序列号
    //包含设置前缀和序列号的方法

    var prefix = "";
    var seq = 0;
    return{
        set_prefix:function(p){
            prefix = String(p);
        },
        set_seq:function(s){
            seq = s;
        },
        gensyn:function(){
            var result = prefix+seq;
            seq += 1;
            return result;
        }
    };
};
var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensyn();//Q1000
