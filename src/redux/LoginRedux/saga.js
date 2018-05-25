import { put, call } from 'redux-saga/effects';
import LoginActions from './actions';
import { login, logout, register, forgotPassword } from '../../api/auth';

export function* loginSaga({ data }) {
  try {
    const response = yield call(login, data);
    yield put(LoginActions.loginSuccess(response));
    // const responseGetInfor = yield call(getInfor);
    // if (responseGetInfor.Basket) yield put(LoginActions.getInforSuccess(responseGetInfor));
  } catch (error) {
    yield put(LoginActions.loginFailure(error));
  }
}

export function* registerSaga({ data }) {
  try {
    const response = yield call(register, data);
    yield put(LoginActions.registerSuccess(response));
  } catch (error) {
    yield put(LoginActions.registerFailure(error));
  }
}

export function* forgotPasswordSaga({ data }) {
  try {
    const response = yield call(forgotPassword, data);
    yield put(LoginActions.forgotPasswordSuccess(response));
  } catch (error) {
    yield put(LoginActions.forgotPasswordFailure(error));
  }
}

export function* logoutSaga() {
  try {
    yield call(logout);
  } catch (error) {
    console.log(error);
  }
}
