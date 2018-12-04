import { combineReducers } from 'redux';
import { initial_reducer } from './Initial/initial_reducer.js';
import { profile_reducer } from './Profile/profile_reducer.js';
import { credentials_reducer } from './Credentials/credentials_reducer.js';
import { status_reducer } from './Status/status_reducer.js';
import { images_reducer } from './Images/images_reducer.js';

export const Store = combineReducers({
  initial_reducer,
  profile_reducer,
  credentials_reducer,
  images_reducer,
  status_reducer
});
