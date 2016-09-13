import 'babel-polyfill';
import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
// import { Router, Route, browserHistory } from 'react-router';

import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import App from 'components/App';
import rootReducer from './reducers';
import {fetchPosts} from "./actions/posts";
import {fetchTaxonomy} from "./actions/taxonomy";

var injectTapEventPlugin = require("react-tap-event-plugin");

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

store.dispatch(fetchPosts());
store.dispatch(fetchTaxonomy());


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

injectTapEventPlugin();

if (document.readyState !== 'complete') {
  document.addEventListener('DOMContentLoaded', load);
} else {

  load();
}
