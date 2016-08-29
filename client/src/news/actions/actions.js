import {
  NEWS_FETCHED,
  NEWS_FETCHING
} from './index';
import { get as getNews } from '../services';

export const fetchNews = function() {
  return {
    type: NEWS_FETCHING
  };
};

export const fetchedNews = function(items) {
  return {
    type: NEWS_FETCHED,
    items: [...items]
  };
};

export const remoteFetchNews = function() {
  return async dispatch => {
    dispatch(fetchNews());
    const items = await getNews();
    dispatch(fetchedNews(items));
  };
};
