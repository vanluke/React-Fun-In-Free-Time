import { expect } from 'chai';
import {
  NEWS_FETCHED,
  NEWS_FETCHING
} from '../actions';
import reducer from './news-reducer';

const defaultState = {
  isLoading: false,
  items: []
};

describe('news', () => {
  describe('reducer', () => {
    it('reduce news feting', () => {
      const result = reducer(defaultState, { type: NEWS_FETCHING });
      expect(result).to.contain.all.keys(['isLoading']);
      expect(result.isLoading).to.be.equal(true);
    });

    it('reduce news fetched', () => {
      const result = reducer(defaultState, {
        type: NEWS_FETCHED,
        items: [{ emp: 'emp' }]
      });
      expect(result).to.contain.all.keys(['isLoading', 'items']);
      expect(result.isLoading).to.be.equal(false);

      expect(result.items).to.deep.include.members([{ emp: 'emp' }]);
    });
  });
});
