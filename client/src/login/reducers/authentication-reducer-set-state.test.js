import { expect } from 'chai';
import { SET_LOGIN_STATE } from '../actions';
import reducer from './authentication-reducer-set-state';

describe('authentication-reducer set state', () => {
  const state = {};
  it('set username', () => {
    const action = {
      type: SET_LOGIN_STATE,
      userName: 'username'
    };
    const { userName } = reducer(state, action);
    expect(userName).to.be.equal('username');
  });
  it('set password', () => {
    const action = {
      type: SET_LOGIN_STATE,
      password: 'password'
    };
    const { password } = reducer(state, action);
    expect(password).to.be.equal('password');
  });
});
