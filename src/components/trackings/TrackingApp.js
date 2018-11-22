import React from "react";
import TrackingMenu from "./TrackingMenu";
import TrackingView from "./TrackingView";
import dataReceived from "./Constants";
import "./TrackingApp.css"


class TrackingApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.click = this.click.bind(this); 

        this.state = {
            codQuery : 0,
            dataSend : dataReceived.DATA_TRACKING
        };
    }


    click(funcKey,data){
        this.setState({dataSend : data});
        this.setState({codQuery : funcKey});
    }


    render() {
        return (
            <div className="home-page">

                <div className="trackingBar">
                    <h4 className="titleTrackingBar">Trackings</h4>
                </div>

                <div className="trackingBox">

                    <div className="row">

                        <div className="col-md-8">
                            <div className="TrackingView">
                                <TrackingView codQuery={this.state.codQuery} data={this.state.dataSend}/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="TrackingMenu">
                                <TrackingMenu clicked={this.click}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

  export default (TrackingApp);
