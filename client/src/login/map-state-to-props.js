export default function mapStateToProps(state) {
  const { loginReducer } = state;
  return {
    userName: loginReducer.userName,
    passowrd: loginReducer.password
  };
}
