import { expect } from 'chai';
import wrap from 'react-mocha-stateless-test-helper';
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';

import Card from './card';

describe('news', () => {
  describe('card component', () => {
    const tm = new Date().toString();
    const fakeCardProps = {
      title: 'card title',
      editorial: {
        subheading: 'blabla'
      },
      images: [{
        alt: 'alt',
        url: 'http://notfound',
        height: '100px',
        width: '100px'
      }],
      createdAt: tm
    };
    it('renders', () => {
      const component = renderIntoDocument(wrap(Card, fakeCardProps));
      const card = scryRenderedDOMComponentsWithClass(component, 'card');
      // eslint-disable-next-line no-unused-expressions
      expect(card).to.be.ok;
    });

    it('has a title', () => {
      const component = renderIntoDocument(wrap(Card, fakeCardProps));
      const card = scryRenderedDOMComponentsWithClass(component, 'card__title');

      const h3 = card[0];
      // eslint-disable-next-line no-unused-expressions
      expect(h3).to.be.ok;
      expect(h3.textContent).to.be.equal('card title');
    });

    describe('description', () => {
      it('has a paragraph', () => {
        const component = renderIntoDocument(wrap(Card, fakeCardProps));
        const paragraphs = scryRenderedDOMComponentsWithTag(component, 'p');

      //  console.log(img);
        const paragraph = paragraphs[0];
        // eslint-disable-next-line no-unused-expressions
        expect(paragraph).to.be.ok;
        expect(paragraph.textContent).to.be.equal('blabla');
      });

      it('has a paragraph class card__description__paragraph', () => {
        const component = renderIntoDocument(wrap(Card, fakeCardProps));
        const paragraphs
          = scryRenderedDOMComponentsWithClass(component,
            'card__description__paragraph');

      //  console.log(img);
        const paragraph = paragraphs[0];
        // eslint-disable-next-line no-unused-expressions
        expect(paragraph).to.be.ok;
      });
    });

    describe('metadata', () => {
      it('has a timestamp defined', () => {
        const component = renderIntoDocument(wrap(Card, fakeCardProps));
        const meta
          = scryRenderedDOMComponentsWithClass(component,
            'card__meta__timestamp');
        const span = meta[0];
        // eslint-disable-next-line no-unused-expressions
        expect(span).to.be.ok;
        expect(span.tagName).to.be.equal('SPAN');
        expect(span.textContent).to.be.equal(tm);
      });
    });

    describe('image', () => {
      it('has a src attribute', () => {
        const component = renderIntoDocument(wrap(Card, fakeCardProps));
        const img = scryRenderedDOMComponentsWithTag(component, 'img');

      //  console.log(img);
        const image = img[0];
        // eslint-disable-next-line no-unused-expressions
        expect(image).to.be.ok;
        expect(image.src).to.be.equal('http://notfound/');
      });

      it('has a alt attribute', () => {
        const component = renderIntoDocument(wrap(Card, fakeCardProps));
        const img = scryRenderedDOMComponentsWithTag(component, 'img');

      //  console.log(img);
        const image = img[0];
        // eslint-disable-next-line no-unused-expressions
        expect(image).to.be.ok;
        expect(image.alt).to.be.equal('alt');
      });
    });
  });
});
