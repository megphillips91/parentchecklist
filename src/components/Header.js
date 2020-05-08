import React, {useContext} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GlobalContext } from '../context/GlobalState';
import { AppBar, Avatar, IconButton } from '@material-ui/core';


export default function Header() {
    const { profileUserName, profileUserPhoto} = useContext(GlobalContext);
    const logosrc = "https://resources.finalsite.net/images/v1522377299/darek12ncus/rtcdfgm5bwytscidlkp2/fixed-header-logo.png"

    return (
        <AppBar position="sticky" style={{backgroundColor: '#004d40'}}>
            <header id="masthead">
            <div style={{display: 'flex'}}>
            <img alt="dare county schools" src={logosrc} />
            <h2 style={{alignSelf: 'center', color: '#f5f5f5'}}>Homeschool Checklists</h2>
            </div>
            <div className="primary-menu-icons" style={{color: '#f5f5f5', flexBasis: '45%', display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{color: '#f5f5f5'}}>
                    <FontAwesomeIcon icon="home" style={{color: '#f5f5f5'}}></FontAwesomeIcon>
                </button>
                
                <button style={{color: '#f5f5f5'}}>
                    <FontAwesomeIcon icon="school" style={{color: '#f5f5f5'}}></FontAwesomeIcon>
                </button>

                <button style={{color: '#f5f5f5'}}>
                    <FontAwesomeIcon icon="globe-americas" style={{color: '#f5f5f5'}}></FontAwesomeIcon>
                </button>

                <Avatar alt={profileUserName} src={profileUserPhoto}></Avatar>
                
                <a href="/about" style={{color: '#f5f5f5'}}>
                    <FontAwesomeIcon icon="question-circle" style={{color: '#f5f5f5'}}></FontAwesomeIcon>
                </a>
                
            </div> 
            
        </header>
        </AppBar>
    )
}
