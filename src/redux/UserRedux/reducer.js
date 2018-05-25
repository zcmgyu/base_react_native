import Immutable from 'seamless-immutable';
import { createReducer } from '../../utils/ReduxUtils';
import { LoginTypes } from './../LoginRedux/actions';

export const INITIAL_STATE = Immutable({
  isLogined: false,
  data: null,
  access_token: null,
  basketId: null,
});

export const loginSuccess = (state, { response }) =>
  state.merge({
    isLogined: true,
    data: response.Data,
    access_token: response.Token.access_token,
    basketId: response.Data.Basket.Id,
  });

export const registerSuccess = (state, { response }) =>
  state.merge({
    isLogined: true,
    data: response.Data,
    access_token: response.Token.access_token,
  });

export const getInforSuccess = (state, { response }) =>
  state.merge({ basketId: response.Basket.Id });

export const logout = state => state.merge({ ...INITIAL_STATE });

const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.USER_REGISTER_SUCCESS]: registerSuccess,
  [LoginTypes.USER_GET_INFOR_SUCCESS]: getInforSuccess,
  [LoginTypes.USER_LOGOUT]: logout,
});

export default reducer;
