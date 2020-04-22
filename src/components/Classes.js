import React, { Component } from 'react';
import Classroom from './Classroom.js';
import Todos from './Todos.js';

export class Classes extends Component {
    render() {
        return this.props.classes.map( (classroom) => (
            <Classroom
                key={classroom.id} 
                classroom={classroom} 
                lessonPlans={classroom.lessonPlans}
            >
            </Classroom>
        ));
    }
}

export default Classes
