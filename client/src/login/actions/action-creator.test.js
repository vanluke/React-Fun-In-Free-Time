import { expect } from 'chai';
import { setLoginState } from './action-creator';
import { SET_LOGIN_STATE } from './consts';

describe('action creators', () => {
  describe('authentication', () => {
    it('sets user name. Action', () => {
      const name = 'name';
      const password = 'password';
      const { type, userName } = setLoginState(name, password);
      expect(type).to.be.equal(SET_LOGIN_STATE);
      expect(userName).to.be.equal(name);
    });
    it('sets password. Action', () => {
      const passwordTyped = 'password';
      const { type, password } = setLoginState('', passwordTyped);
      expect(type).to.be.equal(SET_LOGIN_STATE);
      expect(password).to.be.equal(password);
    });
  });
});
