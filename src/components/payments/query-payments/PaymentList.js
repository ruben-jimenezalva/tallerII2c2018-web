import React from "react";
import PaymentRow from "./PaymentRow";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";

class PaymentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { payments: "",
            responseError:false
        };
    }

    componentWillMount() {
        this.setState({responseError: false});
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.Payments, config)
            .then(function (response) {
                currentComponent.setState({payments: response.data});
                if(response.data.length === 0)
                    currentComponent.setState({responseError: true});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError:true})
            });
    }

    render() {

        if(this.state.responseError){
            return <p className="text-center">Not Results</p>

        }else if (this.state.payments !== "") {

            var data = this.state.payments;
            return (
                <ul>
                    <form>
                        {
                            data.map((payment,i) => {
                                return<PaymentRow key={i}
                                transaction_id={payment.transaction_id}
                                currency={payment.currency}
                                value={payment.value}
                                status={payment.status}
                                epiration_month={payment.paymentMethod.epiration_month}
                                expiration_year={payment.paymentMethod.expiration_year}
                                method={payment.paymentMethod.method}
                                number={payment.paymentMethod.number}
                                type={payment.paymentMethod.type}>
                                </PaymentRow>
                            })
                        }
                    </form>
                </ul>
            );

        } else {
            return <p className="text-center">Loading...</p>
        }
    }
}

export default PaymentList;