import fileIcon from "../images/file.png";

const File = ({ file }) => {
  const extension = file.name.split(".");

  return (
    <div className="col-4 md:col-2 flex flex-col items-center justify-center">
      <a
        href={file.url}
        target="_blank"
        rel="noreferrer"
        className="relative h-20 md:h-32 w-20 md:w-32 flex justify-center items-center"
      >
        <img
          src={fileIcon}
          alt="file-icon"
          className="h-20 md:h-32 absolute top-0 z-10"
        />
        <h1 className="absolute z-10 text-xl text-blue-500 font-semibold">
          {extension[extension.length - 1]}
        </h1>
      </a>
      <a
        href={file.url}
        target="_blank"
        rel="noreferrer"
        className="w-20 md:w-32 truncate text-center mt-1"
      >
        {file.name}
      </a>
    </div>
  );
};

export default File;
