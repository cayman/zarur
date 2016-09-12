import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
// import { Router, Route, browserHistory } from 'react-router';

import { Provider } from 'react-redux';

import { createStore, applyMiddleware, compose} from 'redux';

import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import rootReducer from './reducers';
import App from 'components/App';


const middlewares = [thunk,promise];
let devtool;


if (process.env.NODE_ENV !== 'production') { // no-undef: 0
  const logger = createLogger({
    duration: true
  });
  middlewares.push(logger);

  // devtools - redux-chrome extension
  devtool = window.devToolsExtension ? window.devToolsExtension() : undefined;
}

const hmrData = module.hot && module.hot.data && module.hot.data;

const store = createStore(
  rootReducer ,
  hmrData || {},
  devtool ?
  compose(
    devtool,
    applyMiddleware(...middlewares)
  ):
    applyMiddleware(...middlewares)
);


if (module.hot) {
  module.hot.accept('./reducers', () => {
    const reducers = require('./reducers').default; // eslint-disable-line
    store.replaceReducer(reducers);
  });
  module.hot.accept();

  module.hot.dispose((data) => {
    data.count = store.getState().count;
    data.posts = store.getState().posts;
    [].slice.apply(document.querySelector('#app').children).forEach(function(c) { c.remove() });
  });
}

const load = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.querySelector('#app')
  );
};

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {
  load();
}
