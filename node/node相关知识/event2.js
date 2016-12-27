/**
 * Created by jwdn on 2016/11/28.
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
event.on('some_event', function() {
  console.log('some_event 事件触发');
});
setTimeout(function() {
  event.emit('some_event');
}, 1000);

/*
* 运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。
* 其原理是 event 对象注册了事件 some_event 的一个监听器，
* 然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，
* 此时会调用some_event 的监听器*/