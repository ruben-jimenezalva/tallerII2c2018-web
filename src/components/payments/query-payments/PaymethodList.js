import React from "react";
import PaymethodRow from "./PaymethodRow";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";

class PaymenthodList extends React.Component {
    constructor(props) {
        super(props)    
        this.state = { paymethods: "",
            responseError: false
        };
    }

    componentWillMount() {
        this.setState({responseError: false});
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.Paymethods, config)
            .then(function (response) {
                currentComponent.setState({paymethods: response.data});
                if(response.data.length === 0)
                    currentComponent.setState({responseError: true});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError:true});
            });
    }

    render() {

        if(this.state.responseError) {
            return <p className="text-center">Not Results</p>
        
        }else if (this.state.paymethods !== "") {
            var data = this.state.paymethods;
            return (
                <ul>
                    <form className="metadataPaymethod">
                        <p> paymethod: {data.paymentMethod}</p>
                        <p> parameters: </p>
                    </form>
                    <p/>
                    <form>
                        {
                            data.parameters.map((methodPay,i) => {
                                return<PaymethodRow key={i}
                                        method={methodPay.method}>
                                    </PaymethodRow>
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

export default PaymenthodList;