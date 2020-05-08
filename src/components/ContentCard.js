import React, { useContext }  from 'react';
import { Card, Avatar } from '@material-ui/core';
import { GlobalContext } from '../context/GlobalState.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function ContentCard( {mainTitle, subTitle, children, button}) {

    const { profileUserPhoto, profileUserName } = useContext(GlobalContext);

    const renderButton = (button) => {
        if(button !== 'undefined'){
            //can we check that icon is defined within fontAwesome library?
            return (
                <div style={{color: '#003745', selfAlign: 'center'}}>
                    <FontAwesomeIcon key={mainTitle.replace(' ', '-')} icon={button} ></FontAwesomeIcon>
                </div>
            )
        } else {
            return null;
        }
    }

    return (
        <React.Fragment>
            <Card elevation={3} style={{flexBasis: '300px', flexShrink: '0', margin: '15px'}}>
                <div className="entry-header" style={{display: 'flex' }}>
                    <Avatar alt={profileUserName} src={profileUserPhoto} style={{marginRight: '10px'}}></Avatar>
                    <div style={{flexBasis: "70%"}}>
                        <h2 className="entry-title" style={{color: '#003745'}}>{mainTitle}</h2>
                        <h3 className="entry-subtitle" style={{color: '#00998F'}}>{subTitle}</h3>
                    </div>
                    {renderButton(button)}
                </div> 
                <div className="entry-content" style={{maxHeight: '500px', overflow: 'auto'}}>
                    {children}
                </div> 
            </Card>     
        </React.Fragment>
    )
}
