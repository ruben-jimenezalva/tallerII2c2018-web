import React from "react";
import ServerRow from "./Server-row";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";
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
                    <form class="metadataServer">
                        <p> version: {data.metadata.version}</p>
                    </form>
                    <p>
                        {
                            () => {
                                return <ServerRow
                                    id={data.server.id}
                                    _rev={data.server._rev}
                                    createdBy={data.server.createdBy}
                                    createdTime={data.server.createdTime}
                                    name={data.server.name}
                                    lastConnection={data.server.lastConnection} />
                            }
                        }
                    </p>

                        {
                            ()=>{
                                if(data.token){
                                    return
                                    <form class="tokenServer">
                                        <p> expiresAt: {data.token.expiresAt}</p>
                                        <p> token: {data.token.token}</p>
                                    </form>
                                }
                            }
                        }
                </ul>
            );

        } else {
            return <p className="text-center">Error to Connect</p>
        }
    }
}

export default serverList;