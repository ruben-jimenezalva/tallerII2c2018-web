import React from "react";
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import ServerTable from "./ServerTable";
import ModalEdit from "./ModalEdit";
import { ModalReset } from "./ModalReset";

export default class ABMServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            row: "",
            token:""
        }
    }

    onAddRow(row) {
        this.createServer(row);
    }

    createServer(data) {
        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers;

        Axios
            .post(link, data, config)
            .then(function (response) {
                currentComponent.setState({ server: response.data });
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to create Server");
            });
    }

    onResetServer(row) {
        this.resetTokenServer(row);
    }

    resetTokenServer(data) {

        let currentComponent = this;
        var link = ApiLinks.Servers + "/" + data.id;
        Axios
            .post(link)
            .then(function (response) {
                //currentComponent.setState({ server: response.data });
                currentComponent.setState({token:response.data.server.token.token});
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to reset token Server");
            });
    }


    onDeleteRow(row) {
        for (const index in row) {
            this.deleteServer(row[index]);
        }
    }

    deleteServer(idServer) {
        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers + "/" + idServer;

        Axios
            .delete(link, config)
            .then(function (response) {
                currentComponent.setState({ server: response.data });
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to delete Server");
            });
    }

    onPingServer(row) {
        alert("ping to server: " + row.id);
    }


    onCellEdit(row) {
        this.setState({row:row});
    }

    updateServer(data) {
        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Servers + "/" + data.id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({ server: response.data });
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to update Server");
            });
        this.setState({row:""});
        this.setState({token:""});
    }

    render() {
        return (
            <div>
            <ModalReset {...this.state}/>
            <ModalEdit
                updateServer={this.updateServer.bind(this)}
                {...this.state}>
            </ModalEdit>
            <ServerTable
                onAddRow={this.onAddRow.bind(this)}
                onDeleteRow={this.onDeleteRow.bind(this)}
                onResetServer={this.onResetServer.bind(this)}
                onPingServer={this.onPingServer.bind(this)}
                onCellEdit={this.onCellEdit.bind(this)}
                {...this.state} />
            </div>
      );
    }
}