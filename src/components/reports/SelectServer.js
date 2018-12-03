import React from 'react';
import {Form, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import Axios from "axios";
import ApiLinks from "../utils/ApiLinks";
import Auth from "../utils/auth";

class SelectServer extends React.Component{
    constructor(props) {
        super(props);
        this.state = { 
            servers:"",
            serverSelected:""
        };
    }

    componentWillMount() {
        this.setState({servers: ""});
        this.setState({responseError: false});
        var config = {
            headers: { 'Authorization':Auth.getToken() }
        };

        let currentComponent = this;

        Axios
            .get(ApiLinks.Servers, config)
            .then(function (response) {
                currentComponent.setState({servers: response.data.server});
            })
            .catch(function (error) {
                console.log(error);
                currentComponent.setState({responseError: true});
                this.props.serverSelected("");
            });
    }


    handleChange = event =>{
        this.props.serverSelected(event.target.value)            
    }

    render(){
        if(this.state.servers === "" || this.state.responseError){
            return<p>
                Not Results
            </p>
        }else{
            return(
                <Form>
                    <FormGroup 
                        onChange={this.handleChange}
                        controlId="serverSelected">
                        <ControlLabel>Select a Server</ControlLabel>
                        <FormControl componentClass="select" placeholder="select">
                        <option value="select">select</option>
                        {
                            this.state.servers.map((server,i) =>{
                                return<option value={server.id}>
                                    {server.name}
                                </option> 
                            })
                        }
                        </FormControl >
                    </FormGroup>
                </Form>
            );
        }
    }
};

export default SelectServer;