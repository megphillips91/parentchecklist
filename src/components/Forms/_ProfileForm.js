import React, { Component } from 'react';
import ComboBox from '../formComponents/ComboBox.js';
import ParentForm from './ParentForm.js';
import { FormControl } from '@material-ui/core';


export class ProfileForm extends Component {

    state = {
        userType: '',
        students: [],
    }

    maybeShowParentForm = () => {
        return ((this.state.userType === 'parent') ? <ParentForm></ParentForm> : '')
    }

    setUserType = (event, key, payload) => {
            this.setState({
                userType: key.value
            })
          };    

    render() {

        let userTypes = [
            {title: 'Student', value: "student"},
            {title: 'Parent', value: "parent"},
            {title: 'Teacher', value: "teacher"}
          ]
        
        return (
            <div style={{flexBasis: '30%'}}>
                <FormControl margin="normal" fullWidth={true}>
                    <ComboBox id="user-type" label="I am a ?" options={userTypes} onChange={this.setUserType}></ComboBox>
                </FormControl> 
                {this.maybeShowParentForm}
            </div>
        )
    }
}

export default ProfileForm
