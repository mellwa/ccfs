import React from 'react'
import './WelcomePage.css'
import {StudyNotesBtn, FreeCourseBtn, CourseSearchBtn} from './Category'
import {Route, withRouter} from 'react-router-dom'

class WelcomePage extends React.Component {

    constructor() {
        super();
    }

    render() {
        return(
            <div id='welcome-page' >
                <CourseSearchBtn/>
                <FreeCourseBtn/>
                <StudyNotesBtn/>
            </div>
        )
    }

}

export default withRouter(WelcomePage)
