const mapStateToProps = (state)=>{
	return{
		todos:getVisibleTodos(state.todos,state.visibilityFilter)
	}
}

/*mapStateToProps是一个函数，
它接受state作为参数，返回一个对象。
这个对象有一个todos属性，代表 UI 组件的同名参数，
后面的getVisibleTodos也是一个函数，
可以从state算出 todos 的值。*/