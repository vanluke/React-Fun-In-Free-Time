import { AUTH_USER,
         UNAUTH_USER,
         AUTH_IN_PROGRESS,
         VALIDATE_APP_STATE,
         AUTH_ERROR,
         PROTECTED_TEST } from '../actions';

const initialState = {
  error: '',
  message: '',
  content: '',
  authenticated: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, {
        ...state,
        user: action.payload,
        inProgress: false,
        error: '',
        message: '',
        authenticated: true
      });
    case VALIDATE_APP_STATE:
      return Object.assign({}, {
        ...state,
        user: action.user,
        authenticated: !!action.user
      });
    case AUTH_IN_PROGRESS:
      return Object.assign({}, {
        ...state,
        inProgress: true
      });
    case UNAUTH_USER:
      return { ...state, authenticated: false, inProgress: false };
    case AUTH_ERROR:
      return {
        ...state,
        error: action.error,
        authenticated: false,
        inProgress: false
      };
    case PROTECTED_TEST:
      return { ...state, content: action.payload };
    default:
      return state;
  }
}
