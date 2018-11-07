import React from "react";

class TrackingRow extends React.Component{
    render(){
        return(
            <li>
                <p className={"TrackingRow"}>
                    id: {this.props.id}<br/>
                    status: {this.props.status}<br/>
                    updateAt: {this.props.updateAt}<br/>
                </p>
            </li>
        );
    }
}

export default TrackingRow;