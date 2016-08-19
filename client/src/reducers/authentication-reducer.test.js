import { expect } from 'chai';
import { AUTH_USER,
         UNAUTH_USER,
         AUTH_ERROR,
         PROTECTED_TEST } from '../actions';
import reducer from './authentication-reducer';

// const initialState = {
//   error: '',
//   message: '',
//   content: '',
//   authenticated: false
// };

describe('authentication reducer', () => {
  it('authenticated', () => {
    const state = {
      userName: 'me',
      password: 'secret'
    };
    const action = {
      type: AUTH_USER
    };
    const auth = reducer(state, action);
    // eslint-disable-next-line no-unused-expressions
    expect(auth).to.be.ok;
    expect(auth.authenticated).to.be.equal(true);
    expect(auth.error).to.be.equal('');
  });
  it('returns error message when', () => {
    const state = {
      userName: 'me',
      password: 'secret'
    };
    const action = {
      type: AUTH_ERROR,
      payload: 'error'
    };
    const auth = reducer(state, action);
    // eslint-disable-next-line no-unused-expressions
    expect(auth).to.be.ok;
    expect(auth.authenticated).to.be.equal(false);
    expect(auth.error).to.be.equal('error');
  });
  it('not authenticated', () => {
    const state = {
      userName: 'me',
      password: 'secret'
    };
    const action = {
      type: UNAUTH_USER
    };
    const auth = reducer(state, action);
    // eslint-disable-next-line no-unused-expressions
    expect(auth).to.be.ok;
    expect(auth.authenticated).to.be.equal(false);
  });

  it('protected state', () => {
    const state = {
      userName: 'me',
      password: 'secret'
    };
    const action = {
      type: PROTECTED_TEST,
      payload: `<h1>Header</h1>`
    };
    const auth = reducer(state, action);
    // eslint-disable-next-line no-unused-expressions
    expect(auth).to.be.ok;
    // eslint-disable-next-line no-unused-expressions
    expect(auth.content).to.not.be.empty;
  });
});
