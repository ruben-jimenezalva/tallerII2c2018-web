//<Route path="components/login" exact component={Login} />

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';
//import Servers from "./components/servers/ServerApp";
import Servers from "./components/servers2/serverApp";
//import Payments from './components/payments/PaymentApp';
import Payments from './components/payments2/PaymentApp';
//import Tracking from './components/trackings/TrackingApp';
import Tracking from './components/trackings2/TrackingApp';
export default ()=>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Route path="/register" exact component={Register} />
    <PrivateRoute path="/servers" exact component={Servers} />
    <PrivateRoute path="/payments" exact component={Payments} />
    <PrivateRoute path="/trackings" exact component={Tracking} />
  </Switch>;


