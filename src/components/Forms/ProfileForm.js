import React, { useContext }  from 'react';
import { FormControl } from '@material-ui/core';
import ContentCard from '../ContentCard.js'
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
      <ContentCard
        mainTitle="ManageProfile"
      >
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
      </ContentCard>
    )
}
