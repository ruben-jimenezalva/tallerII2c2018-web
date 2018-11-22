import React from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, SplitButton, MenuItem } from "react-bootstrap";
import ALL_STATUS from "./Constants";

export default class ABMTracking extends React.Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = { 
            showEditRow: false,
            id_tracking:"",
            status_tracking:"",
        }
    }


    componentWillReceiveProps(nextProps){
        this.handleHide();
        if(nextProps.row !== ""){
            this.setState({showEditRow: true});
            this.setState({id_tracking: nextProps.row.id});
            this.setState({status_tracking: nextProps.row.status});
        }
    }

    handleHide() {
        this.setState({status_tracking:this.props.row.status});
        this.setState({ showEditRow: false });
    }

    handleDone() {
        if(this.props.row.status !== this.state.status_tracking){
                this.props.row.status = this.state.status_tracking;
                this.props.updateTracking(this.props.row);
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
                            controlId="id_tracking"
                            value={this.state.id_tracking}
                            type="id Tracking" >
                            <ControlLabel id={this.state.value}>Id Tracking</ControlLabel>{' '}
                            <FormControl disabled value={this.state.id_tracking}/>
                        </FormGroup>
                    </Form>
                    <Form>
                        <FormGroup
                            controlId="status_tracking"
                            value={this.state.id_tracking}
                            onChange={this.handleChange}
                            type="text" >
                            <ControlLabel id={this.state.value}>Status Tracking</ControlLabel>{' '}
                            <FormControl componentClass="select" value={this.state.status_tracking}>
                                <option value={ALL_STATUS.DELIVERY_PENDING}>{ALL_STATUS.DELIVERY_PENDING}</option>
                                <option value={ALL_STATUS.DELIVERY_IN_PROCESS}>{ALL_STATUS.DELIVERY_IN_PROCESS}</option>
                                <option value={ALL_STATUS.DELIVERY_REALIZED}>{ALL_STATUS.DELIVERY_REALIZED}</option>
                                <option value={ALL_STATUS.DELIVERY_CANCELED}>{ALL_STATUS.DELIVERY_CANCELED}</option>
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