import React from "react";
import TrackingRow from "./TrackingRow";
import Axios from "axios";
import ApiLinks from "../../utils/ApiLinks";
import Auth from "../../utils/auth";
import code from "../Constants"

class SingleTracking extends React.Component {
    constructor(props) {
        super(props)
        this.state = {tracking: ""};
    }


    getSingleTracking(data){

        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Trackings+"/"+ data.id;

        Axios
            .get(link, config)
            .then(function (response) {
                currentComponent.setState({tracking: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    updateTracking(data){
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;
        var link = ApiLinks.Trackings+"/"+ data.id;

        Axios
            .put(link, data, config)
            .then(function (response) {
                currentComponent.setState({tracking: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    createTracking(data){
        /*var config = {
            headers: {'Authorization':Auth.getToken()}
        };

        let currentComponent = this;
        var link = ApiLinks.Trackings;

        Axios
            .post(link, data,config)
            .then(function (response) {
                currentComponent.setState({tracking: response.data});
            })
            .catch(function (error) {
                console.log(error);
            });*/
    }

    handleQuery(cod,data){

        switch(cod){

            case code.SINGLE_TRACKING:
                this.getSingleTracking(data);
                break;

            case code.UPDATE_TRACKING:
                this.updateTracking(data);
                break;

            case code.CREATE_TRACKING:
                this.createTracking(data);
                break;

            default: break;

        }
    }

    componentWillMount() {
        this.handleQuery(this.props.codQuery,this.props.data);
    }

    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }

    render() {

        if (this.state.tracking !== "") {
            var data = this.state.tracking;

            return <ul>
                <TrackingRow
                id={data.id}
                updateAt={data.updateAt}
                status={data.status}/>
                </ul>
        } else {
            return <p className="text-center">Not Results</p>
        }
    }
}

export default SingleTracking;