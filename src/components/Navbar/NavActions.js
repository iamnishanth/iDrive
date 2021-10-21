import { useDashboard } from "../../contexts/DashboardContext";
import { useAuth } from "../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import { useFolder, ROOT_FOLDER } from "../../hooks/useFolder";
import { database, storage } from "../../firebase";
import { Delete, Download, FolderPlus, Upload } from "../Icons";
import UploadFile from "../UploadFile";

const NavActions = () => {
  const { setToggleModal, selectedFile, setSelectedFile } = useDashboard();
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const { currentUser } = useAuth();

  const downloadFile = () => {
    if (selectedFile) {
      window.open(selectedFile.url);
    }
  };

  const deleteFile = () => {
    if (selectedFile) {
      if (window.confirm("Are you sure?")) {
        database.files
          .where("name", "==", selectedFile.name)
          .where("userId", "==", currentUser.uid)
          .get()
          .then((file) => {
            file.forEach((doc) => {
              doc.ref.delete();
            });
            console.log("Deleted from db");
          });
        const filePath =
          folder === ROOT_FOLDER
            ? `${folder.path.join("/")}/${selectedFile.name}`
            : `${folder.path.join("/")}/${folder.name}/${selectedFile.name}`;
        storage
          .ref(`/files/${currentUser.uid}/${filePath}`)
          .delete()
          .then(() => {
            console.log("Deleted from Storage");
            setSelectedFile(null);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

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
      <button onClick={downloadFile}>
        <Download
          size={24}
          className={`${
            selectedFile ? "text-blue-600 cursor-pointer" : "text-gray-300"
          }`}
        />
      </button>
      <button onClick={deleteFile}>
        <Delete
          size={24}
          className={`${
            selectedFile ? "text-blue-600 cursor-pointer" : "text-gray-300"
          }`}
        />
      </button>
    </>
  );
};

export default NavActions;
