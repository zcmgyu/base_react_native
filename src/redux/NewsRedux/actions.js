import { createAction } from '../../utils/ReduxUtils';

export const NewsTypes = {
  FETCH_NEWS: 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_FAILURE: 'FETCH_NEWS_FAILURE',
  SET_CURRENT_NEWS: 'SET_CURRENT_NEWS',
};

const fetchNews = data => createAction(NewsTypes.FETCH_NEWS, { data });
const fetchNewsSuccess = (response, data) =>
  createAction(NewsTypes.FETCH_NEWS_SUCCESS, { response, data });
const fetchNewsFailure = err =>
  createAction(NewsTypes.FETCH_NEWS_FAILURE, { err });
const setCurrentNews = data =>
  createAction(NewsTypes.SET_CURRENT_NEWS, { data });

export default {
  fetchNews,
  fetchNewsSuccess,
  fetchNewsFailure,
  setCurrentNews,
};
