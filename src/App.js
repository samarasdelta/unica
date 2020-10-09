import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginPage from './pages/LoginPage.js';
import SignUpPage from './pages/SignUpPage.js';
import DashboardPage from './pages/DashboardPage.js';
import './App.css';

function App() {
  return (
      <Router>
        <div>   
          <nav>
            <li>
              <Link to="login">LogIn</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </nav>
          <Switch>
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
              <LoginPage/>
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
