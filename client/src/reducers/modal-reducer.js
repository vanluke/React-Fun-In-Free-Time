import { TOGGLE_MODAL } from '../actions';

const defaultState = {
  isOpen: false
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        isOpen: !action.isOpen
      };
    default:
      return state;
  }
}
