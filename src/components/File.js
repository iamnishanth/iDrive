import fileIcon from "../images/file.png";

const File = ({ file }) => {
  const extension = file.name.split(".");

  console.log(fileIcon);

  return (
    <div className="col-4 md:col-2 flex flex-col items-center justify-center">
      <div
        style={{ backgroundImage: `url("${fileIcon}")` }}
        className="h-20 md:h-32 w-20 md:w-32 grid place-items-center bg-contain bg-center bg-no-repeat cursor-pointer"
      >
        <h1 className="text-md md:text-xl text-blue-500 font-semibold">
          {extension[extension.length - 1]}
        </h1>
      </div>
      <p className="w-32 truncate text-center">{file.name}</p>
    </div>
  );
};

export default File;
