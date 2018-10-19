import React from "react";

class ServerRow extends React.Component{
    render(){
        return(
            <li>
                <p className={"serverRow"}>
                    id: {this.props.id}<br/>
                    _rev: {this.props._rev}<br/>
                    createdBy: {this.props.createdBy}<br/>
                    createdTime: {this.props.createdTime}<br/>
                    name: {this.props.name}<br/>
                    lastConnection: {this.props.lastConnection}
                </p>
            </li>
        );
    }
}

export default ServerRow