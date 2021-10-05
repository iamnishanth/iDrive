import { Link } from "react-router-dom";
import NavActions from "./NavActions";
import AddFolderModal from "../AddFolderModal";
import { useFolder } from "../../hooks/useFolder";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs";

const Navbar = () => {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);

  return (
    <>
      <header className="px-4 w-full h-11 border-b-2 border-solid border-gray-200 flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-semibold">
            iCloud <span className="text-blue-600">Drive</span>
          </Link>
        </div>
        <div className="hidden md:w-52 md:flex md:justify-between">
          <NavActions />
        </div>
        <div className="flex items-center">
          <h1 className="text-lg">iamNishanth</h1>
        </div>
      </header>
      <Breadcrumbs currentFolder={folder} />
      <div className="px-4 w-full h-11 border-b-2 border-solid border-gray-200 flex items-center justify-evenly md:hidden">
        <NavActions />
      </div>
      <AddFolderModal currentFolder={folder} />
    </>
  );
};

export default Navbar;
