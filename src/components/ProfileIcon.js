import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GlobalContext } from '../context/GlobalState';


export default function ProfileIcon( ) {
    const { profileUserName, profileUserPhoto} = useContext(GlobalContext);    

    if(profileUserPhoto === ''){
        return (
            <React.Fragment>
                <FontAwesomeIcon icon="user"></FontAwesomeIcon>
            </React.Fragment>
        )
    } else {
        return (
            <div style={{selfAlign: 'center', width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', marginRight: '10px', position: 'relative'}}>
                <img src={profileUserPhoto} alt={profileUserName} style={{width: '100%', position: 'absolute', top: '0'}}/>
            </div>
        )
    }
    
}
