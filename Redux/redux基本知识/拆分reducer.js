
const chatReducer = (state = defaultState, action = {}) => {
  return {
    chatLog: chatLog(state.chatLog, action),
    statusMessage: statusMessage(state.statusMessage, action),
    userName: userName(state.userName, action)
  }
};
//////////////////////////////////////////////////
//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分
import { combineReducers } from 'redux';
const chatLog = (state1,action)=>{
	//....
	return newstate1;
}
const statusMessage = (state2,action)=>{
	//...........
	return newstate2;
}
//............
const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})
//这种写法有一个前提，就是 State 的属性名必须与子 Reducer 同名
//////////////////////////////////////////////////////////////
//不同名的写法
const reducer = combineReducers({
  a: doSomethingWithA,
  b: processB,
  c: c
})

// 等同于
function reducer(state = {}, action) {
  return {
    a: doSomethingWithA(state.a, action),
    b: processB(state.b, action),
    c: c(state.c, action)
  }
}

export default todoApp;

/*combineReducers()做的就是产生一个整体的 Reducer 函数。
该函数根据 State 的 key 去执行相应的子 Reducer，
并将返回结果合并成一个大的 State 对象。*/