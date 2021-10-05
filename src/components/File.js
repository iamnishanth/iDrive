import fileIcon from "../images/file.png";

const File = ({ file }) => {
  const extension = file.name.split(".");

  return (
    <div className="col-4 md:col-2 flex flex-col items-center justify-center">
      <a
        href={file.url}
        target="_blank"
        rel="noreferrer"
        className="relative h-32 w-32 flex justify-center items-center"
      >
        <img src={fileIcon} alt="file-icon" className="h-32 absolute top-0" />
        <h1 className="absolute text-xl text-blue-500 font-semibold">
          {extension[extension.length - 1]}
        </h1>
      </a>
      <a
        href={file.url}
        target="_blank"
        rel="noreferrer"
        className="w-32 truncate text-center mt-1"
      >
        {file.name}
      </a>
    </div>
  );
};

export default File;
