import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

/*上面代码使用redux-thunk中间件，
改造store.dispatch，使得后者可以接受函数作为参数。*/