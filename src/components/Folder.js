import { Link } from "react-router-dom";
import folderIcon from "../images/folder.png";

const Folder = ({ folder }) => {
  return (
    <div className="col-4 md:col-2">
      <div className="grid place-items-center">
        <Link to={`/folder/${folder.id}`}>
          <img src={folderIcon} alt="folder-icon" className="w-20 md:w-32" />
          <p className="w-full truncate text-center">{folder.name}</p>
        </Link>
      </div>
    </div>
  );
};

export default Folder;
