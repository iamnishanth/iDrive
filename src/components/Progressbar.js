const Progressbar = ({ file }) => {
  return (
    <div className="p-3 w-full bg-gray-200 flex justify-between rounded-md">
      <h1 className="truncate w-1/2">{file.name}</h1>
      <div className="w-1/2 bg-white rounded-md">
        <div
          className="bg-green-400 h-full flex justify-center rounded-md"
          style={{ width: `${Math.round(file.progress * 100)}%` }}
        >
          {Math.round(file.progress * 100)}%
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
