import React, { useEffect, useState } from 'react';
import ContentCard from '../components/ContentCard.js';
import ClassAssignments from '../components/ClassAssignments.js';
//import axios from 'axios';


export default function Classrooms({ sections }) {

    /* We are going after all the promises 
    * and storing them into the promises array 
    * and I guess that is what we will send up to the state
    */  

    return (
        sections.map( (section, index) => {
            return (
                <ContentCard
                    key={index}
                    mainTitle={section.schools+" "+ section.teachers}
                    subTitle={section.grades+" "+ section.subjects}
                    button="door-open"
                >
                    <ClassAssignments 
                        section={section}
                        ></ClassAssignments>
                </ContentCard>
            )
        })
    )
   
}