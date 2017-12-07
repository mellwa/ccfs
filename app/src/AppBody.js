import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {WelcomePage, CourseSearch, StudyNotes, FreeCourse} from './components/Components'
import './AppBody.css'
import {Route, BrowserRouter,Switch} from 'react-router-dom'

export default class AppBody extends React.Component {

    constructor() {
        super();
    }

    render() {

        return(<Switch>
                <Route exact path="/" component={WelcomePage}/>
                <Route path="/course_search" component={CourseSearch}/>
                <Route path='/free_course' component={FreeCourse}/>
                <Route path='/study_notes' component={StudyNotes} />
               </Switch>);
    }

}