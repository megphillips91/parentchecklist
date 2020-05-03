import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';


// Initial state
const initialState = {
  profileUserType: 'parent',
  profileUserEmail: '',
  profileUserPhoto: '',
  profileUserName: '',
  profileStudents: [],
  profileName: '',
  teachers: [],
  schools: [],
  grades: [],
  subjects: [],
  assignments: [],
  lessonPlans: []
}

const promises = [];
promises.push(axios.get('http://localhost:8888/parentchecklist/wp-json/wp/v2/teachers'));
promises.push(axios.get('http://localhost:8888/parentchecklist/wp-json/wp/v2/schools'));
promises.push(axios.get('http://localhost:8888/parentchecklist/wp-json/wp/v2/grades'));
promises.push(axios.get('http://localhost:8888/parentchecklist/wp-json/wp/v2/subjects'));
promises.push(axios.get('http://localhost:8888/parentchecklist/wp-json/wp/v2/assignments'));

Promise.all(promises).then( res => {
    
    initialState.teachers =  res[0].data
    initialState.schools =  res[1].data
    initialState.grades =  res[2].data
    initialState.subjects =  res[3].data
    initialState.assignments = res[4].data

}); 




// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function setUserType(userType) {
    dispatch({
      type: 'SET_USER_TYPE',
      payload: userType
    })
  }

  function setUserEmail(email) {
    dispatch({
      type: 'SET_USER_EMAIL',
      payload: email
    })
  }

  function setUserPhoto(photoUrl) {
    dispatch({
      type: 'SET_USER_PHOTO',
      payload: photoUrl
    })
  }

  function setUserName(name) {
    dispatch({
      type: 'SET_USER_NAME',
      payload: name
    })
  }

  function deleteStudent(name) {
    dispatch({
      type: 'DELETE_STUDENT',
      payload: name
    })
  }

  function addStudent(name) {
    dispatch({
      type: 'ADD_STUDENT',
      payload: name
    })
  }


  return (<GlobalContext.Provider value={
    {
      profileName: initialState.profileName,
      profileStudents: initialState.profileStudents,
      schools: initialState.schools,
      teachers: initialState.teachers,
      grades: initialState.grades,
      subjects: initialState.subjects,
      deleteStudent,
      addStudent,
      setUserType,
      setUserEmail,
      setUserName,
      setUserPhoto,
    }
  }>
    {children}
  </GlobalContext.Provider>);
}