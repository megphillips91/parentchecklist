import React, { Component } from 'react';
import axios from 'axios';

export class Classroom extends Component {

    
    componentDidMount (){
        const promises = [];
        const classroom = this.props.classroom;
        //get lessons
        let body =  {
            "teachers": classroom.teachers,
            "grades": classroom.grades,
            "schools": classroom.schools,
            "subjects": classroom.subjects
        }
        console.log(body);
        
        let url = 'http://localhost:8888/parentchecklist/wp-json/parent-checklist/v2/lesson-plans'
        promises.push(axios.post(url, body));

        Promise.all(promises).then( res => {

            this.setState({
              lessonPlans: res[0].data,
            })
          
          });   
        
    } //component did mount
        
    state = {
        lessonPlans: []
    }


    render() {
        const classroom = this.props.classroom
        const lessonPlans = this.state.lessonPlans
        const assignments = this.state.assignments

        return (
            <div className="checklist-container">
                <div className="entry-header">
                    <h2 className="entry-title">{classroom.schools+' '+classroom.teachers.replace('-', ' ')+' '}</h2>
                    <h3 className="entry-subtitle">{classroom.grades+' '+classroom.subjects}</h3>
                </div>
            </div>
        )
    }
}

export default Classroom
