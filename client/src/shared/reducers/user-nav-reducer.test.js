import { expect } from 'chai';
import { TOGGLE_USER_INFO_NAV } from '../actions';
import userInfoReducer from './user-nav-reducer';

describe('reducers', () => {
  describe('user info reducer', () => {
    it('opens', () => {
      const action = {
        isOpen: false,
        type: TOGGLE_USER_INFO_NAV
      };
      const reduced = userInfoReducer(undefined, action);
      // eslint-disable-next-line no-unused-expressions
      expect(reduced).to.be.ok;
      // eslint-disable-next-line no-unused-expressions
      expect(reduced.isOpen).to.be.true;
    });
  });
});
