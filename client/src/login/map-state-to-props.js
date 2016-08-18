export default function mapStateToProps(state) {
  const { authenticationReducer } = state;
  return {
    userName: authenticationReducer.userName,
    passowrd: authenticationReducer.password
  };
}
