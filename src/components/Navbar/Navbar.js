import { Link } from "react-router-dom";
import NavActions from "./NavActions";
import AddFolderModal from "../AddFolderModal";
import { useFolder } from "../../hooks/useFolder";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";
import { useDashboard } from "../../contexts/DashboardContext";

const Navbar = () => {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const { setSelectedFile } = useDashboard();

  return (
    <div className="top-0 z-20" style={{ position: "sticky" }}>
      <header className="px-4 w-full h-11 border-b-2 border-solid border-gray-200 bg-white flex items-center justify-between">
        <div
          onClick={() => {
            setSelectedFile(null);
          }}
        >
          <Link to="/" className="text-xl font-semibold">
            iCloud <span className="text-blue-600">Drive</span>
          </Link>
        </div>
        <div className="hidden md:w-52 md:flex md:justify-between">
          <NavActions />
        </div>
        <div
          className="flex items-center"
          onClick={() => {
            setSelectedFile(null);
          }}
        >
          <h1 className="text-lg">iamNishanth</h1>
        </div>
      </header>
      <Breadcrumbs currentFolder={folder} />
      <div className="px-4 w-full h-11 border-b-2 border-solid border-gray-200 bg-white flex items-center justify-evenly md:hidden">
        <NavActions />
      </div>
      <AddFolderModal currentFolder={folder} />
    </div>
  );
};

export default Navbar;
