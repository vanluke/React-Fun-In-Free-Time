export default function mapStateToProps(state) {
  const { loginReducer, authenticationReducer, modalReducer } = state;
  return {
    userName: loginReducer.userName,
    password: loginReducer.password,
    authenticated: authenticationReducer.authenticated,
    message: authenticationReducer.message,
    error: authenticationReducer.error,
    inProgress: authenticationReducer.inProgress,
    isOpen: modalReducer.isOpen
  };
}
