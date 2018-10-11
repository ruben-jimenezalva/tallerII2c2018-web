import React, { Component } from "react";
import auth from "../utils/auth";
import { Navbar, Nav, NavItem } from "react-bootstrap";
class Menu extends Component {

    handleSelect = async event =>{
        console.log("HOLA");
    }

    render() {
        return (
            <div className="Menu">
                <h1>WELCOME ADMINISTRATOR OF COMPRAME</h1>
                <h3>NOW ADMIN IT...</h3>
                <p>TOKEN:</p>
                <p>{auth.getToken()}</p>
                <Nav bsStyle="pills" stacked onSelect={this.handleSelect}>
                    <NavItem eventKey={1} href="/menu/allservers">
                        GetAllServer
                    </NavItem>
                    <NavItem eventKey={2} title="Item">
                        GetSingleServer
                    </NavItem>
                    <NavItem eventKey={3} title="Algo">
                        ...?
                    </NavItem>
                </Nav>
            </div>
        );
    }
}

export default Menu;
