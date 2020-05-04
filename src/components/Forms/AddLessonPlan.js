import React, { useContext, useEffect }  from 'react';
import { FormControl, TextField, Button, Collapse } from '@material-ui/core';
import { GlobalContext } from '../../context/GlobalState.js'  //'../ context/GlobalState.js';
import ContentCard from '../../components/ContentCard.js';
import ChooseWPTerm from '../formComponents/ChooseWPTerm';



export default function AddLessonPlan(props) {
    const { profileUserPhoto, profileUserName, schools, subjects, teachers, grades, showLessonForm, toggleLessonForm } = useContext(GlobalContext);

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

    const clickShowForm = e => {
        toggleLessonForm()
    }
    return (
        <ContentCard
            mainTitle="Post Assignments"
            subTitle={state.teacher+' '+state.dueDate}
        >
            <div style={{maxHeight: "250px", overflow: 'scroll-y'}}>
                <FormControl margin="normals" fullWidth={true}>
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
                <ChooseWPTerm taxonomy="schools" data={schools}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="teachers" data={teachers}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="grades" data={grades}></ChooseWPTerm>
                <ChooseWPTerm taxonomy="subjects" data={subjects}></ChooseWPTerm>
                <FormControl>
                <Button 
                    variant="contained" 
                    type="submit"
                    onSubmit={(e) => onSubmit(e)}
                >Post</Button>

                </FormControl>
            </div>
            </ContentCard>
    )
}
