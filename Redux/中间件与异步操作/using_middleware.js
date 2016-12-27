/*有现成的redux-logger模块。这里介绍怎么使用中间件。*/
import {applyMiddleware,createStore} from 'redux';
import createStore from 'redux-logger';

const logger = createLogger();

const store = createStore(
	reducer,
	applyMiddleware(logger)
);
/*redux-logger提供一个生成器createLogger，
可以生成日志中间件logger。然后，
将它放在applyMiddleware方法之中，
传入createStore方法，就完成了store.dispatch()的功能增强。*/

/*createStore方法可以接受整个应用的初始状态作为参数，
那样的话，applyMiddleware就是第三个参数了。*/

const store = createStore(
  reducer,
  initial_state,
  applyMiddleware(logger)
);

//中间件的次序有讲究。
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);

/*applyMiddleware方法的三个参数，就是三个中间件。
有的中间件有次序要求，使用前要查一下文档。
比如，logger就一定要放在最后，否则输出结果会不正确。*/

