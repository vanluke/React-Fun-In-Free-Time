import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import sinon from 'sinon';
import { expect } from 'chai';
import { News } from '../models';
import { jsonOk } from '../../helpers';
import news from '../services/fetch.response_stub.json';

import {
  NEWS_FETCHED,
  NEWS_FETCHING,
  remoteFetchNews
} from './index';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const response = {
  pageItems: [news]
};
describe('news', () => {
  beforeEach(() => {
    sinon.stub(window, 'fetch');
  });

  afterEach(() => {
    window.fetch.restore();
  });

  describe('action creators', async () => {
    beforeEach(() => {
      window.fetch.returns(jsonOk(response));
    });

    it('remoteFetchNews', async () => {
      const store = mockStore({ });
      await store.dispatch(remoteFetchNews());
      const actions = store.getActions();

      expect(actions[0]).to.have.property('type');
      expect(actions[0].type).to.be.equal(NEWS_FETCHING);
      expect(actions[1]).to.have.property('type');
      expect(actions[1].type).to.be.equal(NEWS_FETCHED);

      expect(actions[1]).to.have.property('items');
      expect(actions[1].items).to.deep.include.members([new News(news)]);
    });
  });
});
