import React from "react";
import { Modal, Button, Form, FormGroup, ControlLabel, FormControl} from "react-bootstrap";


export default class ABMServer extends React.Component {
    constructor(props) {
        super(props);
        this.handleDone = this.handleDone.bind(this);
        this.handleHide = this.handleHide.bind(this);
        this.state = { 
            showEditRow: false,
            id_server:"",
            name_server:"",
            url_server:"",
        }
    }


    componentWillReceiveProps(nextProps){
        this.handleHide();
        if(nextProps.row !== ""){
            this.setState({showEditRow: true});
            this.setState({id_server: nextProps.row.id});
            this.setState({name_server: nextProps.row.name});
            this.setState({url_server: nextProps.row.url});
        }
    }

    handleHide() {
        this.setState({ showEditRow: false });
    }

    handleDone() {
        if(this.props.row.name !== this.state.name_server ||
            this.props.row.url !== this.state.url_server){
                this.props.row.name = this.state.name_server;
                this.props.row.url = this.state.url_server;
                this.props.updateServer(this.props.row);
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
                            controlId="id_server"
                            value={this.state.id_server}
                            type="id Server" >
                            <ControlLabel id={this.state.value}>Id Server</ControlLabel>{' '}
                            <FormControl disabled value={this.state.id_server}/>
                        </FormGroup>
                    </Form>
                    <Form>
                        <FormGroup
                            controlId="name_server"
                            value={this.state.id_server}
                            onChange={this.handleChange}
                            type="text" >
                            <ControlLabel id={this.state.value}>Id Name</ControlLabel>{' '}
                            <FormControl value={this.state.name_server}/>
                        </FormGroup>
                    </Form>
                    <Form>
                        <FormGroup
                            controlId="url_server"
                            value={this.state.id_server}
                            onChange={this.handleChange}
                            type="text" >
                            <ControlLabel id={this.state.value}>Url Server</ControlLabel>{' '}
                            <FormControl value={this.state.url_server}/>
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