//<Route path="containers/login" exact component={Login} />

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './containers/utils/PrivateRoute';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import Menu from './containers/menu/Menu';
import AllServers from './containers/servers/server-list'

export default ()=>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <PrivateRoute path="/servers" exact component={Menu} />
    <PrivateRoute path="/servers/allservers" exact component={AllServers} />
  </Switch>;


