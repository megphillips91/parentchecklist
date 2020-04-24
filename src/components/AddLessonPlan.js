import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export class AddLessonPlan extends Component {

    state = {
        student: '',
        school: '',
        teacher: '',
        grade: '',
        subject: '',
        dueDate: '',
        file: '',
        restUrl: 'http://localhost:8888/parentchecklist/wp-json/parent-checklist-rest/v1/uploads',
        lessonPlan: '',
        response: '',
    }

    componentDidMount(){
        this.setState({
            authToken: localStorage.getItem('parentchecklist-wp-authtoken')
        })
    }

    setFormValues = (e) => this.setState({ [e.target.name]: e.target.value});

    stateSetFile = (e) => {  
        this.setState(
            {
                file: e.target.files[0]
            }
        );
    }

    onSubmit = (e) => {
        e.preventDefault();
        //form body from state
        let body = {
            school: this.state.school,
            teacher: this.state.teacher,
            grade: this.state.grade,
            dueDate: this.state.dueDate,
            subject: this.state.subject,
            file: this.state.file
        };
        //set up form data
        let formdata = new FormData();
        for (const property in body) {
            formdata.append(property, body[property]);
          }
        //post and response
        axios.post(this.state.restUrl, formdata, {
            })
            .then( res => {
                this.setState({
                    lessonPlan: res.data,
                    response: res
                })
                
            })
        //bubble up the new lesson plan
        this.props.addLessonPlan(this.state.lessonPlan);    
        //clear state    
        this.setState({
            school: '',
            teacher: '',
            grade: '',
            dueDate: '',
            subject: '',
            file: ''
        })
    }//end onsumbit

    render() {
        if(this.props.showForm === false){
            return (
                <div className="checklist-container">
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="checklist">
                        <h2>Add A Lesson Plan </h2>
                        <h2><FontAwesomeIcon icon="plus-square" onClick={this.props.clickPlusSquare}></FontAwesomeIcon></h2>
                    </div>
                        
                </div>
            )
        } else {
            return (
                <div className="checklist-container">
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="checklist">
                        <h2>Add A Lesson Plan </h2>
                        <FontAwesomeIcon icon="minus-square" onClick={this.props.clickPlusSquare}></FontAwesomeIcon>
                    </div>
                    <form 
                        onSubmit={this.onSubmit} 
                        >
                        <input 
                            type="hidden" 
                            value={uuidv4()}  
                            name="id"
                        />
                        
                        <label htmlFor="school">School</label>
                        <input
                            name="school"
                            type="text"
                            placeholder="School"
                            value={this.state.school}
                            onChange={this.setFormValues}
                            required
                        />
                        
                        <label htmlFor="grade">Grade</label>
                        <input
                            name="grade"
                            type="number"
                            placeholder="Grade"
                            value={this.state.grade}
                            onChange={this.setFormValues}
                            required
                        />
                        
                        <label htmlFor="teacher">Teacher</label>
                        <input
                            name="teacher"
                            type="text"
                            placeholder="Teacher"
                            required 
                            value={this.state.teacher}
                            onChange={this.setFormValues}
                        />
                        
                        <label htmlFor="subject">Subject</label>
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required 
                            value={this.state.subject}
                            onChange={this.setFormValues}
                        />
                        
                        <label htmlFor="dueDate">DueDate</label>
                        <input
                            name="dueDate"
                            type="date"
                            placeholder="dueDate"
                            required 
                            value={this.state.dueDate}
                            onChange={this.setFormValues}
                        />
                        
                        <label htmlFor="filePath">Upload Lesson Plan</label>
                        <input 
                        name="filePath"
                        type="file"
                        accept="text/csv"
                        onChange={this.stateSetFile}
                        required
                        />
                        
                        <input 
                        name="save"
                        type="submit"
                        className="btn"
                        value="save list"
                        />
                    </form>
                </div>
            ) //end return
        } //end if
    }
}


export default AddLessonPlan
