import React from "react";
import PaymentMenu from "./PaymentMenu";
import PaymentView from "./PaymentView";
import dataReceived from "./Constants";
import "./PaymentApp.css"


class PaymentApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.click = this.click.bind(this); 

        this.state = {
            codQuery : 0,
            dataSend : dataReceived.DATA_PAYMENT
        };
    }


    click(funcKey,data){
        this.setState({dataSend : data});
        this.setState({codQuery : funcKey});
    }


    render() {
        return (
            <div className="home-page">

                <div className="PaymentBar">
                    <h4 className="titlePaymentBar">Payments</h4>
                </div>

                <div className="PaymentBox">

                    <div className="row">

                        <div className="col-md-8">
                            <div className="PaymentView">
                                <PaymentView codQuery={this.state.codQuery} data={this.state.dataSend}/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="PaymentMenu">
                                <PaymentMenu clicked={this.click}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

  export default (PaymentApp);
