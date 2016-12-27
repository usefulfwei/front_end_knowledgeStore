function addTodo(text){
	return{
		type:ADD_TODO,
		text
	}
}

store.dispatch(addTodo('learn redux'));