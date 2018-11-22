import React, { Component } from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Nav, NavItem } from "react-bootstrap";
import selKey from "./Constants";

class MenuPayment extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = { 
            showSingleForm: false,
            showFullForm: false,
            selectedKey: 0,
            transaction_id :"",
            currency :"",
            value :"",
            status :"",
            expiration_month:"",
            expiration_year :"",
            method :"",
            number :"",
            type :"",
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

            case selKey.ALL_PAYMENTS:
            case selKey.ALL_PAYMETHODS:
                this.props.clicked(selectedKey);
                break;

            case selKey.CREATE_PAYMENT:
            case selKey.UPDATE_PAYMENT:
                this.setState({ showFullForm: true });
                break;

            case selKey.SINGLE_PAYMENT:
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
        var dataToSend = selKey.DATA_PAYMENT;
        dataToSend.transaction_id = this.state.transaction_id; 
        dataToSend.currency = this.state.currency;
        dataToSend.value =  this.state.value;
        dataToSend.status =  this.state.status;
        dataToSend.paymentMethod.expiration_month = this.state.expiration_month;
        dataToSend.paymentMethod.expiration_year = this.state.expiration_year;
        dataToSend.paymentMethod.method = this.state.method;
        dataToSend.paymentMethod.number = this.state.number;
        dataToSend.paymentMethod.type = this.state.type;

        this.props.clicked(this.state.selectedKey,dataToSend)

        this.setState({transaction_id :""});
        this.setState({currency :""});
        this.setState({value :""});
        this.setState({status :""});
        this.setState({expiration_month :""});
        this.setState({expiration_year :""});
        this.setState({method :""});
        this.setState({number :""});
        this.setState({type :""});

        this.handleHide();
    }


    render() {
        return (
            <div className="Menu">
                <br/>
                <Nav bsStyle="pills" stacked activeKey={this.state.selectedKey} onSelect={this.handleShow}>
                    
                    <NavItem eventKey={selKey.ALL_PAYMENTS} title="Item">
                        Get All Payments
                    </NavItem>
                    
                    <NavItem eventKey={selKey.ALL_PAYMETHODS} title="Item">
                        Get All Paymethods
                    </NavItem>
                    
                    <NavItem eventKey={selKey.SINGLE_PAYMENT} title="Item">
                        Get Single Payment
                    </NavItem>
                    
                    <NavItem eventKey={selKey.UPDATE_PAYMENT} title="Item">
                        Update Payment
                    </NavItem>

                    <NavItem eventKey={selKey.CREATE_PAYMENT} title="Item">
                        Create Payment
                    </NavItem>
                
                </Nav>


                <Modal
                    show={this.state.showSingleForm}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Enter Payment id</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form inline>
                            <FormGroup 
                                controlId="transaction_id"
                                value={this.state.transaction_id}
                                onChange={this.handleChange}
                                type="transaction_id" >
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
                                    controlId="transaction_id"
                                    value={this.state.transaction_id}
                                    onChange={this.handleChange}
                                    type="transaction_id" >
                                    <ControlLabel>Id</ControlLabel>
                                    <FormControl/>
                                </FormGroup>

                                <FormGroup 
                                    controlId="value"
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                    type="value">
                                    <ControlLabel>Value</ControlLabel>
                                    <FormControl/>
                                </FormGroup>

                            
                                <FormGroup 
                                    controlId="expiration_month"
                                    value={this.state.expiration_month}
                                    onChange={this.handleChange}
                                    type="expiration_month">
                                    <ControlLabel>Expiration_month</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                            
                            
                                <FormGroup 
                                    controlId="method"
                                    value={this.state.method}
                                    onChange={this.handleChange}
                                    type="method">
                                    <ControlLabel>Method</ControlLabel>
                                    <FormControl/>
                                </FormGroup>

                                <FormGroup 
                                    controlId="type"
                                    value={this.state.type}
                                    onChange={this.handleChange}
                                    type="type">
                                    <ControlLabel>Type</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                                
                            </Form>
                        </div>

                        <div className="col-md-6">
                            <Form>
                                <FormGroup
                                    controlId="status"
                                    value={this.state.status}
                                    onChange={this.handleChange}
                                    type="status">
                                    <ControlLabel>Status</ControlLabel>
                                    <FormControl />
                                </FormGroup>

                                <FormGroup
                                    controlId="currency"
                                    value={this.state.currency}
                                    onChange={this.handleChange}
                                    type="currency">
                                    <ControlLabel>Currency</ControlLabel>
                                    <FormControl />
                                </FormGroup>
                            
                                <FormGroup 
                                    controlId="expiration_year"
                                    value={this.state.expiration_year}
                                    onChange={this.handleChange}
                                    type="expiration_year">
                                    <ControlLabel>Expiration_year</ControlLabel>
                                    <FormControl/>
                                </FormGroup>
                            
                                <FormGroup 
                                    controlId="number"
                                    value={this.state.number}
                                    onChange={this.handleChange}
                                    type="number">
                                    <ControlLabel>Number</ControlLabel>
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

export default MenuPayment;
