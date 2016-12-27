let next =  store.dispatch;
store.dispatch = function dispatchAndLog(action){
	console.log('dispatching',action);
	next(action);
	console.log('next state',store.getState());
	//console.log为增加的功能
}