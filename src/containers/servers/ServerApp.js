import React from "react";
import ServerMenu from "./ServerMenu";
import ServerView from "./ServerView";
import "./ServerApp.css"



const Algo = props => {
    return(
        <div>
                <ServerView />
                <p>HOLAAAA</p>
                <br />
                <br />
                admo
                <br />
                dasdasa
                fas
                <br />
                <br />
                asdad
                <br />
                admo
                <br />
                <br />
                dasdasa
                <br />
                fas
                <br />
                asdad
                <br />
                admo
                <br />
                dasdasa
                fas
                <br />
                asdad
                <p>HOLAAAA</p>
                <br />
                admo
                dasdasa
                fas
                <br />
                asdad
                admo
                <br />
                <br />
                dasdasa
                <br />
                fas
                <br />
                asdad
                <br />
                admo
                <br />
                dasdasa
                fas
                <br />
                asdad
        </div>
    );
}


class ServerApp extends React.Component {
  
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
                                <Algo />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="sidebar">
                                <ServerMenu />
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }
}

  export default ServerApp;
