import { SET_LOGIN_STATE } from '../actions';

export default function(state = {}, action = {}) {
  switch (action.type) {
    case SET_LOGIN_STATE:
      return {
        userName: action.userName,
        password: action.password
      };
    default:
      return state;
  }
}
