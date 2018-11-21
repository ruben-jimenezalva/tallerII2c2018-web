import React from "react";
import { Modal, Button} from "react-bootstrap";
import "./ModalReset.css";

export class ModalReset extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);
  
      this.state = {
        show: false,
      };
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.token !== ""){
            this.handleShow();
        }
    }

    handleShow() {
      this.setState({ show: true });
    }
  
    handleHide() {
      this.setState({ show: false });
    }
  
    render() {
      return (
        <Modal
        {...this.props}
        show={this.state.show}
        onHide={this.handleHide}
        dialogClassName="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-sm">
            Reset Token Server
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>The token Server has been changed</h4>
          The New Token is:
          <p className="ShowTokenModal">
            {this.props.token}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleHide}>Close</Button>
        </Modal.Footer>
      </Modal>
      );
    }
  }
  