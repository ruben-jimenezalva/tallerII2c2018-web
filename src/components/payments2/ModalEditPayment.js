import React from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, SplitButton, MenuItem } from "react-bootstrap";
import ALL_STATUS from "./Constants";

export default class ABMPayments extends React.Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = { 
            showEditRow: false,
            id_payments:"",
            status_payment:"",
        }
    }


    componentWillReceiveProps(nextProps){
        this.handleHide();
        if(nextProps.row !== ""){
            this.setState({showEditRow: true});
            this.setState({id_payments: nextProps.row.transaction_id});
            this.setState({status_payment: nextProps.row.status});
        }
    }

    handleHide() {
        this.setState({status_payment:this.props.row.status});
        this.setState({ showEditRow: false });
    }

    handleDone() {
        if(this.props.row.status !== this.state.status_payment){
                this.props.row.status = this.state.status_payment;
                this.props.updatePayment(this.props.row);
        }
        this.handleHide();
    }

    handleChange = event => {
        event.preventDefault();
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return (
            <Modal
                show={this.state.showEditRow}
                onHide={this.handleHide}
                dialogClassName="custom-modal">

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">Enter the new data </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FormGroup
                            controlId="id_payments"
                            value={this.state.id_payments}
                            type="id Payments" >
                            <ControlLabel id={this.state.value}>Id Payments</ControlLabel>{' '}
                            <FormControl disabled value={this.state.id_payments}/>
                        </FormGroup>
                    </Form>
                    <Form>
                        <FormGroup
                            controlId="status_payment"
                            value={this.state.id_payments}
                            onChange={this.handleChange}
                            type="text" >
                            <ControlLabel id={this.state.value}>Status Payments</ControlLabel>{' '}
                            <FormControl componentClass="select" value={this.state.status_payment}>
                                <option value={ALL_STATUS.PAYMENT_PENDING}>{ALL_STATUS.PAYMENT_PENDING}</option>
                                <option value={ALL_STATUS.PAYMENT_ACCEPTED}>{ALL_STATUS.PAYMENT_ACCEPTED}</option>
                                <option value={ALL_STATUS.PAYMENT_DECLINED}>{ALL_STATUS.PAYMENT_DECLINED}</option>
                            </FormControl>
                        </FormGroup>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button type="submit" onClick={this.handleDone}>Done</Button>
                </Modal.Footer>
            </Modal>
      );
    }
}