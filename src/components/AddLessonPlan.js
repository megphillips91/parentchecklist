import React, { Component } from 'react'

export class AddLessonPlan extends Component {
    render() {
        return (
            <div>
                <input 
                    type="file"
                    accept="text/csv"
                />
            </div>
        )
    }
}

export default AddLessonPlan
