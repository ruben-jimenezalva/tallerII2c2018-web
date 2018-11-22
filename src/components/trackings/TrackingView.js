import React,{Component} from "react";
import query from "./Constants";
import TrackingList from "./query-trackings/TrackingList";
import SingleTracking from "./query-trackings/SingleTracking";


class TrackingView extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = (
            {optionListTracking: false},
            {optionSingleTracking: false},
            {dataToSend : ""},
            {codQuery : ""}
        );
    }
    

    handleQuery(cod,data){

        this.setState({dataToSend : data});
        this.setState({codQuery : cod});
        
        switch(cod){
            case query.ALL_TRACKINGS:
                this.setState({optionListTracking: true});
                this.setState({optionSingleTracking: false});
                break;

            case query.SINGLE_TRACKING:
            case query.UPDATE_TRACKING:
            case query.CREATE_TRACKING:
                this.setState({optionSingleTracking: true});
                this.setState({optionListTracking: false});
                break;

            default: break;

        }
    }

    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }


    render(){

        if(this.state.optionListTracking){
            return(
                <TrackingList />
            );
        }else if (this.state.optionSingleTracking){
            return(
                <SingleTracking codQuery={this.state.codQuery} data={this.state.dataToSend}/>
            );
        }
        return(
            <div>
                <h1 className="text-center">
                    SELECT ONE OPTION 
                </h1>
            </div>
        );
    }
}

export default TrackingView;