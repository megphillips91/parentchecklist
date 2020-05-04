import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import ProfileStudent from './ProfileStudent.js'
import { Avatar } from '@material-ui/core';


export default function Profile() {
    const { profileStudents, profileUserName, profileUserPhoto, profileUserType} = useContext(GlobalContext);    
    
    return (
        <div className="checklist-container" style={{flexBasis: '30%'}}>
            <div className="entry-header" style={{display: 'flex', }}>
                <Avatar alt={profileUserName} src={profileUserPhoto}></Avatar>
                <div>
                    <h2 className="entry-title">{profileUserName}</h2>
                    <h3 className="entry-subtitle">{profileUserType+' '+profileStudents.length+' Students'}</h3>
                </div>
            </div> 
            {profileStudents.map( (student, index) => {  
                return  <ProfileStudent key={index} student={student} arrayIndex={index}></ProfileStudent>
             })
            }
        </div>
    )
}
