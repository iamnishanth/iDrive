import { ROOT_FOLDER } from "../hooks/useFolder";
import { Link } from "react-router-dom";
import { LeftArrow } from "./Icons";

const Breadcrumbs = ({ currentFolder }) => {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    path = [...path, ...currentFolder.path];
  }

  return (
    <div className="flex items-center justify-between h-11 md:h-8 w-full px-4 border-b-2 border-solid border-gray-200">
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
          <div className="w-32 text-right truncate text-blue-600 md:text-gray-500 font-medium md:font-normal">
            Sort by Name
          </div>
        </>
      )}
    </div>
  );
};

export default Breadcrumbs;
