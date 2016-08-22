import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import React from 'react';
import { App, NotFoundPage, Home, AuthenticatedComponent } from '../shared';
import { Login } from '../login';
import { Dashboard } from '../dashboard';

export const routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to="/login" />
    <Route path="/login" component={Login} />
    <Route path="/home" component={AuthenticatedComponent(Home)} />
    <Route path="/dashboard" component={AuthenticatedComponent(Dashboard)} />
    <Route path="*" component={NotFoundPage} />
  </Route>
</Router>);
