import React from "react";
import ServerMenu from "./ServerMenu";
import ServerView from "./ServerView";
import dataReceived from "./Constants";
import "./ServerApp.css"

class ServerApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.click = this.click.bind(this); 

        this.state = {
            codQuery : 0,
            dataSend : dataReceived.DATA_FORMAT
        };
    }


    click(funcKey,data){
        this.setState({dataSend : data});
        this.setState({codQuery : funcKey});
    }


    render() {
        return (
            <div className="home-page">

                <div className="serverBar">
                    <h4 className="titleServerBar">Servers</h4>
                </div>

                <div className="serverBox">

                    <div className="row">

                        <div className="col-md-8">
                            <div className="ServerView">
                                <ServerView codQuery={this.state.codQuery} data={this.state.dataSend}/>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="ServerMenu">
                                <ServerMenu clicked={this.click}/>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

  export default (ServerApp);
