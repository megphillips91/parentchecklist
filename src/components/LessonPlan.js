import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LessonPlan extends Component {
    render() {
        const {dueDate} = this.props.lessonPlan;

        return (
            <div className="todo-item"> 
                <ul>
                    <li>{dueDate} 
                        <FontAwesomeIcon icon="fa-plus"></FontAwesomeIcon>
                    </li>
                </ul>
            </div>
            
        )
    }
}

export default LessonPlan
