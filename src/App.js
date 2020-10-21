import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from './pages/IntroPage.js';
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import DashboardPage from './pages/DashboardPage.js';
import ForgotPassPage from './pages/ForgotPassPage.js';
import ForgotEmailPage from './pages/ForgotEmailPage.js';

function App() {
 return (
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
          <LoginPage />
        </Route>
        <Route path="/">
          <IntroPage />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;