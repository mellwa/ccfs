import React from 'react'
import './RemoveElementButton.css'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class RemoveElementButton extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = props.onClick;
        this.className = props.className;
    }

    render() {
        return(
            <div className={"remove-element-btn fa fa-minus-circle "+this.className} aria-hidden="true" onClick={this.onClick}>
            </div>
        )
    }

}