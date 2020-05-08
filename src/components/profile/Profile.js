import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import ProfileStudent from './ProfileStudent.js'
import ContentCard from '../ContentCard.js';


export default function Profile() {
    const { profileStudents, profileUserName, profileUserType} = useContext(GlobalContext);    
    
    return (
        <ContentCard
            mainTitle={profileUserName}
            subtitle={profileUserType+' '+profileStudents.length+' Students'}
            >{
                profileStudents.map( (student, index) => {  
                    return  <ProfileStudent key={index} student={student} arrayIndex={index}></ProfileStudent>
                })
            }
        </ContentCard>
    )
}
