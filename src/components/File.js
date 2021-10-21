import { useState, useEffect } from "react";
import { useDashboard } from "../contexts/DashboardContext";
import fileIcon from "../images/file.png";

const File = ({ file }) => {
  const [clicks, setClicks] = useState(0);
  const { selectedFile, setSelectedFile } = useDashboard();
  const extension = file.name.split(".");

  const singleClickHandler = () => {
    setSelectedFile(file);
  };

  const doubleClickHandler = () => {
    window.open(file.url);
  };

  useEffect(() => {
    let singleClickTimer;
    if (clicks === 1) {
      singleClickTimer = setTimeout(() => {
        singleClickHandler();
        setClicks(0);
      }, 250);
    } else if (clicks === 2) {
      doubleClickHandler();
      setClicks(0);
    }

    return () => clearTimeout(singleClickTimer);
  }, [clicks]);

  return (
    <div
      className={`col-4 md:col-2 flex flex-col items-center justify-center rounded-lg ${
        selectedFile?.id === file.id ? "bg-blue-100" : ""
      }`}
    >
      <div
        style={{
          backgroundImage: `url("${
            ["jpeg", "jpg", "png"].includes(extension[extension.length - 1])
              ? file.url
              : fileIcon
          }")`,
        }}
        className="h-20 md:h-32 w-20 md:w-32 grid place-items-center bg-contain bg-center bg-no-repeat cursor-pointer rounded-lg"
        onClick={() => setClicks(clicks + 1)}
      >
        {!["jpeg", "jpg", "png"].includes(extension[extension.length - 1]) && (
          <h1 className="text-md md:text-xl text-blue-500 font-semibold select-none">
            {extension[extension.length - 1]}
          </h1>
        )}
      </div>
      <p className="w-20 md:w-32 truncate text-center">{file.name}</p>
    </div>
  );
};

export default File;
