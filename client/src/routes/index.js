import { Router, Route, IndexRedirect,
  hashHistory, browserHistory } from 'react-router';
import React from 'react';
import { App, NotFoundPage, Home, AuthenticatedComponent } from '../shared';
import { Login } from '../login';
import { Dashboard } from '../dashboard';
import { getItemFromLocalstorage } from '../middleware';

const checkLoginRoute = function(prev, next) {
  const isAuth = getItemFromLocalstorage('user');
  const { location } = next;
  const { location: prevLocation } = prev;
  if (isAuth.password && (
    (location && location.pathname.indexOf('login') >= 0)
    || (prevLocation && prevLocation.pathname.indexOf('login') >= 0))) {
    browserHistory.push('#/dashboard');
  }
};

export const routes = (<Router history={hashHistory}>
  <Route
    path="/" component={App}
    onChange={checkLoginRoute}
    onEnter={checkLoginRoute}>
    <IndexRedirect to="/login" />
    <Route path="/login" component={Login} />
    <Route path="/home" component={AuthenticatedComponent(Home)} />
    <Route path="/dashboard" component={AuthenticatedComponent(Dashboard)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
</Router>);
