import React, { PropTypes, PureComponent } from 'react';
import 'font-awesome/scss/font-awesome.scss';
import Button from '../../shared/button';
import Form from './form';
import LoginInput from './login-input';
import './_login.scss';

class Login extends PureComponent {
  constructor(props) {
    super(...props);
  }

  onUserNameChange(event) {
    event.preventDefault();
    this.setState({
      userName: event.target.value
    });
  }

  onPasswordChange(event) {
    event.preventDefault();
    this.setState({
      password: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
  }

  render() {
    const { userName, password } = this.state;
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

  state = {
    userName: '',
    password: ''
  }
}

export default Login;
