import React from 'react';
import { ROUTES_CONFIG } from './routes/config';
import Router from './routes/Router';
import './components/style.scss';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <>
      <Router routes={ROUTES_CONFIG} />
    </>
  );
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();