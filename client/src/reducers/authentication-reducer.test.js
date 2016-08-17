import { expect } from 'chai';
import { SET_USER_NAME, SET_PASSWORD } from '../actions';
import reducer from './authentication-reducer';

describe('authentication-reducer', () => {
  const state = {};
  it('set username', () => {
    const action = {
      type: SET_USER_NAME,
      payload: 'username'
    };
    const username = reducer(state, action);
    expect(username).to.be.equal('username');
  });
  it('set password', () => {
    const action = {
      type: SET_PASSWORD,
      payload: 'password'
    };
    const passowrd = reducer(state, action);
    expect(passowrd).to.be.equal('password');
  });
});
