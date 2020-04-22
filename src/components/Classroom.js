import React, { Component } from 'react';
import LessonPlans from './LessonPlans';

export class Classroom extends Component {
    render() {
        return (
            <div className="checklist-container">
                <div className="checklist">
                    <h2>{this.props.classroom.school} {this.props.classroom.teacher}'s' {this.props.classroom.grade} Grade</h2>
                    <h3>{this.props.classroom.subject}</h3>
                    <LessonPlans lessonPlans={this.props.lessonPlans}></LessonPlans>
                </div>
            </div>
            
        )
    }
}

export default Classroom
