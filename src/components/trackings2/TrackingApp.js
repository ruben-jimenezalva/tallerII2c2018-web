import React from "react";
import ABMTracking from "./ABM-tracking";
import "./TrackingApp.css"


class TrackingApp extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="home-page">

                <div className="trackingBar">
                    <h2 className="titleTrackingBar">Trackings</h2>
                </div>

                <div className="TrackingView">
                    <ABMTracking/>
                </div>

            </div>
        );
    }
}

  export default (TrackingApp);
