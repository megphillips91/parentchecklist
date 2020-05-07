import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Collapse} from '@material-ui/core';
import Assignment from './Assignment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

/*
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'block',
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
      },
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }));
*/

export default function ClassAssignments( { section } ) {

    const [ lessonPlans, setLessonPlans ] = useState([]);
    const [open, setOpen] = useState({});

    const handleClick = (index)  => {
        //console.log(open.length)
        //setOpen({ [index]: !open[index]})
    }

    useEffect( () => {

     }, []);

    useEffect(() => {
        let ignore = false;
        let url = 'http://localhost:8888/parentchecklist/wp-json/parent-checklist/v2/lesson-plans';
        let body = {
            teachers: section.teachers,
            grades: section.grades,
            school: section.school,
            subjects: section.subject
        }

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
                   return (
                       <div key={index}>
                        <ListItem key={index} >
                           <ListItemText primary={lessonplan.dueDate} />
                           {open ? <ExpandLess onClick={handleClick(index)}/> : <ExpandMore />}
                        </ListItem>   
                            <Collapse key={lessonplan.duedate} in={open[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                {/* so the posts lopp here and each is a list item. */
                                    lessonplan.posts.map( assignment => {
                                        return(
                                            <Assignment style={{display: 'block', width: '100%'}} key={assignment.ID} assignment={assignment}></Assignment>
                                        )
                                    })
                                }
                                </List>
                            </Collapse>
                       </div> 
                    )
                 })
                }
            </List>
        )
    }
    
    
    


    
}
