/*store.getState();
store.dispatch()
store.subscribe();*/
import {createStore} from 'redux';

let {subscribe,dispatch,getState} = createStore(reducer);

//createStore方法还可以接受第二个参数，表示 State 的最初状态。
//这通常是服务器给出的。

let store = createStore(todoApp, window.STATE_FROM_SERVER)