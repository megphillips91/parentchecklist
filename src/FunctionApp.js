import React, { useContext } from 'react';
//import {BrowserRouter as Router, Route} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faDoorOpen, faTimes, faWindowClose, faEye, faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard, faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import { GlobalContext, GlobalProvider } from './context/GlobalState.js';
import Header from './components/Header.js';
import './App.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { grey, teal} from '@material-ui/core/colors';
import axios from 'axios';
import { CssBaseline } from '@material-ui/core';
import Classroom from './components/pages/Classroom.js'
import Classrooms from './components/Classrooms.js'

library.add(faDoorOpen, faTimes, faWindowClose, faEye, faQuestionCircle, faUser, faPlusSquare, faMinusSquare, faCalendarWeek, faCalendarDay, faHouseUser, faSchool, faHome, faSignInAlt, faChalkboard, faGlobeAmericas);

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Quicksand, Arial',
    fontWeight: '400',
    color: '#333',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': 'Quicksand',
      },
    },
  },
  palette: {
    primary: teal,
    secondary: grey,
  },
});

//==========================//
export default function __App() {
  const { sections } = useContext(GlobalContext);

  return (
      <GlobalProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header></Header>
            <div className="flex-container-space-around" style={{padding: '30px'}}>
              {/**
               * Here we will build the timeline as content grows on the site. For now, we will directly pull in ClassAssignments which does not filter the classrooms
              */}
              <Classrooms sections={sections}></Classrooms>
              <Classroom section={sections[0]}></Classroom>
            </div>
        </ThemeProvider>
      </GlobalProvider>
  )
}
