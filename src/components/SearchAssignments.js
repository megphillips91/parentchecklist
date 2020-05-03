import React, { Component } from 'react'

export class SearchAssignments extends Component {
    render() {
        return (
            <div style={{selfAlign: 'center'}}>
                <input style={{marginBottom: 0}} name="search-assignments" type="search" placeholder="search"/>
            </div>
        )
    }
}

export default SearchAssignments
