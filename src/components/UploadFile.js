import { useState } from "react";
import ReactDOM from "react-dom";
import { useParams } from "react-router-dom";
import { ROOT_FOLDER, useFolder } from "../hooks/useFolder";
import { useAuth } from "../contexts/AuthContext";
import { storage, database } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import Progressbar from "./Progressbar";

const UploadFile = () => {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const { currentUser } = useAuth();
  const [uploadingFiles, setUploadingFiles] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (folder === null || file === null) {
      return;
    }

    const id = uuidv4();
    setUploadingFiles((prev) => [
      ...prev,
      { id: id, name: file.name, progress: 0, error: false },
    ]);

    const filePath =
      folder === ROOT_FOLDER
        ? `${folder.path.join("/")}/${file.name}`
        : `${folder.path.join("/")}/${folder.name}/${file.name}`;

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
        setUploadingFiles((prev) => {
          return prev.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, progress: progress };
            }
            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prev) => {
          return prev.map((uploadFile) => {
            if (uploadFile.id === id) {
              return { ...uploadFile, error: true };
            }
            return uploadFile;
          });
        });
      },
      () => {
        setUploadingFiles((prev) => {
          return prev.filter((uploadFile) => {
            return uploadFile.id !== id;
          });
        });

        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          database.files.add({
            url,
            name: file.name,
            createdAt: database.getTimeStamp(),
            folderId: folder.id,
            userId: currentUser.uid,
          });
        });
      }
    );
  };
  return (
    <>
      <input type="file" className="hidden" onChange={handleFileUpload} />

      {ReactDOM.createPortal(
        <div className="absolute bottom-8 right-8 w-64 z-50">
          {uploadingFiles.map((file) => (
            <Progressbar file={file} key={file.id} />
          ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default UploadFile;
