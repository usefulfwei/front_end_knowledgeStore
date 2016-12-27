const Counter = ({value})=>(<h1>{value}</h1>);

const render = ()=>{
	ReactDOM.render(
		<Counter value={store.getState()} />,
		document.getElementById('root')
	);
};

store.subscribe(render);
render();
