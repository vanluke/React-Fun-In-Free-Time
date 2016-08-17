import React from 'react';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  Simulate,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import { expect } from 'chai';

import Login from './login';

describe('login component', () => {
  it('renders', () => {
    const component = renderIntoDocument(<Login />);
    // eslint-disable-next-line no-unused-expressions
    expect(component).to.be.ok;
  });

  it('change state after providing inputs value', () => {
    const component = renderIntoDocument(<Login />);
    const form = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.change(form[0], { target: { value: 'name' } });
    Simulate.change(form[1], { target: { value: 'password' } });
    // eslint-disable-next-line no-unused-expressions
    expect(form).to.be.ok;
    expect(component.state.userName).to.be.equal('name');
    expect(component.state.password).to.be.equal('password');
  });
});
