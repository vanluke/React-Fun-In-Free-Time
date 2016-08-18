import React, { PropTypes, PureComponent } from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Button from '../../shared/button';
import Form from './form';
import LoginInput from './login-input';
import { setLoginState } from '../../actions';
import './_login.scss';

class Login extends PureComponent {
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

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { userName, password } = this.props;
    return (<div className="login">
      <Form title="Login" onSubmit={this.onSubmit}>
        <LoginInput
          id="username"
          type="text"
          value={userName}
          onChange={this.onUserNameChange.bind(this)}
          placeholder="user name"
        >
          <i className="fa fa-user"></i>
        </LoginInput>
        <LoginInput
          id="password"
          type="password"
          value={password}
          onChange={this.onPasswordChange.bind(this)}
          placeholder="password"
        >
          <i className="fa fa-key"></i>
        </LoginInput>
        <Button className="fun__button login__form__button">
          <span className="login__form__button__span">Log in</span>
        </Button>
      </Form>
    </div>);
  }

  static propTypes = {
    userName: PropTypes.string,
    password: PropTypes.string
  };
}

export default Login;
