import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom"
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(  
  <BrowserRouter>
    <App />
  </BrowserRouter>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




//var ControlList = import("./components/control-list/ControlList");
//import ControlList from "./components/controls/control-list";

/*
let controls = [
    { name: "get All Servers", description: "description 2"},
    { name: "get Single Server", description: "description 1"},
    { name: "get Payments", description: "pay"},
    //{ name: "", description: ""},
    //{ name: "", description: ""},
    //{ name: "", description: ""},
    //{ name: "", description: ""},
    //{ name: "", description: ""},
    //{ name: "", description: ""},
  ]
  
  ReactDOM.render(<ControlList list={ controls } />, document.getElementById('application'))
*/

//import ServerApp from './containers/servers/serverApp'
//import Routes from "./Routes";
//import Login from "./containers/login/Login";

//response = Routes

//ReactDOM.render(<Login />, document.getElementById('application'))
//ReactDOM.render(<Routes />, document.getElementById('root'))


