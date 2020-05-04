import React, { useContext, useEffect }  from 'react';
import { FormControl, TextField, Button } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState.js';
import ChooseWPTerm from '../formComponents/ChooseWPTerm';



export default function AddLessonPlan(props) {
    const { profileUserPhoto, profileUserName, teachers, grades } = useContext(GlobalContext);

    const state = {
        dueDate: '',
        postDate: '',
        school: '',
        teacher: '',
        subject: '',
        grade: ''
    }

    const onSubmit = e => {
        e.preventDefault();
    }

    const setLocalState = e => {
        e.preventDefault();
    }

    return (
        
        <div className="checklist-container" style={{flexBasis: '30%'}}>
            <div className="entry-header" style={{display: 'flex', }}>
                <img alt={profileUserName} src={profileUserPhoto} style={{height: '50px', marginRight: '10px'}}/>
                <div>
                    <h2 className="entry-title">New Checklist</h2>
                    <h3 className="entry-subtitle">Due Date: {state.dueDate}</h3>
                </div>
            </div> 
            <div className="entry-content" style={{maxHeight: '500px', overflow: 'auto', paddingRight: '20px'}}>
                <ChooseWPTerm taxonomy="schools" data={props.schools}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="teachers" data={props.teachers}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="grades" data={props.grades}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="subjects" data={props.subjects}></ChooseWPTerm>
                <FormControl margin="normal" fullWidth={true}>
                    <TextField
                            fullWidth={true}
                            required
                            id="dueDate"
                            label="Due Date"
                            type="Date"
                            onChange={(e) => setLocalState(e)}
                            InputLabelProps={{
                                shrink: true,
                              }}
                        ></TextField>
                </FormControl>
                <FormControl margin="normal" fullWidth={true}>
                    <TextField
                        fullWidth={true}
                        required
                        id="postDate"
                        label="Assignment Date"
                        type="Date"
                        onChange={(e) => setLocalState(e)}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    ></TextField>
                </FormControl>
                <FormControl margin="normal" fullWidth={true}>
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        rows={5}
                        variant="outlined"
                        onChange={(e) => setLocalState(e)}
                    ></TextField>
                </FormControl>
                <FormControl>
                <Button 
                    variant="contained" 
                    type="submit"
                    onSubmit={(e) => onSubmit(e)}
                >Post</Button>

                </FormControl>
            </div>
        </div>
    )
}
