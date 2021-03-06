import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
import Navbar from "./components/Navbar";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Sorting = lazy(() => import("./pages/Sorting"));
const Animation = lazy(() => import("./pages/Animation"));
const EducationalProject = lazy(() => import("./pages/EducationalProject"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Key = lazy(() => import("./pages/Key"));

axios.defaults.baseURL = "https://two-factor-auth-backend.herokuapp.com/";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <AuthState>
      <Router>
        <Navbar />
        <Suspense
          fallback={
            <section>
              <div className="flex h-screen">
                <div className="m-auto">
                  <img
                    width="128px"
                    height="128px"
                    src="/images/loader.gif"
                    alt="loader"
                  />
                </div>
              </div>
            </section>
          }
        >
          <Switch>
            <Route path={ROUTES.LOGIN} component={Login} exact />
            <Route path={ROUTES.SIGNUP} component={Signup} exact />
            <Route path={ROUTES.SORTING} component={Sorting} exact />
            <Route path={ROUTES.ANIMATION} component={Animation} exact />
            <Route
              path={ROUTES.EDUCATIONAL_PROJECT}
              component={EducationalProject}
              exact
            />
            <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <PrivateRoute path={ROUTES.KEY} component={Key} exact />
          </Switch>
        </Suspense>
      </Router>
    </AuthState>
  );
}

export default App;
