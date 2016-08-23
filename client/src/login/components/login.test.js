import React from 'react';
import {
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import chai, { expect } from 'chai';

import Login from './login';

function original(userName, password) {
  return {
    userName,
    password
  };
}
function storageMock() {
  const storage = {};
  return {
    setItem(key, value) {
      storage[key] = value || '';
    },
    getItem(key) {
      return storage[key] || null;
    },
    removeItem(key) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    }
  };
}

const dispatch = chai.spy(original);

describe('login component', () => {
  beforeEach(() => {
    // mock the localStorage
    window.localStorage = storageMock();
    // mock the sessionStorage
    window.sessionStorage = storageMock();
  });
  it('renders', () => {
    const component = renderIntoDocument(<Login dispatch={dispatch} />);
    // eslint-disable-next-line no-unused-expressions
    expect(component).to.be.ok;
  });

  it('call action after providing inputs value', () => {
    const component = renderIntoDocument(<Login dispatch={dispatch} />);
    const form = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.change(form[0], { target: { value: 'name' } });
    Simulate.change(form[1], { target: { value: 'password' } });
    // eslint-disable-next-line no-unused-expressions
    expect(form).to.be.ok;
    // eslint-disable-next-line no-unused-expressions
    expect(dispatch).to.have.been.called.four;
  });
});
