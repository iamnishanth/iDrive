import { useParams } from "react-router-dom";
import { ROOT_FOLDER, useFolder } from "../hooks/useFolder";
import { useAuth } from "../contexts/AuthContext";
import { storage, database } from "../firebase";

const UploadFile = () => {
  const { folderId } = useParams();
  const { folder } = useFolder(folderId);
  const { currentUser } = useAuth();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (folder === null || file === null) {
      return;
    }

    const filePath =
      folder === ROOT_FOLDER
        ? `${folder.path.join("/")}/${file.name}`
        : `${folder.path.join("/")}/${folder.name}/${file.name}`;

    const uploadTask = storage
      .ref(`/files/${currentUser.uid}/${filePath}`)
      .put(file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      () => {},
      () => {
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
  return <input type="file" className="hidden" onChange={handleFileUpload} />;
};

export default UploadFile;
