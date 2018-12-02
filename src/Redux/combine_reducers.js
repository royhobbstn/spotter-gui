import { combineReducers } from 'redux';
import initial_reducer from './Initial/initial_reducer.js';
import configure_reducer from './Configure/configure_reducer.js';
import setup_reducer from './Setup/setup_reducer.js';
import status_reducer from './Status/status_reducer.js';

export const Store = combineReducers({
  initial_reducer,
  configure_reducer,
  setup_reducer,
  status_reducer
});
