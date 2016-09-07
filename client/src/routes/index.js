import { Router, Route, IndexRedirect,
  hashHistory, browserHistory } from 'react-router';
import React from 'react';
import { App, NotFoundPage, Home, ComponentDecorator } from '../shared';
import { Login } from '../login';
import { Dashboard } from '../dashboard';
import { News } from '../news';
import { getItemFromLocalstorage } from '../middleware';

const validateLocation = (location, prevLocation) => {
  return (location && location.pathname.indexOf('login') >= 0)
    || (prevLocation && prevLocation.pathname.indexOf('login') >= 0);
};

const validateLoginLocation = (location) => {
  return (location && location.pathname.indexOf('login') <= 0);
};

const checkLoginRoute = function(prev, next) {
  const isAuth = getItemFromLocalstorage('user');
  const { location } = next;
  const { location: prevLocation } = prev;
  if (Object.keys(isAuth).length === 0
    && validateLoginLocation(!!location ? location : prevLocation)) {
    browserHistory.push('#/login');
  } else if (Object.keys(isAuth).length > 0
    && validateLocation(location, prevLocation)) {
    browserHistory.push('#/home');
  }
};

export const routes = (<Router history={hashHistory}>
  <Route path="login" component={Login} />
  <Route
    path="/" component={ComponentDecorator(App)}
    onChange={checkLoginRoute}
    onEnter={checkLoginRoute}>
    <IndexRedirect to="/home" />
    <Route path="/news" component={News} />
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </Route>
</Router>);
