import { ArrowClockwise } from "./Icons";

const Loading = () => {
  return (
    <div className="min-h-full bg-gray-50 grid place-items-center">
      <ArrowClockwise className="animate-spin" size="48" />
    </div>
  );
};

export default Loading;
