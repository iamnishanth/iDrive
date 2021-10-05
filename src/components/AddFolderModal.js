import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useDashboard } from "../contexts/DashboardContext";
import { database } from "../firebase";
import folder from "../images/folder.png";
import { ROOT_FOLDER } from "../hooks/useFolder";

const AddFolderModal = ({ currentFolder }) => {
  const [folderName, setFolderName] = useState("untitled folder");
  const { toggleModal, setToggleModal } = useDashboard();
  const { currentUser } = useAuth();

  const handleSubmit = () => {
    if (currentFolder === null) return;

    const path = [...currentFolder.path];
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id });
    }

    database.folders.add({
      name: folderName,
      userId: currentUser.uid,
      createdAt: database.getTimeStamp(),
      parentId: currentFolder.id,
      path,
    });
    setFolderName("untitled folder");
    setToggleModal(false);
  };

  return (
    <>
      {toggleModal && (
        <div className="min-h-full w-full fixed top-0 left-0 flex items-center justify-center backdrop-filter backdrop-blur-xl z-20">
          <div className="h-96 w-1/2 flex flex-col items-center justify-center">
            <img src={folder} alt="folder" className="w-48" />
            <input
              type="text"
              placeholder="Enter folder name"
              className="border-2 border-gray-300 border-solid px-3 py-2 rounded-md outline-none text-center"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
            />
            <div className="flex justify-evenly mt-4 w-64">
              <button
                className="px-4 py-2 text-blue-500 font-semibold"
                onClick={() => setToggleModal(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-blue-500 font-semibold"
                onClick={handleSubmit}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddFolderModal;
