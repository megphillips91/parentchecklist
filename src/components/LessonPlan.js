import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class LessonPlan extends Component {
    render() {
        const {dueDate} = this.props.lessonPlan;

        return (
            <div className="todo-item"> 
                <div style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between'}}>
                        <p>{dueDate} </p>
                        <FontAwesomeIcon icon="plus-square"></FontAwesomeIcon>
                </div>  
            </div>
            
        )
    }
}

export default LessonPlan
