import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './StudyNotesBtn.css'
import {Redirect} from 'react-router-dom'

export default class StudyNotes extends React.Component {

    constructor() {
        super();
        this.name = '讲座干货';
        this.state = {
            redirect: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({redirect: true});
    }

    render() {
        var returnElement = <div id='study-notes'>{this.name}</div>;
        if(this.state.redirect) {
            returnElement = <Redirect to='/study_notes'/>
        }
        return(returnElement)
    }

}