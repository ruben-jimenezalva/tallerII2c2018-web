import React from "react";
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";
import PaymentTable from "./PaymentTable";
import ModalEditPayment from "./ModalEditPayment";

export default class ABMPayment extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            row: "",
        }
    }

    onCellEdit(row) {
        this.setState({row:row});
    }

    updatePayment(data) {
        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Payments + "/" + data.transaction_id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({ payment: response.data });
            })
            .catch(function (error) {
                currentComponent.setState({ responseError: true });
                console.log(error);
                alert("Error to update Payment");
            });
        this.setState({row:""});
    }

    render() {
        return (
            <div>
            <ModalEditPayment
                updatePayment={this.updatePayment.bind(this)}
                {...this.state}>
            </ModalEditPayment>
            <PaymentTable
                onCellEdit={this.onCellEdit.bind(this)}
                {...this.state} />
            </div>
      );
    }
}