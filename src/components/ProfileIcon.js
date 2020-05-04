import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ProfileIcon( { userPhoto, userName }) {
    if(userPhoto === ''){
        return (
            <React.Fragment>
                <FontAwesomeIcon icon="user"></FontAwesomeIcon>
            </React.Fragment>
        )
    } else {
        return (
            <div style={{width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '1px solid #333'}}>
                <img src={userPhoto} alt={userName} style={{width: '100%' }}/>
            </div>
        )
    }
    
}
