import React,{Component} from "react";
import query from "./Constants";
import ServerList from "./query-servers/Server-list";
import SingleServer from "./query-servers/SingleServer";


class ServerView extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = (
            {optionListServer: false},
            {optionSingleServer: false},
            {dataToSend : ""},
            {codQuery : ""}
        );
    }
    

    handleQuery(cod,data){

        this.setState({dataToSend : data});
        this.setState({codQuery : cod});
        
        switch(cod){
            case query.ALL_SERVERS:
                this.setState({optionListServer: true});
                this.setState({optionSingleServer: false});
                break;

            case query.DELETE_SERVER:
            case query.RESET_TOKEN:
            case query.SINGLE_SERVER:
            case query.UPDATE_SERVER:
            case query.CREATE_SERVER:
                this.setState({optionSingleServer: true});
                this.setState({optionListServer: false});
                break;

            default: break;

        }
    }

    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data);
    }


    render(){

        if(this.state.optionListServer){
            return(
                <ServerList />
            );
        }else if (this.state.optionSingleServer){
            return(
                <SingleServer codQuery={this.state.codQuery} data={this.state.dataToSend}/>
            );
        }
        return(
            <div>
                <h1>
                    SELECT ONE OPTION 
                </h1>
            </div>
        );
    }
}

export default ServerView;