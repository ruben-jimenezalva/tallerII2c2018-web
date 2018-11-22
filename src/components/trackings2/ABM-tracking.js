import React from "react";
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import TrackingTable from "./TrackingTable";
import ModalEditTracking from "./ModalEditTracking";

export default class ABMTracking extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            row: "",
        }
    }

    onCellEdit(row) {
        this.setState({row:row});
    }

    updateTracking(data) {
        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Trackings + "/" + data.id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({ tracking: response.data });
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to update Tracking");
            });
        this.setState({row:""});
    }

    render() {
        return (
            <div>
            <ModalEditTracking
                updateTracking={this.updateTracking.bind(this)}
                {...this.state}>
            </ModalEditTracking>
            <TrackingTable
                onCellEdit={this.onCellEdit.bind(this)}
                {...this.state} />
            </div>
      );
    }
}