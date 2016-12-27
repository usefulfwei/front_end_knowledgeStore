class Counter extends Component{
	render(){
		const {value,onIncreaseClick} = this.props;
		return(
			<div>
        <span>{value}</span>
        <button onClick={onIncreaseClick}>Increase</button>
      </div>
				)
	}
}
///纯UI组件,该组件UI有两个参数value和onIncreaseClick。
//value需要从state计算得到，onIncreaseClick需要向外发出action

//value到state的映射
function mapStateToProps(state){
	return{
		value:state.count;
	}
}

function mapDispatchToProps(dispatch){
	return{
		onIncreaseClick:()=>dispatch(increaseAction)
	}
}

//action creator
const increaseAction = {type:'increase'}

//connect生成容器组件
const App = connect(
	mapStateToProps,
	mapDispatchToProps)(Counter)


//定义这个组件的reducer
function counter(state={count:0},action){
	const count = state.count
	switch(action.type){
		case 'increase':
			return {count:count+1}
		default:
		  return state	
	}
}
