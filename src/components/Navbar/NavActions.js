import { Delete, Download, FolderPlus, Upload } from "../Icons";
import { useDashboard } from "../../contexts/DashboardContext";

const NavActions = () => {
  const { setToggleModal } = useDashboard();
  return (
    <>
      <button
        className="text-blue-600 cursor-pointer"
        onClick={() => setToggleModal((prev) => !prev)}
      >
        <FolderPlus size={24} className="cursor-pointer" />
      </button>
      <Upload size={24} className="text-blue-600 cursor-pointer" />
      <Download size={24} className="text-blue-600 cursor-pointer" />
      <Delete size={24} className="text-blue-600 cursor-pointer" />
    </>
  );
};

export default NavActions;
