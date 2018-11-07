//<Route path="containers/login" exact component={Login} />

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './containers/utils/PrivateRoute';
import Home from './containers/home/Home';
import Login from './containers/login/Login';
import Register from './containers/register/Register';
import Servers from "./containers/servers/ServerApp";
import Payments from './containers/payments/PaymentApp';
import Tracking from './containers/trackings/TrackingApp';
export default ()=>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <PrivateRoute path="/servers" exact component={Servers} />
    <PrivateRoute path="/payments" exact component={Payments} />
    <PrivateRoute path="/trackings" exact component={Tracking} />
  </Switch>;


