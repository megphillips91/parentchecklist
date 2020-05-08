import React, { useContext }  from 'react';
import { FormControl, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GlobalContext } from '../../context/GlobalState.js';


export default function ChooseWPTerm(props) {
    
    const { grades, teachers, subjects, schools } = useContext(GlobalContext);

    if(props.data.length < 1){
        return null
    } else {
        return (
            <React.Fragment>
                <Autocomplete
                    fullWidth={true}
                    id={props.taxonomy}
                    freeSolo
                    options={props.data.map((option) => option.name)}
                    renderInput={(params) => (
                    <TextField {...params} label={props.taxonomy} margin="normal" />
                    )}
                /> 
            </React.Fragment>
        )
    }
    
}
