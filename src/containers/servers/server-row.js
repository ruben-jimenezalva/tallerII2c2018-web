//const React = import("react");
import React from "react";
import "./server-row.css";

class ServerRow extends React.Component{
    render(){
        return(
            <li>
                <div class="serverRow">
                    <p>id: {this.props.id}</p>
                    <p>_rev: {this.props._rev}</p>
                    <p>createdBy: {this.props.createdBy}</p>
                    <p>createdTime: {this.props.createdTime}</p>
                    <p>name: {this.props.name}</p>
                    <p>lastConnection: {this.props.lastConnection}</p>
                </div>
            </li>
        );
    }
}

export default ServerRow