import React, {Component} from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard } from '@fortawesome/free-solid-svg-icons';
import { GlobalProvider } from './context/GlobalState.js'
import Header from './components/Header.js';
import './App.css';
import ProfileForm from './components/Forms/ProfileForm.js';
import Profile from './components/profile/Profile.js'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, teal} from '@material-ui/core/colors';

library.add(faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard);

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: grey,
  }
});
/**
 * Parent Checklist Website
 * A JAMStack application which can take in a csv file lesson plan
 * 
 * Problem: it is difficult for parents to keep track of assignments
 * 
 * Solution: help parents and teachers keep track of remote learning assignemnts
 *  by creating an interactive household checklist which can take in school assignments
 *  and household chores, etc
 * 
 * Security: to keep things simple at launch we are not going to authenticate anything
 *  teachers, parents will not need to "log in"
 * 
 * Future Scope: add social login with 
 *  -- facebook -- or -- google
 *  -- set up a user profile looking for gravatar or FB image
 *     idea being that each lesson plan would have a profile image
 *     of the person who uploaded it as a mechanism by which
 *     parents can authenticate the validity of the lesson plans
 *     uploaded to the system
 *  
 * BackEnd WordPress: 
 * -- PHP will parse the csv lesson plan and return the json needed for the checklist
 * -- wordpress will create schools, classes, lesson plans, and lesson plans will contain assignments in post meta
 * -- the custom post type will be lesson plan. the meta will hold all other relevant data attached to the lesson plan
 * 
 * FrontEnd React:
 * -- Household: parents will add classes to students (household is "this" in the app js)
 * -- Students: classes will belong to students
 * -- Classes: which would be school, grade, subject, teacher
 * -- Lesson Plans: which would be assignments belonging to a class sharing a due date
 * -- Assignments: are the individual todos which belong to a lesson plan.
 * 
 */


class App extends Component {

  addLessonPlan = (lessonPlan) => {
    this.setState({
        lessonPlans: [...this.state.lessonPlans, lessonPlan]
    });
  }

  clickPlusSquare = () => {
    this.setState(
      {showForm: !this.state.showForm}
    )
  }

  render (){

      return (
      
        <GlobalProvider>
          <ThemeProvider theme={theme}>
            <Header></Header>

            <div className="flex-container-space-around" style={{padding: '30px'}}>
              <ProfileForm></ProfileForm>  
              <Profile></Profile>
            </div>

          </ThemeProvider>
        </GlobalProvider>
    );
  }
  

}

export default App;
