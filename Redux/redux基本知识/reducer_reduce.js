const actions = [
	{type:'ADD',payload:0},
	{type:'ADD',payload:1},
	{type:'ADD',payload:2},
];

const total = actions.reduce(reducer,0);//3

//数组的reduce方法接受 Reducer 函数作为参数，
/就可以直接得到最终的状态3。