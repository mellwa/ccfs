import React from 'react'
import {Redirect} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FreeCourseBtn.css'

export default class FreeCourse extends React.Component {

    constructor() {
        super();
        this.name = '免费课程';
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({redirect:true})
    }

    render() {
        var returnElement = <div id='free-course' onClick={this.handleClick}>{this.name}</div>;
        if(this.state.redirect) {
            returnElement = <Redirect to='/free_course'/>
        }
        return(returnElement);
    }

}