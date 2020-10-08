import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import './App.css';

function App() {
  return (
      <Router>
        <div>    
          <Switch>
            <Route path="/signup">
              <SignUpPage />
            </Route>
            <Route path="/login">
              <LoginPage/>
            </Route>
            <Route path="/">
              <LoginPage/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
