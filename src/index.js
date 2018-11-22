import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from './AppContainer';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Store } from './Redux/combine_reducers';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  Store,
  composeEnhancer(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
      <AppContainer />
  </Provider>,
  document.getElementById('root')
);