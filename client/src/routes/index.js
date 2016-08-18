import { Router, Route, IndexRedirect, hashHistory } from 'react-router';
import React from 'react';
import { App } from '../shared';
import { Login } from '../login';

export const routes = (<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRedirect to="/login" />
    <Route path="/login" component={Login} />
  </Route>
</Router>);
