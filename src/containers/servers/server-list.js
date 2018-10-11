//const React = import("react");
import React from "react"
import ServerRow from "./server-row"
//const ServerRow = import("./server-row");

class serverList extends React.Component{
    render(){
        return(
            <ul>
                <p> total: {this.props.data.metadata.total}</p>
                <p> total: {this.props.data.metadata.version}</p>
                <p>
                    {
                        this.props.data.servers.map((server)=>{
                            return <ServerRow 
                            id = {server.id}
                            _rev = {server._rev}
                            createdBy = {server.createdBy}
                            createdTime = {server.createdTime}
                            name = {server.name}
                            lastConnection = {server.lastConnection} />
                        })
                    }
                </p>
            </ul>
        );
    }
}

export default serverList