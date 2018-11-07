import React, { Component } from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Nav, NavItem } from "react-bootstrap";
import selKey from "./Constants";

class Menu extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = { 
            showSingleForm: false,
            showFullForm: false,
            selectedKey: 0,
            id_server :"",
            name_server :"",
            createdBy_server :"",
            lastConection_server:"",
            createdTime_server :"",
            _rev_server :""
        };
    }


    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        });
    }


    handleShow(selectedKey) {

        this.setState({ selectedKey: selectedKey });

        switch (selectedKey) {

            case selKey.ALL_SERVERS:
                this.props.clicked(selectedKey);
                break;

            case selKey.CREATE_SERVER:
            case selKey.UPDATE_SERVER:
                this.setState({ showFullForm: true });
                break;

            case selKey.DELETE_SERVER:
            case selKey.RESET_TOKEN:
            case selKey.SINGLE_SERVER:
                this.setState({ showSingleForm: true });
                break;

            default: break;
        }
    }

    handleHide() {
        this.setState({ showFullForm: false });
        this.setState({ showSingleForm: false });        
    }

    handleDone() {
        var dataToSend = selKey.DATA_FORMAT;
        dataToSend.id = this.state.id_server; 
        dataToSend.createdBy = this.state.createdBy_server;
        dataToSend.name =  this.state.name_server;
        dataToSend.lastConection = this.state.lastConection_server;
        dataToSend.createdTime = this.state.createdTime_server;
        dataToSend._rev = this.state._rev_server;

        this.props.clicked(this.state.selectedKey,dataToSend)

        this.setState({id_server :""});
        this.setState({name_server :""});
        this.setState({lastConection_server :""});
        this.setState({createdBy_server :""});
        this.setState({_rev_server :""});
        this.setState({createdTime_server :""});
        //this.setState({selectedKey: 0});

        this.handleHide();
    }


    render() {
        return (
            <div className="Menu">
                <br/>
                <Nav bsStyle="pills" activeKey={this.state.selectedKey} stacked onSelect={this.handleShow}>
                    
                    <NavItem eventKey={selKey.ALL_SERVERS} title="Item">
                        GetAllServer
                    </NavItem>
                    
                    <NavItem eventKey={selKey.SINGLE_SERVER} title="Item">
                        GetSingleServer
                    </NavItem>
                    
                    <NavItem eventKey={selKey.CREATE_SERVER} title="Item">
                        Create Server
                    </NavItem>
                    
                    <NavItem eventKey={selKey.UPDATE_SERVER} title="Item">
                        Update Server
                    </NavItem>
                    
                    <NavItem eventKey={selKey.DELETE_SERVER} title="Item">
                        Delete Server
                    </NavItem>
                    
                    <NavItem eventKey={selKey.RESET_TOKEN} title="Item">
                        Reset Token
                    </NavItem>
                    
                </Nav>


                <Modal
                    show={this.state.showSingleForm}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Enter the Server Id</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form inline>
                            <FormGroup 
                                controlId="id_server"
                                value={this.state.id_server}
                                onChange={this.handleChange}
                                type="id" >
                                <ControlLabel id={this.state.value}>Id</ControlLabel>{' '}
                                <FormControl/>
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleDone}>Done</Button>
                    </Modal.Footer>
                </Modal>



                <Modal
                    bsSize="large"
                    show={this.state.showFullForm}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Fill in the necesary data</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <div className="col-md-6">
                            <Form>

                                <FormGroup 
                                    controlId="name_server"
                                    value={this.state.name_server}
                                    onChange={this.handleChange}
                                    type="Name">
                                    <ControlLabel>Name</ControlLabel>
                                    <FormControl/>
                                </FormGroup>

                            
                                <FormGroup 
                                    controlId="createdBy_server"
                                    value={this.state.createdBy_server}
                                    onChange={this.handleChange}
                                    type="CreatedBy">
                                    <ControlLabel>CreatedBy</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                            
                            
                                <FormGroup 
                                    controlId="_rev_server"
                                    value={this.state._rev_server}
                                    onChange={this.handleChange}
                                    type="_nev">
                                    <ControlLabel>_nev</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                
                            </Form>
                        </div>

                        <div className="col-md-6">
                            <Form>
                            
                                <FormGroup 
                                    controlId="id_server"
                                    value={this.state.id_server}
                                    onChange={this.handleChange}
                                    type="id" >
                                    <ControlLabel>id</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                            
                            
                                <FormGroup
                                    controlId="lastConection_server"
                                    value={this.state.lastConection_server}
                                    onChange={this.handleChange}
                                    type="LastConection">
                                    <ControlLabel>LastConection</ControlLabel>
                                    <FormControl />
                                </FormGroup>
                            
                            
                                <FormGroup 
                                    controlId="createdTime_server"
                                    value={this.state.createdTime_server}
                                    onChange={this.handleChange}
                                    type="CreatedTime">
                                    <ControlLabel>CreatedTime</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                
                            </Form>
                        </div>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleDone}>Done</Button>
                    </Modal.Footer>

                </Modal>


            </div>
        );
    }
}

export default Menu;
