import { HashLoader } from "react-spinners";
import UrlCardShimmer from "../sub-components/UrlCardShimmer";

const ListViewShimmer = () => {
  return (
    <div className="w-full lg:w-11/12 mx-auto p-7 flex flex-col items-center">
      <div className="w-full flex flex-col justify-between gap-x-2 gap-y-6 ">
        <h1 className="text-3xl font-[poppins] font-semibold h-8 shimmer border border-gray-300 w-10/12 md:w-4/12"></h1>
        <div className="w-full flex flex-col gap-y-3 gap-x-3 border-b-2 border-gray-300 pb-7 md:flex-row md:justify-between md:items-center ">
          <div className="w-full h-7 flex justify-start bg-white text-black items-center border rounded-xs border-gray-300 shimmer md:grow-1"></div>

          <div className="flex w-10/12 justify-between  items-center lg:justify-start gap-x-1 lg:gap-x-3">
            <div className="flex  h-7 grow-1 justify-center font-semibold rounded-xs gap-x-2 items-center p-2 px-3 shimmer border border-gray-300 bg-white"></div>
            <div className="flex h-7     grow -1 justify-center font-semibold rounded-xs gap-x-2 items-center p-2 px-3 shimmer border border-gray-300 bg-white"></div>
          </div>
        </div>
      </div>
      <div className="w-full p-2 flex flex-col gap-y-8 text-center">
        <UrlCardShimmer styles={"mt-5"} />
        <UrlCardShimmer />
        <div className="text-lg font-medium flex gap-x-2 items-center justify-center font-[Poppins]">
          <HashLoader color={"red"} size={15} />
          Loading...
        </div>
      </div>
    </div>
  );
};

export default ListViewShimmer;
