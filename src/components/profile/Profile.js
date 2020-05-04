import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import ProfileStudent from './ProfileStudent.js'


export default function Profile() {
    const { profileStudents, profileUserName, profileUserPhoto} = useContext(GlobalContext);    
    
    return (
        <div className="checklist-container" style={{flexBasis: '30%'}}>
            <div className="entry-header" style={{display: 'flex', }}>
                <img alt={profileUserName} src={profileUserPhoto} style={{height: '50px', marginRight: '10px'}}/>
                <div>
                    <h2 className="entry-title">{profileUserName}</h2>
                    <h3 className="entry-subtitle">{profileStudents.length+' Students'}</h3>
                </div>
            </div> 
            {profileStudents.map( (student, index) => {  
                return  <ProfileStudent key={index} student={student} arrayIndex={index}></ProfileStudent>
            })}
        </div>
    )
}
