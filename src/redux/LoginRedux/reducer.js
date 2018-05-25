import Immutable from 'seamless-immutable';
import { LoginTypes } from './actions';
import { createReducer } from '../../utils/ReduxUtils';

export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  messageForgotPassword: '',
});

export const login = state => state.merge({ loading: true, error: null });

export const loginSuccess = state => state.merge({ loading: false });

export const loginFailure = (state, { err }) =>
  state.merge({ loading: false, error: err });

export const register = state => state.merge({ error: null, loading: true });

export const registerSuccess = state => state.merge({ loading: false });

export const registerFailure = (state, { err }) =>
  state.merge({ loading: false, error: err });

export const forgotPassword = state =>
  state.merge({ loading: true, error: null, messageForgotPassword: '' });

export const forgotPasswordSuccess = (state, { response }) =>
  state.merge({ loading: false, messageForgotPassword: response.Message });

export const forgotPasswordFailure = (state, { err }) =>
  state.merge({ loading: false, error: err });

export const logout = state => state.merge({ ...INITIAL_STATE });

const reducer = createReducer(INITIAL_STATE, {
  [LoginTypes.USER_LOGIN]: login,
  [LoginTypes.USER_LOGIN_SUCCESS]: loginSuccess,
  [LoginTypes.USER_LOGIN_FAILURE]: loginFailure,
  [LoginTypes.USER_REGISTER]: register,
  [LoginTypes.USER_REGISTER_SUCCESS]: registerSuccess,
  [LoginTypes.USER_REGISTER_FAILURE]: registerFailure,
  [LoginTypes.USER_FORGOT]: forgotPassword,
  [LoginTypes.USER_FORGOT_SUCCESS]: forgotPasswordSuccess,
  [LoginTypes.USER_FORGOT_FAILURE]: forgotPasswordFailure,
  [LoginTypes.USER_LOGOUT]: logout,
});

export default reducer;
