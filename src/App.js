import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, } from "react-router-dom";
//import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import IntroPage from './pages/IntroPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import DashboardPage from './pages/DashboardPage.js';
import ForgotPassPage from './pages/ForgotPassPage.js';
import ForgotEmailPage from './pages/ForgotEmailPage.js';
import './App.css';

//DARK MODE

function App() {

 // const theme = createMuiTheme({
    //palette: {
     // type: 'dark'
   // },
 // });

 return (
//<ThemeProvider theme={theme}>
  <Router> 
    <div>
      <Switch>
        <Route path="/forgotemail">
          <ForgotEmailPage />
        </Route>
        <Route path="/forgotpass">
         <ForgotPassPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <LoginPage/>
        </Route>
        <Route path="/">
          <IntroPage/>
        </Route>
      </Switch>
    </div>
  </Router>
//</ThemeProvider>
  );
}

export default App;
