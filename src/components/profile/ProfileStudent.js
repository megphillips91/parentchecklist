import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import { ListItem, ListItemIcon, ListItemText, Icon} from '@material-ui/core'

export default function ProfileStudent(props) {
    const { deleteStudent } = useContext(GlobalContext);

    const onDeleteStudent = (e) => {
        e.preventDefault();
        deleteStudent(props.arrayIndex);
    }

    return (
        <ListItem button>
        <ListItemText key={props.index} primary={props.student.name} />
        <ListItemIcon>
            <Icon className="material-icons" onClick={onDeleteStudent} style={{color: '#004d40'}}
            >delete</Icon>
        </ListItemIcon>
    </ListItem>
    )
  
}
