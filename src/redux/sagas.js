import { takeLatest } from 'redux-saga/effects';
/* ------------- Types ------------- */
import { LoginTypes } from './LoginRedux/actions';
/* ------------- Sagas ------------- */
import {
  loginSaga,
  logoutSaga,
  registerSaga,
  forgotPasswordSaga,
} from './LoginRedux/saga';

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    takeLatest(LoginTypes.USER_LOGIN, loginSaga),
    takeLatest(LoginTypes.USER_REGISTER, registerSaga),
    takeLatest(LoginTypes.USER_FORGOT, forgotPasswordSaga),
    takeLatest(LoginTypes.USER_LOGOUT, logoutSaga),
  ];
}
