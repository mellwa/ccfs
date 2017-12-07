import React from 'react'
import './CourseSearchBtn.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Redirect, Link} from 'react-router-dom'

export default class CourseSearch extends React.Component {

    constructor() {
        super();
        this.name = '课程搜索';
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({redirect: true});
    }

    render() {
        var returnElement = <div id='course-search' onClick={this.handleClick}>{this.name}</div>;
        if (this.state.redirect) {
            returnElement = <Redirect to='/course_search'/>;
            this.state.redirect = false;
        }
        return (returnElement);

    }
}