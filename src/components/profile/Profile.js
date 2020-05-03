import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import ProfileStudent from './ProfileStudent.js'


export default function Profile() {
    const { profileStudents, profileName} = useContext(GlobalContext);
    const myName = (profileName === '') ? 'My Family' : profileName ; 
    
    return (
        <div className="checklist-container" style={{flexBasis: '30%'}}>
            <div className="entry-header">
                <h2 className="entry-title">{myName}</h2>
                <h3 className="entry-subtitle">{' Students'}</h3>
            </div> 
            {profileStudents.map( (student, index) => {  
                return  <ProfileStudent key={index} student={student} arrayIndex={index}></ProfileStudent>
            })}
        </div>
    )
}
