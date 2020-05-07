import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, ListItemIcon, Icon} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { GlobalContext } from '../context/GlobalState.js';


export default function ClassAssignments( { section } ) {
    const { setUserStudents  } = useContext(GlobalContext);
    const { openSaveToStudent, setOpenSaveToStudent } = useState(false);




    

    const [ lessonPlans, setLessonPlans ] = useState([]);
    const [open, setOpen] = useState({});

    const followLessonPlan = (lessonArgs) => {
        console.log(lessonArgs);
    }

    useEffect( () => {

    }, []);

    useEffect(() => {
        let ignore = false;
        let url = 'http://localhost:8888/parentchecklist/wp-json/parent-checklist/v2/lesson-plans';
        let body = {
            teachers: section.teachers,
            grades: section.grades,
            schools: section.schools,
            subjects: section.subjects
        }
        console.log(body);

        async function fetchData() {
            const result = await axios.post(url, body);
            const { assignments } = result.data;  
            
            let plans = [];
            for (let [key, value] of Object.entries(assignments)) {
                    const lessonplan = value;
                    lessonplan.dueDate = key;
                    plans.push(lessonplan);
                }
            if (!ignore) setLessonPlans(plans);
        }

        fetchData();
        return () => { ignore = true; }
        }, []);
/**
 * Under here is the render.
 */
    if(lessonPlans === 'undefined'){
        return (
        <React.Fragment>
            <List >
            </List>
        </React.Fragment>
        )
    } else {

        return (

            <List>{
               lessonPlans.map( (lessonplan, index) => {
                   let week = moment(lessonplan.dueDate).format("[Week] W[:]");
                   let theDate = moment(lessonplan.dueDate).format("[ Due] MM-DD-YYYY");
                   
                   return (
                    <ListItem key={index} button>
                        <ListItemText>
                        <h6>{week}</h6><p>{theDate}</p>
                        </ListItemText>
                        <ListItemIcon >
                            <FontAwesomeIcon icon="chalkboard" onClick={lessonplan.assignments} style={{color: '#003745'}}></FontAwesomeIcon>
                        </ListItemIcon>
                    </ListItem>
                    )
                 })
                }
            </List>
        )
    }
    
    
    


    
}
