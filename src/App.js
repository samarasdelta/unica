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
              <Link to="/login"></Link>
              <Link to="/signup"></Link>
          </ul>
        </nav>
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
