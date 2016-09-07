import { SIDEBAR_IS_OPEN } from '../actions';

const initialState = {
  isVisible: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case SIDEBAR_IS_OPEN:
      return Object.assign({}, {
        isVisible: !action.isVisible
      });
    default:
      return state;
  }
}
