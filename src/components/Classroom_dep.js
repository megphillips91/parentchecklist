import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class Classroom extends Component {
    render() {
        return (
            <div key={this.props.id}>
                <span className="fa-layers fa-fw" style={{cursor: 'pointer', minHeight: '200px'}}>
                    <FontAwesomeIcon style={{fontSize: '200px'}} icon="chalkboard" color="green" />
                    <span className="fa-layers-text"  style={{fontWeight:'900', left: '120px', top: '50px', width: '180px', textTransform: 'capitalize'}}>{this.props.classroom.school}</span>
                    <span className="fa-layers-text"  style={{fontWeight:'900', left: '120px', top: '70px', width: '180px', textTransform: 'capitalize'}}>{this.props.classroom.teacher}</span>
                    <span className="fa-layers-text"  style={{fontWeight:'900', left: '120px', top: '90px', width: '180px', textTransform: 'capitalize'}}>{this.props.classroom.subject}</span>
                    <span className="fa-layers-text"  style={{fontWeight:'900', left: '120px', top: '110px', width: '180px', textTransform: 'capitalize'}}>{this.props.classroom.grade}</span>
                </span>
            </div>
        )
    }
}

export default Classroom

