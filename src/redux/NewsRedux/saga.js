import { put, call } from 'redux-saga/effects';
import LoginActions from './actions';
import { login } from '../../api/auth';

export function* fetchNews({ data }) {
  try {
    const response = yield call(login, data);
    yield put(LoginActions.fetchNewsSuccess(response));
    // const responseGetInfor = yield call(getInfor);
    // if (responseGetInfor.Basket) yield put(LoginActions.getInforSuccess(responseGetInfor));
  } catch (error) {
    yield put(LoginActions.fetchNewsFailure(error));
  }
}
