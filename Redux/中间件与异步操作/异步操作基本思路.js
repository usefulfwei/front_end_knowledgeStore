/*异步操作的差别是它要发出三种 Action。
操作发起时的 Action
操作成功时的 Action
操作失败时的 Action*/


// 写法一：名称相同，参数不同
{ type: 'FETCH_POSTS' }
{ type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
{ type: 'FETCH_POSTS', status: 'success', response: { ... } }

// 写法二：名称不同
{ type: 'FETCH_POSTS_REQUEST' }
{ type: 'FETCH_POSTS_FAILURE', error: 'Oops' }
{ type: 'FETCH_POSTS_SUCCESS', response: { ... } }

//除了 Action 种类不同，
//异步操作的 State 也要进行改造，反映不同的操作状态

let state = {
  // ... 
  isFetching: true,
  didInvalidate: true,
  lastUpdated: 'xxxxxxx'
};

/*State 的属性isFetching表示是否在抓取数据。didInvalidate
表示数据是否过时，lastUpdated表示上一次更新时间。*/