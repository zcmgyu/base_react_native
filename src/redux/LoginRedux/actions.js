import { createAction } from '../../utils/ReduxUtils';

export const LoginTypes = {
  USER_LOGIN: 'USER_LOGIN',
  USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
  USER_LOGIN_FAILURE: 'USER_LOGIN_FAILURE',
  USER_GET_INFOR: 'USER_GET_INFOR',
  USER_GET_INFOR_SUCCESS: 'USER_GET_INFOR_SUCCESS',
  USER_GET_INFOR_FAILURE: 'USER_GET_INFOR_FAILURE',
  USER_REGISTER: 'USER_REGISTER',
  USER_REGISTER_SUCCESS: 'USER_REGISTER_SUCCESS',
  USER_REGISTER_FAILURE: 'USER_REGISTER_FAILURE',
  USER_FORGOT: 'USER_FORGOT',
  USER_FORGOT_SUCCESS: 'USER_FORGOT_SUCCESS',
  USER_FORGOT_FAILURE: 'USER_FORGOT_FAILURE',
  USER_LOGOUT: 'USER_LOGOUT',
};

const login = data => createAction(LoginTypes.USER_LOGIN, { data });
const loginSuccess = (response, role) =>
  createAction(LoginTypes.USER_LOGIN_SUCCESS, { response, role });
const loginFailure = err =>
  createAction(LoginTypes.USER_LOGIN_FAILURE, { err });
const register = data => createAction(LoginTypes.USER_REGISTER, { data });
const registerSuccess = response =>
  createAction(LoginTypes.USER_REGISTER_SUCCESS, { response });
const registerFailure = err =>
  createAction(LoginTypes.USER_REGISTER_FAILURE, { err });
const getInfor = data => createAction(LoginTypes.USER_GET_INFOR, { data });
const getInforSuccess = response =>
  createAction(LoginTypes.USER_GET_INFOR_SUCCESS, { response });
const getInforFailure = err =>
  createAction(LoginTypes.USER_GET_INFOR_FAILURE, { err });
const forgotPassword = data => createAction(LoginTypes.USER_FORGOT, { data });
const forgotPasswordSuccess = response =>
  createAction(LoginTypes.USER_FORGOT_SUCCESS, { response });
const forgotPasswordFailure = err =>
  createAction(LoginTypes.USER_FORGOT_FAILURE, { err });
const logout = data => createAction(LoginTypes.USER_LOGOUT, { data });

export default {
  login,
  loginSuccess,
  loginFailure,
  register,
  registerSuccess,
  registerFailure,
  forgotPassword,
  forgotPasswordSuccess,
  forgotPasswordFailure,
  getInfor,
  getInforSuccess,
  getInforFailure,
  logout,
};
