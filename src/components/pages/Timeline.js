import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import Classrooms from '../Classrooms.js'

export default function Timeline() {

    const { assignments, setClassrooms } = useContext(GlobalContext);
    
    useEffect(() => {
       const classrooms =  assignments.map( (assignment) => {
            const schools = assignment.class_terms.schools.map( term => { return term.name})
            const teachers = assignment.class_terms.teachers.map( term => { return term.name})
            const grades = assignment.class_terms.teachers.map( term => { return term.name})
            const subjects = assignment.class_terms.subjects.map( term => { return term.name})
            const classroom = {
                schools: schools,
                teachers: teachers,
                grades: grades,
                subjects: subjects
            }
            return classroom;
       })

    })

    if(assignments){
        return null
    }
    return (
        <React.Fragment>
            <p>Classrooms go here</p>
        </React.Fragment>
    )
}
