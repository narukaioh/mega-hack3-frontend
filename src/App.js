import React from 'react';
import { ROUTES_CONFIG } from './routes/config';
import Router from './routes/Router';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="container">
      <Router routes={ROUTES_CONFIG} />
    </div>
  );
}

export default App;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();