//const React = import("react");
import React from "react"

class ServerRow extends React.Component{
    render(){
        return(
            <li>
                <div>
                    id: {this.props.id}
                    _rev: {this.props._rev}
                    createdBy: {this.props.createdBy}
                    createdTime: {this.props.createdTime}
                    name: {this.props.name}
                    lastConnection: {this.props.lastConnection}
                </div>
            </li>
        );
    }
}

export default ServerRow