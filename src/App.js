import React, { Component, Fragment } from "react";
import Routes from "./Routes";
import Auth from "./containers/utils/auth";
import Header from './Header';
import "./App.css";

class App extends Component {

  handleLogout = async event => {
    Auth.clearSession();
  }

  render() {
    return (
      <div className="App container">
        <Header />
        <footer className="footerApp">
            Taller de Programación II  Derechos reservados &copy; 2C-2018                  
        </footer>
        <Routes />
      </div>
    );
  }
}

export default App;
