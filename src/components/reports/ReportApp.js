import React from "react";
import "./ReportApp.css"
import SimpleLineChart from "./SimpleLineChart";
import SimpleBarChart from "./SimpleBarChart";
import SelectServer from "./SelectServer";

import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";


class ReportApp extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state={
            dataServer:"",
            hiddenTitleImage:false
        }
    }


    serverSelected(server_id){
        let currentComponent = this;
        var link = ApiLinks.Report + '/'+ server_id;
        //alert(link);

        var config = {
            headers: { 'Authorization': Auth.getToken() }
        };

        Axios
            .get(link,config)
            .then(function (response) {
                currentComponent.setState({ dataServer: response.data });
                currentComponent.setState({ hiddenTitleImage: true });
            })
            .catch(function (error) {
                currentComponent.setState({ hiddenTitleImage: false });
                currentComponent.setState({ dataServer: "" });
                alert("ERROR");
            });
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

                    <h2 hidden={this.state.hiddenTitleImage} className="text-center"> SAMPLE GRAPHICS</h2>

                    <div className="col-md-6" >
                        <div className="linearGraphicsView">
                            <SimpleLineChart {...this.state}/>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="barGraphicsView">
                            <SimpleBarChart {...this.state}/>
                        </div>
                    </div>

                </div>
                
            </div>
        );
    }
}

  export default (ReportApp);
