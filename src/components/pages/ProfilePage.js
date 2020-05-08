import React, { useContext } from 'react';
import Profile from '../profile/Profile.js';
import ProfileForm from '../Forms/ProfileForm.js';
import Classrooms from '../Classrooms.js';
import AddLessonPlan from '../Forms/AddLessonPlan.js'
import { GlobalContext } from '../../context/GlobalState.js';

export default function ProfilePage() {
    const { sections } = useContext(GlobalContext);

    return (
        <div style={{display: 'flex', flexWrap: "wrap", justifyContent: 'space-around', flexDirection: 'flex-start'}} >
            <ProfileForm></ProfileForm>
            <Profile></Profile>
            <Classrooms sections={sections}></Classrooms>
            <AddLessonPlan></AddLessonPlan>
        </div>
    )
}
