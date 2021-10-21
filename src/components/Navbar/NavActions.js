import { useDashboard } from "../../contexts/DashboardContext";
import { Delete, Download, FolderPlus, Upload } from "../Icons";
import UploadFile from "../UploadFile";

const NavActions = () => {
  const { setToggleModal, selectedFile } = useDashboard();
  return (
    <>
      <button
        className="text-blue-600 cursor-pointer"
        onClick={() => setToggleModal((prev) => !prev)}
      >
        <FolderPlus size={24} className="cursor-pointer" />
      </button>
      <label>
        <Upload size={24} className="text-blue-600 cursor-pointer" />
        <UploadFile />
      </label>
      <Download
        size={24}
        className={`${
          selectedFile ? "text-blue-600 cursor-pointer" : "text-gray-300"
        }`}
      />
      <Delete
        size={24}
        className={`${
          selectedFile ? "text-blue-600 cursor-pointer" : "text-gray-300"
        }`}
      />
    </>
  );
};

export default NavActions;
