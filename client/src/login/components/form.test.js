import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass
} from 'react-addons-test-utils';
import { expect } from 'chai';

import Form from './form';

describe('form component', () => {
  const props = {
    onSubmit: () => {},
    title: 'form'
  };
  it('renders', () => {
    const component = renderIntoDocument(wrap(Form, props));
    const form = scryRenderedDOMComponentsWithClass(component, 'login__form');
    // eslint-disable-next-line no-unused-expressions
    expect(form).to.be.ok;
  });

  it('has a title', () => {
    const component = renderIntoDocument(wrap(Form, props));
    const titile =
      scryRenderedDOMComponentsWithClass(component, 'login__form__title');
    expect(titile[0].textContent).to.be.equal('form');
  });
});
