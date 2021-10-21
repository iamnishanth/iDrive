import { useState } from "react";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { useDashboard } from "../contexts/DashboardContext";
import { Link } from "react-router-dom";
import { LeftArrow } from "./Icons";

const Breadcrumbs = ({ currentFolder }) => {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    path = [...path, ...currentFolder.path];
  }

  const [optionValue, setOptionValue] = useState("createdAt");
  const { setSort, selectedFile, setSelectedFile } = useDashboard();

  const handleSortSelect = (e) => {
    setOptionValue(e.target.value);
    setSort(e.target.value);
  };

  return (
    <div
      className="flex items-center justify-between h-11 md:h-8 w-full px-4 border-b-2 border-solid border-gray-200 bg-white"
      onClick={() => {
        if (selectedFile !== null) {
          setSelectedFile(null);
        }
      }}
    >
      {currentFolder && (
        <>
          <div className="w-32 flex items-center">
            {path.length !== 0 && (
              <>
                <LeftArrow className="text-blue-600 md:text-gray-500" />
                <Link
                  to={
                    path[path.length - 1].id === null
                      ? "/"
                      : `/folder/${path[path.length - 1].id}`
                  }
                  className="truncate text-blue-600 md:text-gray-500 font-medium md:font-normal"
                >
                  {path[path.length - 1].name}
                </Link>
              </>
            )}
          </div>
          <h1 className="font-medium truncate">{currentFolder.name}</h1>
          <select
            className="w-32 text-right truncate bg-transparent text-blue-600 md:text-gray-500 font-medium md:font-normal"
            value={optionValue}
            onChange={handleSortSelect}
          >
            <option value="createdAt">Sort by Date</option>
            <option value="name">Sort by Name</option>
          </select>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
