import React, { Component } from 'react';
import ParentForm from './ParentForm.js';
import GoogleLogin from 'react-google-login';
import { FormControl } from '@material-ui/core';


export class AdditionalFields extends Component {

    responseGoogle = (response) => {
        console.log(response);
        this.setState( {
            userEmail: response.profileObj.email
        })
      }
     googleSuccess = (response) => {
         console.log(response);

     }
   

    render() {
           
        switch(this.props.userType){
            case 'parent':
                return (
                    <React.Fragment>
                        <ParentForm></ParentForm>
                        <FormControl margin="normal" fullWidth={true}>
                            <GoogleLogin
                                        clientId="988354227304-sejkrfpe009ppkkm8qpefdq7ldoude0g.apps.googleusercontent.com"
                                        onSuccess={this.googleSuccess}
                                        onFailure={this.googleFail}
                                    />
                        </FormControl>
                    </React.Fragment>);
            case 'teacher':
                return (
                    <React.Fragment>
                        <FormControl margin="normal" fullWidth={true}>
                            <GoogleLogin
                                clientId="988354227304-sejkrfpe009ppkkm8qpefdq7ldoude0g.apps.googleusercontent.com"
                                onSuccess={this.googleSuccess}
                                onFailure={this.responseGoogle}
                                
                            />
                        </FormControl>
                    </React.Fragment>
                ) 
                case 'student':
                    return (
                        <React.Fragment>
                        <FormControl margin="normal">
                            <GoogleLogin
                                clientId="988354227304-sejkrfpe009ppkkm8qpefdq7ldoude0g.apps.googleusercontent.com"
                                onSuccess={this.googleSuccess}
                                onFailure={this.responseGoogle}
                            />
                        </FormControl>
                    </React.Fragment>
                    ) 
                default:
                    return ('')         
            }
    }
}

export default AdditionalFields
