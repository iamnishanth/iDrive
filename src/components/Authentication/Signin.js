import { useAuth } from "../../contexts/AuthContext";
import { Redirect } from "react-router-dom";

import { Google } from "../Icons";
import logo from "../../images/logo.png";

const Signin = () => {
  const { loading, signin, currentUser } = useAuth();

  const onSignin = async () => {
    try {
      await signin();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="min-h-full flex items-center justify-center bg-gray-50">
      {!loading && !currentUser && (
        <div>
          <img src={logo} alt="logo" className="mx-auto" />
          <h1 className="text-xl m-4 text-center">Sign in to iDrive</h1>
          <button
            className="p-2 w-64 rounded-md shadow-md bg-white flex items-center justify-center hover:shadow-lg transition-shadow ease-in mx-auto mb-10"
            onClick={onSignin}
          >
            <Google className="mr-2" />
            Login with Google
          </button>
        </div>
      )}
      {!loading && currentUser && <Redirect to="/" />}
    </div>
  );
};

export default Signin;
