import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@material-ui/core';

import { GlobalContext } from '../context/GlobalState';
import ProfileIcon from './ProfileIcon.js'

export default function Header() {
    const { profileUserName, profileUserPhoto} = useContext(GlobalContext);

    return (
        <header id="masthead">
            <div style={{display: 'flex'}}>
            <img alt="dare county schools" src="https://resources.finalsite.net/images/f_auto,q_auto/v1521048827/darek12ncus/fqfcusy7dngivvz8yn6m/DCS_Icon_Full_Color_RGB.png" />
            <h2 style={{alignSelf: 'center', color: '#003745'}}>Homeschool Checklists</h2>
            </div>
            <div className="primary-menu-icons" style={{flexBasis: '45%', display: 'flex', justifyContent: 'flex-end'}}>
                <button >
                    <FontAwesomeIcon icon="home" ></FontAwesomeIcon>
                </button>
                
                <button >
                    <FontAwesomeIcon icon="school" ></FontAwesomeIcon>
                </button>

                <button >
                    <FontAwesomeIcon icon="globe-americas" ></FontAwesomeIcon>
                </button>

                <Avatar alt={profileUserName} src={profileUserPhoto}></Avatar>
                
                <a href="/about">
                    <FontAwesomeIcon icon="question-circle" ></FontAwesomeIcon>
                </a>
                
            </div> 
            
        </header>
    )
}
