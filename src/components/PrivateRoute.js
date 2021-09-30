import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Loading from "./Loading";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { currentUser, loading } = useAuth();
  console.log(currentUser);
  console.log(loading);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Route
          {...rest}
          component={currentUser ? Component : () => <Redirect to="/signin" />}
        />
      )}
    </>
  );
};

export default PrivateRoute;
