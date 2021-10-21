import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import DashboardProvider from "./contexts/DashboardContext";

import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/Dashboard";
import Signin from "./components/Authentication/Signin";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <DashboardProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute
                exact
                path="/folder/:folderId"
                component={Dashboard}
              />
              <Route exact path="/signin" component={Signin} />
              <PrivateRoute exact path="/profile" component={Profile} />
            </Switch>
          </Router>
        </DashboardProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
