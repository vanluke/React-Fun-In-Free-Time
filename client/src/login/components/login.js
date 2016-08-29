import React, { PropTypes, Component } from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Button from '../../shared/button';
import Form from './form';
import LoginInput from './login-input';
import { setLoginState, loginUser } from '../actions';
import { ApplicationModal } from '../../shared';
import './_login.scss';

class Login extends Component {
  constructor(props) {
    super(...props);
  }

  onUserNameChange(event) {
    event.preventDefault();
    const { dispatch, password } = this.props;
    const username = event.target.value;
    dispatch(setLoginState(username, password));
  }

  onPasswordChange(event) {
    event.preventDefault();
    const { dispatch, userName } = this.props;
    const password = event.target.value;
    dispatch(setLoginState(userName, password));
  }

  onClick() {
    const { dispatch, userName, password } = this.props;
    const user = Object.assign({}, { userName, password });
    dispatch(loginUser(user));
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { userName, password, isOpen,
      error, inProgress } = this.props;
    return (<div className={inProgress ? 'login loading' : 'login'}>
      <div
        className={inProgress
            ? 'login__loader show'
            : 'login__loader'}></div>
      <Form title="Login" onSubmit={this.onSubmit.bind(this)}>
        <LoginInput
          id="username"
          type="text"
          value={userName}
          onChange={this.onUserNameChange.bind(this)}
          placeholder="user name"
        >
          <i className="fun__input--fa fa fa-user"></i>
        </LoginInput>
        <LoginInput
          id="password"
          type="password"
          value={password}
          onChange={this.onPasswordChange.bind(this)}
          placeholder="password"
        >
          <i className="fun__input--fa fa fa-key"></i>
        </LoginInput>
        <Button
          className="fun__button login__form__button"
          onClick={this.onClick.bind(this)}>
          <span className="login__form__button__span">Log in</span>
        </Button>
      </Form>
      <ApplicationModal
        isOpen={isOpen}
        title="Error!"
        message={error || ''}
      />
    </div>);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    userName: PropTypes.string,
    password: PropTypes.string,
    authenticated: PropTypes.bool,
    message: PropTypes.string,
    error: PropTypes.any,
    history: PropTypes.object.isRequired,
    inProgress: PropTypes.bool,
    isOpen: PropTypes.bool
  };
}

export default Login;
