import React, { Component } from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Nav, NavItem } from "react-bootstrap";
import selKey from "./Constants";

class TrackingMenu extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = { 
            showSingleForm: false,
            showFullForm: false,
            selectedKey: 0,
            id_tracking :"",
            updateAt :"",
            status :""
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

            case selKey.ALL_TRACKINGS:
                this.props.clicked(selectedKey);
                break;

            case selKey.CREATE_TRACKING:
            case selKey.UPDATE_TRACKING:
                this.setState({ showFullForm: true });
                break;

            case selKey.SINGLE_TRACKING:
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
        var dataToSend = selKey.DATA_TRACKING;
        dataToSend.id = this.state.id_tracking; 
        dataToSend.updateAt = this.state.updateAt;
        dataToSend.status =  this.state.status;

        this.props.clicked(this.state.selectedKey,dataToSend)

        this.setState({id_tracking :""});
        this.setState({updateAt :""});
        this.setState({status :""});
        //this.setState({selectedKey: 0});

        this.handleHide();
    }


    render() {
        return (
            <div className="TrackingMenu">
                <br/>
                <Nav bsStyle="pills" activeKey={this.state.selectedKey} stacked onSelect={this.handleShow}>
                    
                    <NavItem eventKey={selKey.ALL_TRACKINGS} title="Item">
                        Get All Trackigs
                    </NavItem>
                    
                    <NavItem eventKey={selKey.SINGLE_TRACKING} title="Item">
                        Get Single Tracking
                    </NavItem>
                    
                    <NavItem eventKey={selKey.UPDATE_TRACKING} title="Item">
                        Update Tracking
                    </NavItem>
                    
                    <NavItem eventKey={selKey.CREATE_TRACKING} title="Item">
                        Create Tracking
                    </NavItem>
                    
                </Nav>


                <Modal
                    show={this.state.showSingleForm}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Enter the Payment Id</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form inline>
                            <FormGroup 
                                controlId="id_tracking"
                                value={this.state.id_tracking}
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
                                    controlId="id_tracking"
                                    value={this.state.id_tracking}
                                    onChange={this.handleChange}
                                    type="id">
                                    <ControlLabel>Id tracking</ControlLabel>
                                    <FormControl/>
                                </FormGroup>

                                <FormGroup 
                                    controlId="status"
                                    value={this.state.status}
                                    onChange={this.handleChange}
                                    type="status" >
                                    <ControlLabel>Status</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                
                            </Form>
                        </div>

                        <div className="col-md-6">
                            <Form>

                                <FormGroup 
                                    controlId="updateAt"
                                    value={this.state.updateAt}
                                    onChange={this.handleChange}
                                    type="updateAt">
                                    <ControlLabel>updateAt</ControlLabel>
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

export default TrackingMenu;
