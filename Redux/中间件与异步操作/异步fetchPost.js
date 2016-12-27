const fetchPosts = postTitle => (dispatch,getState)=>{
	dispatch(requestPosts(postTitle));
	return fetch('/some/API/${postTitle}.json')
	.then(response=>response.json())
	.then(json=>dispatch(receivePosts(postTitle,json)));
};

// 使用方法一
store.dispatch(fetchPosts('reactjs'));
// 使用方法二
store.dispatch(fetchPosts('reactjs')).then(() =>
  console.log(store.getState())
);

/*上面代码中，fetchPosts是一个Action Creator（动作生成器），
返回一个函数。这个函数执行后，
先发出一个Action（requestPosts(postTitle)），
然后进行异步操作。拿到结果后，先将结果转成 JSON 格式，
然后再发出一个 Action（ receivePosts(postTitle, json)）。*/