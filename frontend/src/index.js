// External dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

// Internal dependencies
import rootReducer from './rootReducer';
import routes from './routes';
import rootSagas from './rootSagas';

//Create a redux router react from browserHistory that belongs to react router
const reduxRouterMiddleware = routerMiddleware(browserHistory);
// Start the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the redux store and add up all necessaries middlewares
const store = createStore(
  rootReducer,
  
  compose(
    applyMiddleware(reduxRouterMiddleware),
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

//Start the sagas
sagaMiddleware.run(rootSagas);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore( browserHistory, store );

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}>
    </Router>
  </Provider>,
  document.getElementById('app')
);

