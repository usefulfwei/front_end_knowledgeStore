class AsyncApp extends Component{
	componentDidMount(){
		const{dispatch,selectedPost} = this.props
		dispatch(fetchPosts(selectedPost))
	}
	//.......
}

/*上面代码是一个异步组件的例子。
加载成功后（componentDidMount方法），
它送出了（dispatch方法）一个 Action，
向服务器要求数据 fetchPosts(selectedSubreddit)。
这里的fetchPosts就是 Action Creator。*/