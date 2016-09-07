import { expect } from 'chai';
import sinon from 'sinon';
import { get } from './fetch';
import news from './fetch.response_stub.json';
import { jsonOk } from '../../helpers';

const response = {
  pageItems: [news]
};

describe('news services', () => {
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.restore();
  });
  describe('fetch', () => {
    beforeEach(() => {
      window.fetch.returns(jsonOk(response));
    });

    it('fetch news', async () => {
      const items = await get();
      // eslint-disable-next-line no-unused-expressions
      expect(items).to.be.ok;
      expect(items).to.have.lengthOf(1);
    });
  });
});
