import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import './App.css';

function App() {
  return (
      <Router>
      <div>    
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/login">
            <LoginPage/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
