import React from "react";
import ABMServer from "./ABM-server";
import "./ServerApp.css"


class ServerApp extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="home-page">

                <div className="serverBar">
                    <h2 className="titleServerBar">Servers</h2>
                </div>

                <div className="ServerView">
                    <ABMServer/>
                </div>

            </div>
        );
    }
}

  export default (ServerApp);
