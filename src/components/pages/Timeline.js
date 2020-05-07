import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import Assignment from '../../components/Assignment.js';
import AddLessonPlan from '../Forms/AddLessonPlan.js'
import ContentCard from '../ContentCard.js';
import axios from 'axios'

export default function Timeline() {

    const { assignments } = useContext(GlobalContext);
    //const [lessonAssignments, setLessonAssignments] = useState([]);
    /*
    let theAssignments =  (requestBody) => {
        axios.post('http://localhost:8888/parentchecklist/wp-json/parent-checklist/v2/lesson-plans', requestBody).then( res => {
            setLessonAssignments (res.data);
        })
    }
    */
    return (
        <div style={{display: 'flex',  justifyContent: 'spaceEvenly', flexWrap: 'wrap'}} >
        <AddLessonPlan></AddLessonPlan>
        { 
                assignments.map( assignment => {
                    let teacher = assignment.class_terms['teachers'][0];
                    let school = assignment.class_terms['schools'][0];
                    let due_date = assignment.due_date;
                    let subject = assignment.class_terms['subjects'][0];
                    let grade= assignment.class_terms['grades'][0];
                    let subtitle = grade+' '+subject;
                    let mainTitle = school+' '+teacher;
                    

                    return  (
                        <ContentCard
                            key={assignment.id}
                            mainTitle={mainTitle}
                            subTitle={subtitle}
                            >
                            <h2>{"Due On "+due_date}</h2>
                            <Assignment assignment={assignment}></Assignment>
                        </ContentCard>
                    )
            })
            
        }
    </div>
    )   
    
}
