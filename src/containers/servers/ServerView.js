import React,{Component} from "react";
import query from "./Constants";
import ServerList from "./query-servers/Server-list";
import SingleServer from "./query-servers/Server-list";

function deleteServer(){
    alert("deleteServer");
}


function resetToken(){
    alert("resetToken");
}


function getSingleServer(){
    alert("getSingleServer");
}

function updateServer(){
    alert("updateServer");
}

function createServer(){
    alert("createServer");
}



class ServerView extends Component{
    constructor(props, context) {
        super(props, context);
        
        this.state = ({queryServer: false});
    }
    
    handleQuery(codQuery,data){
        switch(codQuery){
            case query.ALL_SERVERS:
                this.setState({queryServer: true});
                break;

            case query.DELETE_SERVER:
                deleteServer(data);
                break;

            case query.RESET_TOKEN:
                resetToken(data);
                break;

            case query.SINGLE_SERVER:
                getSingleServer(data);
                break;

            case query.UPDATE_SERVER:
                updateServer(data);
                break;

            case query.CREATE_SERVER:
                createServer(data);
                break;

            default: break;

        }
    }


    componentWillReceiveProps(nextProps){
        this.handleQuery(nextProps.codQuery,nextProps.data)
        this.setState({queryServer : true});
    }

    render(){
        if(this.state.queryServer){
            return(
                <ServerList />
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