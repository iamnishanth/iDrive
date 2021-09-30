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
            <Route exact path="/signin" component={Signin} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
