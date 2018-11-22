import React from "react";
import ServerRow from "./Server-row";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";
import code from "../Constants"

class SingleServer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {server: "",
            responseError:false
        };
    }


    getSingleServer(data){

        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers+"/"+ data.id;

        Axios
            .get(link, config)
            .then(function (response) {
                currentComponent.setState({server: response.data});
            })
            .catch(function (error) {
                currentComponent.setState({responseError: true});
                console.log(error);
            });
    }

    deleteServer(data){
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers+"/"+ data.id;

        Axios
            .delete(link, config)
            .then(function (response) {
                currentComponent.setState({server: response.data});
            })
            .catch(function (error) {
                currentComponent.setState({responseError: true});
                console.log(error);
            });
    }

    resetTokenServer(data){

        let currentComponent = this;
        var link = ApiLinks.Servers+"/"+ data.id;
        Axios
            .post(link)
            .then(function (response) {
                currentComponent.setState({server: response.data});
            })
            .catch(function (error) {
                currentComponent.setState({responseError: true});
                console.log(error);
            });
    }



    updateServer(data){
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers+"/"+ data.id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({server: response.data});
            })
            .catch(function (error) {
                currentComponent.setState({responseError: true});
                console.log(error);
            });

    }

    createServer(data){
        var config = {
            headers: {'Authorization':Auth.getToken()}
        };

        let currentComponent = this;
        var link = ApiLinks.Servers;

        Axios
            .post(link, data,config)
            .then(function (response) {
                currentComponent.setState({server: response.data});
            })
            .catch(function (error) {
                currentComponent.setState({responseError: true});
                console.log(error);
            });
    }

    handleQuery(cod,data){

        switch(cod){
            case code.DELETE_SERVER:
                this.deleteServer(data);
                break;

            case code.RESET_TOKEN:
                this.resetTokenServer(data);
                break;

            case code.SINGLE_SERVER:
                this.getSingleServer(data);
                break;

            case code.UPDATE_SERVER:
                this.updateServer(data);
                break;

            case code.CREATE_SERVER:
                this.createServer(data);
                break;

            default: break;

        }
    }

    componentWillMount() {
        this.handleQuery(this.props.codQuery,this.props.data);
    }

    componentWillReceiveProps(nextProps){
        this.setState({responseError: false});
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }

    render() {

        if (this.state.responseError) {
            return <p className="text-center">Not Results</p>            

        }else if (this.state.server !== "") {
            var data = this.state.server;
            if(data.server && data.server.token){

                return <ul>

                    <p> version: {data.metadata.version}</p>
                    
                    <ServerRow
                    id={data.server.server.id}
                    _rev={data.server.server._rev}
                    createdBy={data.server.server.createdBy}
                    createdTime={data.server.server.createdTime}
                    name={data.server.server.name}
                    lastConnection={data.server.server.lastConnection} />

                    <p> expiresAt: {data.server.token.expiresAt}</p>
                    <p> token: {data.server.token.token}</p>
                </ul>

            }else if (data.server){

                return <ul>

                    <p> version: {data.metadata.version}</p>

                    <ServerRow
                    id={data.server.id}
                    _rev={data.server._rev}
                    createdBy={data.server.createdBy}
                    createdTime={data.server.createdTime}
                    name={data.server.name}
                    lastConnection={data.server.lastConnection} />
                    </ul>
                    
            }else{
                return <p className="text-center" >
                    {data.message}
                </p>
            }

        } else {
            return <p className="text-center">Loading...</p>
        }
    }
}

export default SingleServer;