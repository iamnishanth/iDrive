import { useContext, createContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboard = () => {
  return useContext(DashboardContext);
};

const DashboardProvider = ({ children }) => {
  const [toggleModal, setToggleModal] = useState(false);
  const [contentLoading, setContentLoading] = useState(false);
  const [sort, setSort] = useState("createdAt");

  const value = {
    toggleModal,
    setToggleModal,
    contentLoading,
    setContentLoading,
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
