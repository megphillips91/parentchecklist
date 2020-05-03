import React, { useContext } from 'react';
import { FormControl, TextField, InputAdornment } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../../context/GlobalState';


export default function ParentForm( props ) {
    const { addStudent } = useContext(GlobalContext);

    const addNewStudent = (e) => {
        addStudent(document.getElementById('add-student').value);
        document.getElementById('add-student').value = '';
    }
    if(props.UserType === "parent"){
        return(
            <React.Fragment>
                    <FormControl margin="normal" fullWidth={true}>
                    <TextField 
                        fullWidth={true}
                        required 
                        id='add-student'
                        name='add-student'
                        label="New Student's Name"
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
        return (
            <React.Fragment></React.Fragment>
        );
    }
    
}
