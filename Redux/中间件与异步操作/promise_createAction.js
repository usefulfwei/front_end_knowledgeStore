import {createAction} from 'redux-action';

class AsyncApp extends Component{
	componentDidMount(){
		const {dispatch,selectedPost} = this.props;
		//发出同步action
		dispatch(requestPosts(selectedPost));
		//发出异步 Action
		dispatch(createAction(
			'FETCH_POSTS',
			fetch('/some/API/${postTitle}.json')
			.then(response=>response.json())));
	}
}
/*，第二个dispatch方法发出的是异步 Action，
只有等到操作结束，这个 Action 才会实际发出。*/

/*createAction的第二个参数必须是一个 Promise 对象。*/
/*fetch('/some/API/${postTitle}.json')
			.then(response=>response.json())*/