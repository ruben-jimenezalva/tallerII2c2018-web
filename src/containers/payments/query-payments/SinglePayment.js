import React from "react";
import PaymentRow from "./PaymentRow";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";
import code from "../Constants"

class SinglePayment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {payment: ""};
    }


    getSinglePayment(data){

        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Payments+"/"+ data.transaction_id;

        Axios
            .get(link, config)
            .then(function (response) {
                currentComponent.setState({payment: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updatePayment(data){
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Payments+"/"+ data.transaction_id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({payment: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    createPayment(data){
        /*var config = {
            headers: {'Authorization':Auth.getToken()}
        };

        let currentComponent = this;
        var link = ApiLinks.Payments;

        Axios
            .post(link, data,config)
            .then(function (response) {
                currentComponent.setState({payment: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    handleQuery(cod,data){

        switch(cod){
            case code.SINGLE_PAYMENT:
                this.getSinglePayment(data);
                break;

            case code.UPDATE_PAYMENT:
                this.updatePayment(data);
                break;

            case code.CREATE_PAYMENT:
                this.createPayment(data);
                break;

            default: break;
        }
    }



    componentWillMount() {
        this.handleQuery(this.props.codQuery,this.props.data);
    }

    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }

    render() {

        if (this.state.payment !== "") {
            var data = this.state.payment;

            return<ul>
                <PaymentRow
                transaction_id={data.transaction_id}
                currency={data.currency}
                value={data.value}
                status={data.status}
                epiration_month={data.paymentMethod.expiration_month}
                expiration_year={data.paymentMethod.expiration_year}
                method={data.paymentMethod.method}
                number={data.paymentMethod.number}
                type={data.paymentMethod.type}></PaymentRow>
            </ul>

        } else {
            return <p className="text-center">Not Results</p>
        }
    }
}

export default SinglePayment;