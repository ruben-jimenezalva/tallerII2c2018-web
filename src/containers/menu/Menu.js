import React, {Component} from "react";
import auth  from "../utils/auth";

class Menu extends Component{

    render(){
        return(
            <div className ="Menu">
                <h1>WELCOME ADMINISTRATOR OF COMPRAME</h1>
                <h3>NOW ADMIN IT...</h3>
                <p>{auth.getToken()}</p>
                <p>SHOW TOKEN</p>
            </div>
        );
    }
}

export default Menu;
