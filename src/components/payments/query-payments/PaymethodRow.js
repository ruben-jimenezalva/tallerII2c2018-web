import React from "react";

class PaymethodRow extends React.Component{
    render(){
        return(
            <li>
                <p className={"PaymethodRow"}>
                    method: {this.props.method}
                </p>
            </li>
        );
    }
}

export default PaymethodRow;