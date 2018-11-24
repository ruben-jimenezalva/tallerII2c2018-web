import React from "react";
import "./ReportApp.css"
import SincronizedChart from "./SincronizedChart";
import SimpleBarChart from "./SimpleBarChart";
import SelectServer from "./SelectServer";

class ReportApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            server:""
        }
    }


    serverSelected(server_id){
        //this.setState({server:server});
        alert(server_id);
    }


    render() {
        return (
            <div className="home-page">

                <div className="reportBar">
                    <h2 className="titleReportBar">Reports</h2>
                </div>

                <div className="select">
                    <SelectServer serverSelected={this.serverSelected.bind(this)}/>
                </div>

                <div className="row">

                    <div className="col-md-6" >
                        <div className="linearGraphicsView">
                            <p>HOLA...</p>
                            <SincronizedChart/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="barGraphicsView">
                            <p>HOLA...</p>
                            <SimpleBarChart/>
                            <p>HOLA...</p>
                            <SimpleBarChart/>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

  export default (ReportApp);
