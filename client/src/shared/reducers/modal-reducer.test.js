import { expect } from 'chai';
import { TOGGLE_MODAL } from '../actions';
import modalReducer from './modal-reducer';

describe('modal reducer', () => {
  it('toggle modal state', () => {
    const action = {
      type: TOGGLE_MODAL,
      isOpen: false
    };
    const state = {
      isOpen: false
    };
    const reducer = modalReducer(state, action);

    expect(reducer.isOpen).to.be.equal(true);
  });
});
