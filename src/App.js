import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Routes from "./Routes";
import Auth from "./containers/utils/auth";
import "./App.css";

class App extends Component {

  handleLogout = async event => {
    Auth.clearSession();
  }

  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect bsStyle="inverse">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {Auth.isAuthenticated() ?
                <LinkContainer to="/">
                  <NavItem onClick={this.handleLogout}>Logout</NavItem>
                </LinkContainer>
                :
                <Fragment>
                  <LinkContainer to="/register">
                    <NavItem>Register</NavItem>
                  </LinkContainer>
                  <LinkContainer to="/login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </Fragment>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default App;
