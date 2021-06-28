import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import PrivateRoute from "./components/PrivateRoute";
import AuthState from "./context/auth/AuthState";
import setAuthToken from "./utils/setAuthToken";
import axios from "axios";
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
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
            <PrivateRoute path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <PrivateRoute path={ROUTES.KEY} component={Key} exact />
          </Switch>
        </Suspense>
      </Router>
    </AuthState>
  );
}

export default App;
