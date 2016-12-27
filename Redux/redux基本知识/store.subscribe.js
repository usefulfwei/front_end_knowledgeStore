import {createStore} from 'redux';
const store = createStore(reducer);

store.subscribe(listener);

let unsubscribe = store.subscribe(
	()=>
	console.log(store.getState())
	);
unsubscribe();

//unsubscribe = store.subscribe()