import {createStore,applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import reducer from './reducers';

const store = createStore(
    reducer,
    applyMiddleware(promiseMiddleware)
  );

//这个中间件使得store.dispatch方法可以接受 Promise 对象作为参数