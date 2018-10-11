import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Axios from "axios";
import "./Register.css";
var ApiLinks = require("../utils/ApiLinks");

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  validateForm() {
    var expReg =/^.*@.*\.com/;
    return this.state.username.length > 0 
    && this.state.password.length > 0
    && expReg.exec(this.state.email);
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async event => {
    event.preventDefault();
    Axios.post(ApiLinks.Register,
      {username:this.state.username, password:this.state.password})
      .then(res => {
        this.redirectUser();
      })
      .catch(error => {
        alert("Error to Login");
      })
  }

  redirectUser = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="Register">
        <form onSubmit={this.handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Username</ControlLabel>
            <FormControl
              autoFocus
              type="username"
              value={this.state.username}
              onChange={this.handleChange}/>
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"/>
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit">
            Register
          </Button>
        </form>
      </div>
    );
  }
}
