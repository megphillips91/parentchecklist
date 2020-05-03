import React, { Component } from 'react';
import Classroom from './Classroom.js'

export class Classrooms extends Component {
    render() {
        return (
            this.props.data.map( classroom => {
                return <Classroom key={classroom.id} classroom={classroom}></Classroom>
            })
        )
    }
}

export default Classrooms

