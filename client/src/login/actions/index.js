export { SET_LOGIN_STATE,
  AUTH_USER,
  UNAUTH_USER,
  AUTH_IN_PROGRESS,
  AUTH_ERROR,
  FORGOT_PASSWORD_REQUEST,
  RESET_PASSWORD_REQUEST,
  PROTECTED_TEST,
  VALIDATE_APP_STATE
} from './consts';
export { setLoginState,
  checkAuthentication,
  loginUser,
  toggleModal,
  validateState,
  sideBarToggle } from './action-creator';
