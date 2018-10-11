import React from "react";
import ServerRow from "./server-row";
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import "./server-list.css"

class serverList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { servers: "", errorMessage: "" };
    }

    componentWillMount() {
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.GetAllServers, config)
            .then(function (response) {
                currentComponent.setState({servers: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {

        if (this.state.servers !== "") {
            var data = this.state.servers;
            return (
                <ul>
                    <form class="metadataServers">
                        <p> total: {data.metadata.total}</p>
                        <p> version: {data.metadata.version}</p>
                    </form>
                    <p>
                        {
                            data.server.map((server) => {
                                return <ServerRow
                                    id={server.id}
                                    _rev={server._rev}
                                    createdBy={server.createdBy}
                                    createdTime={server.createdTime}
                                    name={server.name}
                                    lastConnection={server.lastConnection} />
                            })
                        }
                    </p>
                </ul>
            );

        } else {
            return <p className="text-center">Error to Connect</p>
        }
    }
}

export default serverList;