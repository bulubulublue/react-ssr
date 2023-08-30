export const FETCH_USERS = 'fetch_users';

// api: axios实例
// 如果是SSR服务端调用，则是服务端的axios实例配置
// 如果是由浏览器端调用，则是浏览器端的axios实例配置
export const fetchUsers = () => async (dispatch, getState, api) => {
  const res = await api.get('/users');

  dispatch({
    type: FETCH_USERS,
    payload: res,
  });
};
