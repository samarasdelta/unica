import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "./pages/IntroPage.js";
import LoginPage from "./pages/LoginPage.js";
import SignUpPage from "./pages/SignUpPage.js";
import DashboardPage from "./pages/DashboardPage.js";
import DiscoverPage from "./pages/DiscoverPage.js";
import ForgotPassPage from "./pages/ForgotPassPage.js";
import ForgotEmailPage from "./pages/ForgotEmailPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import BadGatewayPage from "./pages/BadGatewayPage.js";
import DeletedPage from "./pages/DeletedPage.js";
import ProjectPage from "./pages/ProjectPage.js";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/502">
            <BadGatewayPage />
          </Route>
          <Route path="/404">
            <NotFoundPage />
          </Route>
          <Route path="/forgotemail">
            <ForgotEmailPage />
          </Route>
          <Route path="/forgotpass">
            <ForgotPassPage />
          </Route>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="/deleted">
            <DeletedPage />
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
