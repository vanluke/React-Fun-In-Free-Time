import { expect } from 'chai';
import { setUsername, setPassword } from './authentication-action-creators';
import { SET_USER_NAME, SET_PASSWORD } from './const';

describe('action creators', () => {
  describe('authentication', () => {
    it('sets user name. Action', () => {
      const name = 'name';
      const { type, payload } = setUsername(name);
      expect(type).to.be.equal(SET_USER_NAME);
      expect(payload).to.be.equal(name);
    });
    it('sets password. Action', () => {
      const password = 'password';
      const { type, payload } = setPassword(password);
      expect(type).to.be.equal(SET_PASSWORD);
      expect(payload).to.be.equal(password);
    });
  });
});
