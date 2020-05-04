import React, { useContext }  from 'react';
import { FormControl } from '@material-ui/core';
import ComboBox from '../formComponents/ComboBox.js';
import MyGoogleLogin from '../formComponents/MyGoogleLogin.js';
import { GlobalContext } from '../../context/GlobalState.js';
import ParentForm from './ParentForm.js'


export default function ProfileForm () {
    const { profileUserType, setUserType } = useContext(GlobalContext);

    const onSelectUserType = (event, key, payload) => {
            setUserType(key.value);
            localStorage.setItem('parent-checklist_userType', key.value)
          }; 


    const userTypes = [
        {title: 'Student', value: "student"},
        {title: 'Parent', value: "parent"},
        {title: 'Teacher', value: "teacher"}
      ]
    
    return (
      <div className="checklist-container" style={{flexBasis: '30%'}}>
          <div className="entry-header" style={{display: 'flex', }}>
              <div>
                  <h2 className="entry-title">Manage Profile</h2>
                  <h3 className="entry-subtitle">Subtitle</h3>
              </div>
          </div> 
          <div className="entry-content">
          <FormControl margin="normal" fullWidth={true}>
                      <ComboBox 
                      id="user-type" 
                      label="I am a ?" 
                      options={userTypes} 
                      autoSelect={true}
                      onChange={onSelectUserType}
                      helperText="parent, student, teacher"
                      ></ComboBox>
                  </FormControl> 
                  <ParentForm userType={profileUserType}></ParentForm>
                  <MyGoogleLogin></MyGoogleLogin>
          </div>     
        </div>
    )
}
