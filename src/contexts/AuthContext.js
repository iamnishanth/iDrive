import { createContext, useContext, useState, useEffect } from "react";
import { auth, signInWithGoogle } from "../firebase";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signin = () => {
    return signInWithGoogle();
  };

  const signout = () => {
    return auth.signOut();
  };

  const value = {
    currentUser,
    signin,
    loading,
    signout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
