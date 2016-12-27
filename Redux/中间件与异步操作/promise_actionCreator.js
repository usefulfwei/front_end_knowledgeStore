const fetchPosts = 
	(dispatch,postTitle)=>new Promise(function(resolve,reject){
		dispatch(requestPosts(postTitle));
		return fetch('/some/API/${postTitle}.json')
		.then(response=>{
			type:'FETCH_POSTS',
			payload:response.json()
		});
	});
	//写法一，返回值是一个 Promise 对象。
	/*fetch('/some/API/${postTitle}.json')
		.then(response=>{
			type:'FETCH_POSTS',
			payload:response.json()
		});*/