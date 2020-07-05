import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './components/style.scss';

const history = createBrowserHistory();
ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
