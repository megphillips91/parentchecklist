import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchAssignments from './SearchAssignments.js'



export class Header extends Component {

    render() {
        return (
            <header id="masthead">
                <div style={{display: 'flex'}}>
                <img alt="dare county schools" src="https://resources.finalsite.net/images/f_auto,q_auto/v1521048827/darek12ncus/fqfcusy7dngivvz8yn6m/DCS_Icon_Full_Color_RGB.png" />
                <h2 style={{alignSelf: 'center', color: '#003745'}}>Homeschool Checklists</h2>
                </div>
                <SearchAssignments></SearchAssignments>
                <div className="primary-menu-icons">
                    <button >
                        <FontAwesomeIcon icon="home" ></FontAwesomeIcon>
                    </button>
                    
                    <button >
                        <FontAwesomeIcon icon="school" ></FontAwesomeIcon>
                    </button>

                    <button >
                        <FontAwesomeIcon icon="sign-in-alt" ></FontAwesomeIcon>
                    </button>

                    <a href="/about">
                        <FontAwesomeIcon icon="question-circle" ></FontAwesomeIcon>
                    </a>
                    
                </div> 
                
            </header>
        )
    }
}

export default Header
