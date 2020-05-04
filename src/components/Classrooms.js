import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js'

import Classroom from './Classroom.js'

export default function Classrooms() {
    const { classrooms } = useContext(GlobalContext);    

    return (
        classrooms.map( classroom => {
            return <Classroom key={classroom.id} classroom={classroom}></Classroom>
        })
    )
}


