import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import Masonry from 'react-masonry-css';
import Header from './components/Header.js';
import AddLessonPlan from './components/AddLessonPlan.js';
import './App.css';
import Classes from './components/Classes.js';
import About from './components/pages/About.js';
import School from './components/pages/School.js';
import Footer from './components/Footer.js';

library.add(faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome);

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
 *  the functionality on the parent side will be all local and not persistent
 * 
 * Future Scope: add social login with 
 *  -- facebook -- or -- google
 *  -- set up a user profile looking for gravatar or FB image
 *     idea being that each lesson plan would have a profile image
 *     of the person who uploaded it as a mechanism by which
 *     parents can authenticate the validity of the lesson plans
 *     uploaded to the system
 * -- add a way to "map" the fields from csv
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

  componentDidMount (){
    let url = 'http://localhost:8888/parentchecklist/wp-json/simple-jwt-authentication/v1/token';

    let body = {
      "username":"admin",
      "password":"N0ah2oo9"
    }

    axios.post( url, body)
      .then(  response =>
        this.setState({
          authToken: response.data.token
        })
      );
    
    localStorage.setItem('parentchecklist-wp-authtoken', this.state.authToken);  
  }

  state = {
    showForm: false,
    authToken: '',
    wpUser: {
      username: 'DareChecklist',
      password: 'NCirYK*x6R^j%26bTk%yN0$$mX',
    },
    //students
    students: [
      {
        id: uuidv4(),
        name: 'noah',
        classrooms: [],
      },
      {
        id: uuidv4(),
        name: 'beau',
        classrooms: []
      },
    ],
    classrooms: [
    ],
    lessonPlans: [
      //array of lessonPlans associated with thier cooresponding classrooms
    ],
    schools: [
    ],
    //classes is an array of lesson plans
    classes: 
    [
      {
        id: 1,
        school: 'CHES',
        grade: '4th',
        teacher: 'Hooper',
        subject: 'Math and Social Studies',
        lessonPlans: [
          {
            id: 1,
            dueDate: '04-26-2020',
            todos: [
              {
                id: 1,
                date: '04-26-2020',
                description: 'this is the assignment short description'
              },
              {
                id: 2,
                date: '04-26-2020',
                description: 'this is the assignment short description'
              },
            ]
          },
          {
            id: 1,
            dueDate: '04-19-2020',
            todos: [
              {
                id: 1,
                date: '04-19-2020',
                description: 'this is the assignment short description'
              },
              {
                id: 2,
                date: '04-19-2020',
                description: 'this is the assignment short description'
              },
            ]
          },
        ],
      }
    ]// end classes array   
  };

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

  markComplete = (description) => {
    this.setState(
      {todos: this.state.todos.map( todo => {
          if(todo.description === description){
            todo.completed = !todo.completed;
          }
          return todo;
        }
        )
    });
  }

  render (){
    
    return (
      <Router>
        <div className="App">
        <Header  ></Header>
        <Route exact path="/" render={props =>(
                <React.Fragment>
                  <div className="content-app" style={{padding: '30px'}}>
                  <Masonry
                    breakpointCols={{default: 3, 800: 1}}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                    >
                    <AddLessonPlan clickPlusSquare={this.clickPlusSquare} showForm={this.state.showForm} addLessonPlan={this.addLessonPlan}></AddLessonPlan>  
                    <Classes showForm={this.state.showForm} classes={this.state.lessonPlans}></Classes>
                  </Masonry>
                  </div>
                </React.Fragment>
              )} />
        <Route path="/school" component={School} />
        <Route path="/about" component={About} />
        </div>
        <Footer></Footer>
      </Router>
    );
  }
  

}

export default App;
