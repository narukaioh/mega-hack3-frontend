import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export const hasRoutes = (routes) => {
  if (routes && routes.length > 0) {
    return true;
  }
  return false;
};

const getRoutes = (routes) => {
  if (hasRoutes(routes)) {
    return routes.map((route, i) => (
      <Route
        key={i}
        path={route.path}
        exact={route.exact}
        component={route.component}
      />
    ));
  }
  throw new Error('Routes component require routes as props')
}

const Router = ({ routes }) => (
  <BrowserRouter>
    <Switch>{getRoutes(routes)}</Switch>
  </BrowserRouter>
)

export default Router
