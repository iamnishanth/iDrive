import DashboardProvider from "../contexts/DashboardContext";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import File from "./File";
import Navbar from "./Navbar/Navbar";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const { folderId } = useParams();
  const { childFolders, childFiles } = useFolder(folderId);

  return (
    <DashboardProvider>
      <div className="min-h-full flex flex-col">
        <Navbar />
        <div className="container-fluid">
          <div className="row gy-2 mt-0">
            {childFolders.length > 0 && (
              <>
                {childFolders.map((childFolder) => (
                  <Folder folder={childFolder} key={childFolder.id} />
                ))}
              </>
            )}
            {childFiles.length > 0 && (
              <>
                {childFiles.map((childFile) => (
                  <File file={childFile} key={childFile.id} />
                ))}
              </>
            )}
          </div>
        </div>
        {childFolders.length === 0 && (
          <div className="flex flex-col flex-1 items-center justify-center">
            <h1 className="text-3xl text-gray-400">This folder is empty</h1>
            <p className="text-gray-400 py-3">
              You can upload files by clicking the upload icon.
            </p>
          </div>
        )}
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
