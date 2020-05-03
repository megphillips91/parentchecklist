import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ProfileStudent(props) {
    const { deleteStudent } = useContext(GlobalContext);

    const onDeleteStudent = (e) => {
        e.preventDefault();
        deleteStudent(props.arrayIndex);
    }

    return (
        <p key={props.index} style={{display: 'flex', justifyContent: 'space-between', margin: '10px' }}>
            <span>{props.student.name}</span>
            <span><FontAwesomeIcon icon="minus-square" onClick={onDeleteStudent}></FontAwesomeIcon></span>
        </p>
    )
  
}
