import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import React from 'react';
import { App, NotFoundPage, Home } from '../shared';
import { Login } from '../login';
import { Dashboard } from '../dashboard';

export const routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to="/login" />
    <Route path="/login" component={Login} />
    <Route path="/home" component={Home} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="*" component={NotFoundPage} />
  </Route>
</Router>);
