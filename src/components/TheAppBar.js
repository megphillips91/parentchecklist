import React, {useContext} from 'react';
import { AppBar, Avatar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { GlobalContext } from '../context/GlobalState';

export default function TheAppBar() {
    const { profileUserName, profileUserPhoto} = useContext(GlobalContext);

    

    const handleProfileMenuOpen = (() => {

    })

    return (
        <AppBar style={{backgroundColor: '#26a69a'}} color="secondary" position="sticky">
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls="1"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="secondary"
            >
                <Avatar alt={profileUserName} src={profileUserPhoto}></Avatar>
            </IconButton>
        </AppBar>
    )
}
