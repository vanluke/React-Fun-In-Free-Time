import { expect } from 'chai';
import { SIDEBAR_IS_OPEN } from '../actions';
import sideBarReducer from './side-bar-reducer';

const initialState = {
  isVisible: false
};

describe('sidebar reducer', () => {
  it('toggle isVisible', () => {
    const reducer = sideBarReducer(initialState, {
      type: SIDEBAR_IS_OPEN,
      isVisible: false
    });
    // eslint-disable-next-line no-unused-expressions
    expect(reducer).to.be.ok;
    // eslint-disable-next-line no-unused-expressions
    expect(reducer.isVisible).to.be.true;
  });
});
