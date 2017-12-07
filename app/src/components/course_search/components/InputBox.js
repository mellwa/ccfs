import React from 'react'
import './InputBox.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {FormGroup, FormControl, ControlLabel,Col} from 'react-bootstrap'

export default class InputBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            validationState: this.props.validationState
        }
    }

    render() {

        return(
            <FormGroup className='input-box' bsSize='small'  validationState={this.state.validationState}>
                <ControlLabel id='input-box-label'>{this.props.label}</ControlLabel>
                <FormControl className='input-form-control'/>
            </FormGroup>)
    }

}