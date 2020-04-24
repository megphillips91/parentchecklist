import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p style={{bottom: 0, padding: '10px 0', backgroundColor: '#003745',  color: '#ccc', fontWeight: '300'}}>open source software developed by Meg Phillips of <a href="https://msp-media.org/">MSP-Media</a></p>
            </div>
        )
    }
}

export default Footer
