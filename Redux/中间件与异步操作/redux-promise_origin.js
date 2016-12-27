export default function promiseMiddleware({ dispatch }) {
  return next => action => {
    if (!isFSA(action)) {
      return isPromise(action)
        ? action.then(dispatch)
        : next(action);
        /*如果 Action 本身是一个 Promise，
        它 resolve 以后的值应该是一个 Action 对象，
        会被dispatch方法送出（action.then(dispatch)），
        但 reject 以后不会有任何动作；*/
    }

    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({ ...action, payload: result }),
          error => {
            dispatch({ ...action, payload: error, error: true });
            return Promise.reject(error);
          }
        )
      : next(action);
      /*如果 Action 对象的payload属性是一个 Promise 对象，
      那么无论 resolve 和 reject，dispatch方法都会发出 Action。*/
  };
}