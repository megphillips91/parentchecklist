import React, { useContext }  from 'react';
import { FormControl } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import { GlobalContext } from '../../context/GlobalState.js';


export default function MyGoogleLogin() {

    const { profileIsSaved, setUserEmail, setUserPhoto, setUserName, setProfileIsSaved  } = useContext(GlobalContext);

    const googleFail = (response) => {
        console.log(response);
      }
    

    const googleSuccess = (response) => {
        console.log(response);
        setUserEmail(response.profileObj.email);
        localStorage.setItem('parent-checklist_userEmail', response.profileObj.email);
        setUserPhoto(response.profileObj.imageUrl);
        localStorage.setItem('parent-checklist_userPhoto', response.profileObj.imageUrl);
        let userName = response.profileObj.givenName+ ' '+response.profileObj.familyName;
        setUserName(userName);
        localStorage.setItem('parent-checklist_userName', userName);
        setProfileIsSaved(true);
     } 


    if(profileIsSaved === false){
        return (
            <FormControl margin="normal" fullWidth={true}>
                <GoogleLogin
                    clientId="988354227304-sejkrfpe009ppkkm8qpefdq7ldoude0g.apps.googleusercontent.com"
                    onSuccess={googleSuccess}
                    onFailure={googleFail}
                />
            </FormControl>
        )
    } else {
        return null
    }
    
}
