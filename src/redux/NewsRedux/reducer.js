import Immutable from 'seamless-immutable';
import { NewsTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  messageForgotPassword: '',
  list: [],
  current: {},
});

export const fetch = state => state.merge({ loading: true, error: null });

export const fetchSuccess = (state, { data }) =>
  state.merge({ loading: false, list: data });

export const fetchFailure = (state, { err }) =>
  state.merge({ loading: false, error: err });

export const setCurrent = (state, { data }) => state.merge({ current: data });

const reducer = createReducer(INITIAL_STATE, {
  [NewsTypes.FETCH_NEWS]: fetch,
  [NewsTypes.FETCH_NEWS_SUCCESS]: fetchSuccess,
  [NewsTypes.FETCH_NEWS_FAILURE]: fetchFailure,
  [NewsTypes.SET_CURRENT_NEWS]: setCurrent,
});

export default reducer;
