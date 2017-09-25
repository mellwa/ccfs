import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './BooleanSelection.css'
import {ButtonToolbar, Dropdown, MenuItem, ControlLabel} from 'react-bootstrap'

export default class BooleanSelection extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.labelName = null;
        if(props.labelName) {
            this.labelName = <ControlLabel className='boolean-selection-label'>{props.labelName}</ControlLabel>
        }
        this.items = ['true', 'false'];
        this.selectionMap = {
            0: 'true',
            1: 'false'
        };
        this.state = {
            value: undefined
        }
    }

    handleChange(key) {
        let value = this.selectionMap[key];
        this.setState({value: value});
        this.props.onChange(value);
        this.forceUpdate();
    }

    render() {
        if(!this.state.value) {
            let value = this.props.value;
            if (!value) {
                value = this.items[1];
            }
            this.state = {
                value: value
            };
        }
        return(
            <div className="boolean-selection-container">
                {this.labelName}
                <ButtonToolbar className="boolean-selection-button-tool-bar">
                    <Dropdown id='boolean-selection'>
                        <Dropdown.Toggle>
                            {this.state.value}
                        </Dropdown.Toggle>
                        <Dropdown.Menu className="boolean-selection-menu" onSelect={this.handleChange}>
                            {this.items.map((value, i) => <MenuItem key={i} eventKey={i}>{value}</MenuItem>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </ButtonToolbar>
            </div>
        )
    }

}