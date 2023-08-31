import { FETCH_CURRENT_USER } from '../actions';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_CURRENT_USER:
      return action.payload.data || false; // false表示用户还未登录，api没有返回值
    default:
      return state;
  }
};
