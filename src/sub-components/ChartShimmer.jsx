import React from "react";

const ChartShimmer = () => {
  return (
    <div className="w-full h-full flex flex-col justify-around">
      {/* <div
        style={{
          animation: "shimmer 2s infinite linear",
        }}
        className="w-10/12 mx-auto h-1/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]  rounded-2xl"
      ></div> */}
      <div
        style={{
          animation: "shimmer 2s infinite linear",
        }}
        className="w-10/12 mx-auto h-9/12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] rounded-2xl"
      ></div>
    </div>
  );
};

export default ChartShimmer;
