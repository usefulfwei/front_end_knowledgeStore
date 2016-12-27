const createStore = (reducer) => {
	let state;
	let listeners = [];

	const getState = ()=>state;
	//获取当前时刻状态
	const dispatch = (action)=>{
		state = reducer(state,action);
		listeners.forEach(listener => listener();)
	}
	//view 发出action的唯一方法
	const subscribe = (listener) => {
		listeners.push(listener);
		return ()=>{
			listeners = listeners.filter(l => l !== listener);
		}
	};
	//监听state的变化

	dispatch({});
	//????????????????????
	return {getState,dispatch,subscribe};
};