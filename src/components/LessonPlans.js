import React from 'react';
import { List, ListItem} from '@material-ui/core';


export default function LessonPlans( {lessonplans} ) {
    if(lessonplans === 'undefined'){
        console.log('the props lesson plan is null so returned null')
        return null
    } else {
        return(
            lessonplans.map( lessonplan => {
                return (
                    <ListItem>
                        <h3>{lessonplan.dueDate}</h3>
                    </ListItem>
                )
            })
        )
        
        
    }
    
}
