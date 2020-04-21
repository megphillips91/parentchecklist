import React, { Component } from 'react';
import AddLessonPlan from './AddLessonPlan.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Header extends Component {
    render() {
        return (
            <header id="masthead">
                <nav><ul><li><FontAwesomeIcon icon="plus-square"></FontAwesomeIcon></li></ul></nav>
                <AddLessonPlan></AddLessonPlan>
            </header>
        )
    }
}

export default Header
