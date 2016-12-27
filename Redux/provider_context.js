class Provider extends Component{
	getChildContext(){
		return{
			store:this.props.store
		};
	}
	render(){
		return this.props.children;
	}
}
Provider.childContextTypes = {
	store:React.ProTypes.object
}

/*store放在了上下文对象context上面。
然后，子组件就可以从context拿到store*/

class VisibleTodoList extends Component{
	componentDidMount(){
		const {store} = this.context;
		this.unsubscribe = store.subscribe(()=>
			this.forceUpdate()
			);
	}
	/*在高阶组件（connect 函数返回的组件）
	里的 componentDidMount 订阅 store 更新，
	和 componentWillUnmount 取消订阅。
	（还有声明 contextTypes...）*/
	render(){
		const props = this.props;
		const {store} = this.context;
		const state = store.getState();
		//.....
	}
}

VisibleTodoList.contextTypes = {
	store:React.PropTypes.object
}

/*React-Redux自动生成的容器组件的代码，
就类似上面这样，从而拿到store。*/