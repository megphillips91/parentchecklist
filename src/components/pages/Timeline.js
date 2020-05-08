import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/GlobalState.js';
import Classrooms from '../Classrooms.js';
import Classroom from './Classroom.js';


export default function Timeline() {

    const { sections } = useContext(GlobalContext);
    const thisClassroom = sections[0];
    console.log(thisClassroom)
    
    if(thisClassroom !== 'undefined'){
        return (
           <Classroom section={thisClassroom}></Classroom>
         )  
    } else {
        return null
    }
     
    
}
