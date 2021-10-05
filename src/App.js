import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import Dashboard from "./components/Dashboard";
import Signin from "./components/Authentication/Signin";

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute
              exact
              path="/folder/:folderId"
              component={Dashboard}
            />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/secret" component={Dashboard} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
