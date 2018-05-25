/* eslint-disable import/no-named-as-default */

import { combineReducers } from 'redux';
import user from './UserRedux/reducer';
import login from './LoginRedux/reducer';
import news from './NewsRedux/reducer';

export default combineReducers({
  user,
  login,
  news,
});
