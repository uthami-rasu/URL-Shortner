import React from "react";
import { useSelector } from "react-redux";

const ChartWrapper = ({ children, Title, BottomTitle }) => {


 
  return (
    <div
      className="flex flex-col gap-1 w-full rounded-md p-3 shadow-md bg-white "
      style={{
        boxShadow: "0px 0px 1px gray",
      }}
    >
      <h1 className="text-xl font-semibold text-[#031f39] text-center font-[Poppins]  ml-2 mt-2">
        {Title}
      </h1>
      <div className="mt-5">{children}</div>
      <br></br>
      <br></br>

      {/* <h2 className="text-lg text-center text-[#031f39] font-medium font-[Poppins] mt-2 pb-3">
        {BottomTitle || "Example By Last 7 Days"}
      </h2> */}
    </div>
  );
};

export default ChartWrapper;
