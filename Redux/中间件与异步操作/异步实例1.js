import fetch from 'isomorphic-fetch';

export function fetchFriends(){
	return dispatch=>{
		dispatch({type:'FETCH_FRIENDS'});
		return fetch('http://localhost/api/friends/')
		.then(response=>response.json())
		.then(json=>{
			dispatch({type:'RECEIVE_FRIENDS',payload:json});
		});
	};
}