import React from 'react'
import "./CourseSearch.css"
import {Switch, Route, Link} from 'react-router-dom'
import 'whatwg-fetch'
import {InputBox, CourseList} from './Components'

export default class CourseSearch extends React.Component {

    constructor(props) {
        super(props);
        this.url = props.match.url;
    }

    render() {
        return(
            <div id='course-search-container'>
                <h1 id='course-search-title'>Courses List</h1>
                <InputBox label='course search'/>
                <CourseList/>
            </div>
        )
    }

}
