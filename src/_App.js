import React, {Component} from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { GlobalProvider } from './context/GlobalState.js'
import Header from './components/Header.js';
import AddLessonPlan from './components/Forms/AddLessonPlan.js';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, teal} from '@material-ui/core/colors';
import axios from 'axios';

library.add(faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard, faGlobeAmericas);

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Quicksand],
      },
    },
  },
  palette: {
    primary: teal,
    secondary: grey,
  }
});


//==========================//
export default function _App() {
    return (
        <div>
            
        </div>
    )
}
