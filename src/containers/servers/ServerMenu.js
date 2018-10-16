import React, { Component } from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl, Nav, NavItem } from "react-bootstrap";


class Menu extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);

        this.state = { showSingleForm: false };
        this.state = { showFullForm: false };
    }

    handleShow(selectedKey) {
        switch (selectedKey) {

            case 4:
            case 5:
                this.setState({ showFullForm: true });
                break;

            default:
                this.setState({ showSingleForm: true });
                break;
        }
    }

    handleHide() {
        this.setState({ showSingleForm: false });
        this.setState({ showFullForm: false });
    }


    handleSelect(selectedKey) {
        alert(`selected ${selectedKey}`);
    }

    render() {
        return (
            <div className="Menu">
                <Nav bsStyle="pills" stacked onSelect={this.handleShow}>
                    <br />
                    <NavItem eventKey={1} title="Item">
                        GetAllServer
                    </NavItem>
                    <br />
                    <NavItem eventKey={2} title="Item">
                        GetSingleServer
                    </NavItem>
                    <br />
                    <NavItem eventKey={4} title="Item">
                        Create Server
                    </NavItem>
                    <br />
                    <NavItem eventKey={5} title="Item">
                        Update Server
                    </NavItem>
                    <br />
                    <NavItem eventKey={6} title="Item">
                        Delete Server
                    </NavItem>
                    <br />
                    <NavItem eventKey={7} title="Item">
                        Reset Token
                    </NavItem>
                    <br />
                </Nav>


                <Modal
                    {...this.props}
                    show={this.state.showSingleForm}
                    onHide={this.handleHide}
                    dialogClassName="custom-modal">

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Enter the Server Id</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form inline>
                            <FormGroup controlId="SingleServerId">
                                <ControlLabel>Id</ControlLabel>{' '}
                                <FormControl type="Id" />
                            </FormGroup>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleHide}>Done</Button>
                    </Modal.Footer>
                </Modal>


                <Modal
                    {...this.props}
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
                                <p>
                                    <FormGroup controlId="ServerName">
                                        <ControlLabel>Name</ControlLabel>
                                        <FormControl type="Name" />
                                    </FormGroup>
                                <p>

                                </p>
                                    <FormGroup controlId="ServerCreatedBy">
                                        <ControlLabel>CreatedBy</ControlLabel>
                                        <FormControl type="CreatedBy" />
                                    </FormGroup>
                                </p>

                                <p>
                                    <FormGroup controlId="Server_nev">
                                        <ControlLabel>_nev</ControlLabel>
                                        <FormControl type="_nev" />
                                    </FormGroup>
                                </p>
                            </Form>
                        </div>

                        <div className="col-md-6">
                            <Form>
                                <p>
                                    <FormGroup controlId="ServerId">
                                        <ControlLabel>id</ControlLabel>
                                        <FormControl type="id" />
                                    </FormGroup>
                                </p>

                                <p>
                                    <FormGroup controlId="ServerLastConection">
                                        <ControlLabel>LastConection</ControlLabel>
                                        <FormControl type="LastConection" />
                                    </FormGroup>
                                </p>

                                <p>
                                    <FormGroup controlId="ServerCreatedTime">
                                        <ControlLabel>CreatedTime</ControlLabel>
                                        <FormControl type="CreatedTime" />
                                    </FormGroup>
                                </p>
                            </Form>
                        </div>

                    </Modal.Body>


                    <Modal.Footer>
                        <Button type="submit" onClick={this.handleHide}>Done</Button>
                    </Modal.Footer>

                </Modal>


            </div>
        );
    }
}

export default Menu;
