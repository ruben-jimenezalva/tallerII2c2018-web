import React from "react";

class PaymentRow extends React.Component{
    render(){
        return(
            <li>
                <p className={"PaymentRow"}>
                    transaction_id: {this.props.transaction_id}<br/>
                    currency: {this.props.currency}<br/>
                    value: {this.props.value}<br/>
                    status: {this.props.status}<br/>
                    paymentMethod:<br/>
                    &nbsp; epiration_month: {this.props.expiration_month}<br/>
                    &nbsp; expiration_year: {this.props.expiration_year}<br/>
                    &nbsp; method: {this.props.method}<br/>
                    &nbsp; number: {this.props.number}<br/>
                    &nbsp; type: {this.props.type}<br/>
                </p>
            </li>
        );
    }
}

export default PaymentRow