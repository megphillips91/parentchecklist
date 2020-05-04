import React, { useContext }  from 'react';
import { FormControl, TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { GlobalContext } from '../../context/GlobalState.js';


export default function ChooseWPTerm(props) {
    
    const { grades, teachers, subjects, schools } = useContext(GlobalContext);

    const top100Films = [
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'The Godfather', year: 1972 },
        { title: 'The Godfather: Part II', year: 1974 },
        { title: 'The Dark Knight', year: 2008 },
        { title: '12 Angry Men', year: 1957 },
    ]

    if(props.data.length < 1){
        return null
    } else {
        return (
            <React.Fragment>
                <FormControl margin="normal" fullWidth={true}>
                    <Autocomplete
                        id={props.taxonomy}
                        freeSolo
                        options={props.data.map((option) => option.name)}
                        renderInput={(params) => (
                        <TextField {...params} label={props.taxonomy} margin="normal" variant="outlined" />
                        )}
                    /> 
                </FormControl>
            </React.Fragment>
        )
    }
    
}
