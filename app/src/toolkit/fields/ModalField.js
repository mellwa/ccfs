import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ModalField.css'
import {Modal, Button} from 'react-bootstrap'

export default class ModalField extends React.Component {

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.title = props.title;
        this.body = props.body;
        this.yesBtn = props.btn;
        this.show = props.show;
        this.state = {
            show: props.show
        };
        this.closing = false;
    }

    getInitialState() {
        return {show: this.show}
    }

    closeModal() {
        this.show = false;
        this.closing = true;
        this.setState({show: false});
    }

    render() {
        if(this.props.show != this.show && !this.closing) {
            this.show = this.props.show;
        }
        if(this.closing) {
            this.closing = !this.closing;
        }
        return(
            <Modal className={"modal-field "+this.props.className} show={this.show} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title className="modal-title">{this.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.body}
                </Modal.Body>
                <Modal.Footer>
                    {this.yesBtn}
                </Modal.Footer>
            </Modal>
        )
    }
}
