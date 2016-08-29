import {
  NEWS_FETCHED,
  NEWS_FETCHING
} from '../actions';

const defaultState = {
  isLoading: false,
  items: []
};

export default function(state = defaultState, action = {}) {
  switch (action.type) {
    case NEWS_FETCHING:
      return {
        isLoading: true
      };
    case NEWS_FETCHED:
      return {
        isLoading: false,
        items: [...action.items]
      };
    default:
      return state;
  }
}
