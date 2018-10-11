//const React = import("react");
//const axios = import("axios");
//const ServerList = import ("./server-list");

import React from "react"
import Axios from "axios"
import ServerList from "./server-list"

const url = "http://localhost:8080"


class serverApp extends React.Component{
    constructor(props){
        super(props)
        this.state = {servers:"", errorMessage:""};
    }

    componentWillMount(){
        Axios
        .get(url+"/api/servers")
        .then(function(response) {
            this.setState({servers:response});
        })
        .catch(function(error) {
            console.log(error);
        });
    }


    render(){
        if(this.state.servers != ""){
            return (
                <div className="container-fluid">
                    <ServerList data={this.state.servers} />
                </div>
                )
        }else{
            return <p className="text-center">Loading Servers...</p>
        }
    }

}

export default serverApp