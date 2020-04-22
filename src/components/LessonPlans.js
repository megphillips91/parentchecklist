import React, { Component } from 'react';
import LessonPlan from './LessonPlan.js'

export class LessonPlans extends Component {
    render() {
        return this.props.lessonPlans.map( (lessonPlan) => (
            <LessonPlan
                lessonPlan={lessonPlan}
            ></LessonPlan>
        ));
    }
}

export default LessonPlans
