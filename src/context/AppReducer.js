export default (state, action) => {
    switch (action.type){
        case 'SET_USER_TYPE':
            return {
                ...state,
                profileUserType: action.payload
            }  
        case 'SET_USER_EMAIL':
            return {
                ...state,
                profileUserEmail: action.payload
            } 
        case 'SET_USER_NAME':
            return {
                ...state,
                profileUserName: action.payload
            }    
        case 'SET_USER_PHOTO':
            return {
                ...state,
                profileUserPhoto: action.payload
            }      
        case 'DELETE_STUDENT':
            state.profileStudents.splice(action.payload, 1);
            return {
                ...state,
                profileStudents: state.profileStudents
            }       
        case 'ADD_STUDENT':
            let student = {
                name: action.payload,
                teachers: []
            }
            return {...state,
                profileStuudents: state.profileStudents.push(student)
            };
        default: 
            return state;
    }
}