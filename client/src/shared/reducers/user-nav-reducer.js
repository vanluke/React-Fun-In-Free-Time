import { TOGGLE_USER_INFO_NAV } from '../actions';

const defaultState = {
  isOpen: false
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case TOGGLE_USER_INFO_NAV:
      return {
        isOpen: !action.isOpen
      };
    default:
      return state;
  }
}
