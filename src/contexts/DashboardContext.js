import { useContext, createContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboard = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [sort, setSort] = useState("createdAt");
  const [selectedFile, setSelectedFile] = useState(null);

  const value = {
    toggleModal,
    setToggleModal,
    selectedFile,
    setSelectedFile,
    sort,
    setSort,
  };

  return (
    <DashboardContext.Provider value={value}>
      {children}
    </DashboardContext.Provider>
  );
};

export default DashboardProvider;
