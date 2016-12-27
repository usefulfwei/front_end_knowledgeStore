/**
 * Created by jwdn on 2016/11/28.
 */
//event.js 文件
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
  console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');

/*，emitter 为事件 someEvent 注册了两个事件监听器，然后触发了 someEvent 事件。
 运行结果中可以看到两个事件监听器回调函数被先后调用。 这就是EventEmitter最简单的用法。*/