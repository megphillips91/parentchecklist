import React, { Component } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export class AddLessonPlan extends Component {

    state = {
        id: uuidv4(),
        student: '',
        school: '',
        teacher: '',
        grade: '',
        subject: '',
        filePath: ''
    }

    setFormValues = (e) => this.setState({ [e.target.name]: e.target.value});

    setfilePath = (e) => {        
        axios.post('http://msp-media.org/wp-content/plugins/msp-license-manager/lessonplan-upload.php', {
            school: this.state.school,
            teacher: this.state.teacher,
            grade: this.state.grade,
            dueDate: this.state.dueDate,
            file: e.target.files[0]
        })
        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.lessonPlan(this.state);
        this.setState({id: '', student: '', filePath: ''});
    }

    inputStyle = () => {
        return {
            marginBottom: '30px'
        }
      }

    render() {

        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div style={{padding: '0 20px'}}>
                        <div>
                            <input 
                                type="hidden" 
                                value={uuidv4()}  
                                name="id"
                            />
                            <label htmlFor="student">Student Name</label>
                            <input
                                name="student"
                                type="text"
                                placeholder="Student Name"
                                value={this.state.student}
                                onChange={this.setFormValues}
                            />
                        </div>
                        <div>
                        <label htmlFor="school">School</label>
                            <input
                                name="school"
                                type="text"
                                placeholder="School"
                                value={this.state.school}
                                onChange={this.setFormValues}
                                required
                            />
                        </div>
                        <div>
                        <label htmlFor="grade">Grade</label>
                            <input
                                name="grade"
                                type="number"
                                placeholder="Grade"
                                value={this.state.grade}
                                onChange={this.setFormValues}
                                required
                            />
                        </div>
                        <div>
                        <label htmlFor="teacher">Teacher</label>
                            <input
                                name="teacher"
                                type="text"
                                placeholder="Teacher"
                                required 
                                value={this.state.teacher}
                                onChange={this.setFormValues}
                            />
                        </div>
                        <div>
                        <label htmlFor="subject">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="Subject"
                                required 
                                value={this.state.subject}
                                onChange={this.setFormValues}
                            />
                        </div>
                        <div>
                        <label htmlFor="dueDate">DueDate</label>
                            <input
                                name="dueDate"
                                type="date"
                                placeholder="dueDate"
                                required 
                                value={this.state.dueDate}
                                onChange={this.setFormValues}
                            />
                        </div>
                        <div>
                            <label htmlFor="filePath">Upload Lesson Plan</label>
                            <input 
                            name="filePath"
                            type="file"
                            accept="text/csv"
                            onChange={this.setfilePath}
                            required
                            />
                        </div>
                    </div>

                    <input 
                    name="save"
                    type="submit"
                    className="btn"
                    value="save list"
                    style={{flexBasis: '20%', alignSelf: 'flex-end'}}
                    />
                </form>
            </div>
        )
    }
}

export default AddLessonPlan
