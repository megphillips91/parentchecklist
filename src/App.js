import React, {Component} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckSquare, faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import Todos from './components/Todos.js';
import Header from './components/Header.js';


import './App.css';

library.add(faCheckSquare, faCoffee, faPlusSquare);


class App extends Component {

  state = {
    todos: [
      {
        date: '04-20-2020',
        dueDate: '04-26-2020',
        description: 'watch lesson video',
        grade: '4th',
        class: 'hooper',
        mandatory: false,
        completed: false
      },
      {
        date: '04-20-2020',
        dueDate: '04-26-2020',
        description: 'Mondays math lesson - google classroom form',
        grade: '4th',
        class: 'hooper',
        mandatory: true,
        completed: false

      },
      {
        date: '04-20-2020',
        dueDate: '04-26-2020',
        description: 'aaa.math for 6 minutes',
        grade: '4th',
        class: 'hooper',
        mandatory: true,
        completed: false

      },
    ]
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
        <div className="checklist">
        <h2>Checklist</h2>
        <Todos todos={this.state.todos} markComplete={this.markComplete}></Todos>
        </div>
      </div>
    );
  }
  

}

export default App;
