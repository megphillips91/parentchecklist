import React from 'react';
import Profile from '../profile/Profile.js';
import ProfileForm from '../Forms/ProfileForm.js';

export default function ProfilePage() {
    return (
        <React.Fragment>
            <ProfileForm></ProfileForm>
            <Profile></Profile>
        </React.Fragment>
    )
}
