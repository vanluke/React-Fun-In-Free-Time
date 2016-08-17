import { SET_USER_NAME, SET_PASSWORD } from '../actions';

export default function(state, action) {
  switch (action.type) {
    case SET_USER_NAME:
    case SET_PASSWORD:
      return action.payload;
    default:
      return state;
  }
}
