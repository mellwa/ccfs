import React from 'react'
import './AddElementButton.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Button} from 'react-bootstrap'
import 'font-awesome/css/font-awesome.min.css'


export default class AddElementButton extends React.Component {

    constructor(props) {
        super(props);
        this.className = props.className;
    }

    render() {
        return(
            <div className={"add-element-btn fa fa-plus-circle add-element-btn-icon "+this.className} onClick={this.props.onClick}>
            </div>
        )
    }

}