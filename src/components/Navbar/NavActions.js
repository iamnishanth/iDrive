import { Delete, Download, FolderPlus, Upload } from "../Icons";

const NavActions = () => {
  return (
    <>
      <FolderPlus size={24} className="text-blue-600 cursor-pointer" />
      <Upload size={24} className="text-blue-600 cursor-pointer" />
      <Download size={24} className="text-blue-600 cursor-pointer" />
      <Delete size={24} className="text-blue-600 cursor-pointer" />
    </>
  );
};

export default NavActions;
