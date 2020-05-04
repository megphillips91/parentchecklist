import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState.js';
import ProfilePage from './pages/ProfilePage';
import Timeline from './pages/Timeline.js';



export default function TheContent( {currentPage, schools, teachers, subjects, grades} ) {

    const { profileIsSaved} = useContext(GlobalContext);

    switch (currentPage) {

        case 'timeline': 
            return (<Timeline></Timeline>)
        
        default:
            return (<Timeline></Timeline>)
    }

}
