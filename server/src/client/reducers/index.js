import { combineReducers } from 'redux';

import userReducers from './userReducers';
import authReducers from './authReducers';

export default combineReducers({
  users: userReducers,
  auth: authReducers,
});

// 如果store用这种方法创建，那么所有引入的地方都使用的是同一个store，会造成所有用户使用的都是同一个store
// export const store = createStore(reducer, applyMiddleware(thunk));

//修改为如下可以解决上述问题
// export default  () => {
//   return createStore(reducer, applyMiddleware(thunk))
// }