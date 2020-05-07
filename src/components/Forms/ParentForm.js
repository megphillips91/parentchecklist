import React, { useContext, useState } from 'react';
import { FormControl, TextField, InputAdornment } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../../context/GlobalState';


export default function ParentForm( props ) {
    const { addStudent, profileUserType, profileStudents } = useContext(GlobalContext);

    const addNewStudent = (e) => {
        let student = document.getElementById('add-student').value;
        if(student.length > 0 && (typeof student == 'string')) {
            addStudent(student);
            localStorage.setItem('parent-checklist_students', JSON.stringify(profileStudents));
        }
        document.getElementById('add-student').value = '';
    }
    if(profileUserType === "parent"){
        return(
            <React.Fragment>
                    <FormControl margin="normal" fullWidth={true}>
                    <TextField 
                        fullWidth={true}
                        required 
                        id='add-student'
                        name='add-student'
                        label="New Student's Name"
                        helperText="Add a new Student to your profile"
                        InputProps={{
                            endAdornment: <InputAdornment position="start">
                                <FontAwesomeIcon icon="plus-square" onClick={addNewStudent}></FontAwesomeIcon>
                            </InputAdornment>,
                        }}  
                    ></TextField> 
                    </FormControl>
            </React.Fragment> 
            )
    } else {
        return null
    }
}
