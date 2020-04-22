import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export class Header extends Component {
    render() {
        return (
            <header id="masthead">
                <nav>
                    <ul>
                        <li><FontAwesomeIcon icon="fa-plus"></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon="fa-user"></FontAwesomeIcon></li>
                        <li><FontAwesomeIcon icon="calendar-day"></FontAwesomeIcon></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header
