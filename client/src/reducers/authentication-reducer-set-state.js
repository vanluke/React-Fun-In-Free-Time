import { SET_LOGIN_STATE } from '../actions';

const defaultState = {
  userName: '',
  password: ''
};

export default function(state = defaultState, action = {}) {
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
