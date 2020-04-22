import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faCalendarWeek, faCalendarDay } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';
//import axios from 'axios';
import Header from './components/Header.js';
import AddLessonPlan from './components/AddLessonPlan.js';
import './App.css';
import Classes from './components/Classes.js';

library.add(faPlus, faCalendarWeek, faCalendarDay);

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

  state = {
    //students
    students: [
      {
        id: uuidv4(),
        name: 'noah',
        classes: [],
      },
      {
        id: uuidv4(),
        name: 'beau',
        classes: []
      },
    ],
    //classes is an array of lesson plans
    classes: 
    [
      {
        id: 1,
        school: 'CHES',
        grade: '4',
        teacher: 'Hooper',
        subject: 'Math and Social Studies',
        lessonPlans: [
          {
            id: 1,
            dueDate: '04-26-2020',
            todos: [
              {
                id: 1,
                date: '04-01-2020',
                description: 'this is the assignment short description'
              },
            ]
          },
        ],
      }
    ]// end classes array   
  };


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
      <div className="App">
        <Header></Header>
        <div className="container">
          <AddLessonPlan lessonPlan={this.lessonPlan}></AddLessonPlan>
          <Classes classes={this.state.classes}></Classes>
        </div>
      </div>
    );
  }
  

}

export default App;
