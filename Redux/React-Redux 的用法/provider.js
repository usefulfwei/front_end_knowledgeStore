import {Provider} from 'react-redux'
import {createStore} from 'redux'
import todoApp from './reducer'
import App from './component/App'

let store = createStore(todoApp);

render(
	<Provider store={store}>
	<App />
	</Provider>,
	document.getElementById('root')
	);

/*Provider在根组件外面包了一层，这样一来，
App的所有子组件就默认都可以拿到state了。*/	