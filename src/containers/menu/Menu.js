import React, { Component } from "react";
import auth from "../utils/auth";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Menu.css"


class Menu extends Component {

    handleSelect = async event =>{
        console.log("HOLA");
    }

    render() {
        return (
            <div className="Menu">
                <h1>WELCOME ADMINISTRATOR OF COMPRAME</h1>
                <h3>NOW ADMIN IT...</h3>
                <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
                    <NavItem bsClass="navItem" eventKey={1} href="/menu/allservers">
                        GetAllServer
                    </NavItem>
                    <br/>
                    <NavItem eventKey={2} title="Item">
                        GetSingleServer
                    </NavItem>
                    <br/>
                    <NavItem eventKey={4} title="Item">
                        Create Server
                    </NavItem>
                    <br/>
                    <NavItem eventKey={5} title="Item">
                        Update Server
                    </NavItem>
                    <br/>
                    <NavItem eventKey={6} title="Item">
                        Delete Server
                    </NavItem>
                    <br/>
                    <NavItem eventKey={7} title="Item">
                        Reset Token
                    </NavItem>
                    <br/>
                </Nav>
            </div>
        );
    }
}

export default Menu;
