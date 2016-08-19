import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import React from 'react';
import { App } from '../shared';
import { Login } from '../login';
import { Dashboard } from '../dashboard';

export const routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to="/login" />
    <Route path="/login" component={Login} />
    <Route path="/dashboard" component={Dashboard} />
  </Route>
</Router>);
