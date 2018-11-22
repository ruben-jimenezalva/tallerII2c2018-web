import React from "react";
import ABMPayment from "./ABM-payment";
import "./PaymentApp.css"


class PaymentApp extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="home-page">

                <div className="paymentBar">
                    <h2 className="titlePaymentBar">Payments</h2>
                </div>

                <div className="PaymentView">
                    <ABMPayment/>
                </div>

            </div>
        );
    }
}

  export default (PaymentApp);
