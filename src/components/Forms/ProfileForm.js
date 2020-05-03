import React, { useContext }  from 'react';
import { FormControl } from '@material-ui/core';
import ComboBox from '../formComponents/ComboBox.js';
import GoogleLogin from 'react-google-login';
import { GlobalContext } from '../../context/GlobalState.js';
import ParentForm from './ParentForm.js'


export default function ProfileForm () {
    const { profileUserType, setUserType, setUserEmail, setUserPhoto, setUserName } = useContext(GlobalContext);

    const onSelectUserType = (event, key, payload) => {
        setUserType(key.value);
      }; 

    const googleFail = (response) => {
        console.log(response);
      }
    

    const googleSuccess = (response) => {
        console.log(response);
        setUserEmail(response.profileObj.email);
        setUserPhoto(response.profileObj.imageUrl);
        setUserName(response.profileObj.givenName+ ' '+response.profileObj.familyName);
     } 

    const userTypes = [
        {title: 'Student', value: "student"},
        {title: 'Parent', value: "parent"},
        {title: 'Teacher', value: "teacher"}
      ]

    return (
        <div style={{flexBasis: '30%'}}>
                <FormControl margin="normal" fullWidth={true}>
                    <ComboBox id="user-type" label="I am a ?" options={userTypes} onChange={onSelectUserType}></ComboBox>
                </FormControl> 
                <ParentForm userType={profileUserType}></ParentForm>
                <FormControl margin="normal" fullWidth={true}>
                    <GoogleLogin
                        clientId="988354227304-sejkrfpe009ppkkm8qpefdq7ldoude0g.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onFailure={googleFail}
                    />
                </FormControl>
                
            </div>
    )
}
