import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
  const { signout, currentUser } = useAuth();
  const history = useHistory();

  const onSignout = async () => {
    try {
      await signout();
      history.push("/signin");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="min-h-full h-full flex items-center justify-center">
      <Link to="/" className="absolute top-3 left-3 text-sm">
        Go back
      </Link>
      <div>
        {currentUser?.photoURL.length > 0 && (
          <img
            className="mx-auto mb-5 rounded-full"
            src={currentUser.photoURL}
            alt="profile-pic"
          />
        )}
        <h1 className="text-xl text-center mb-5">
          Hi {currentUser.displayName}!
        </h1>
        <button
          className="p-2 w-64 rounded-md border-2 border-solid border-gray-200 bg-white hover:shadow-md transition-shadow ease-in"
          onClick={onSignout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
