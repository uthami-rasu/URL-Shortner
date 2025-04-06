import React from "react";

const DashboardCard = ({ Title, Data }) => {
  return (
    <div className="w-5/6 border-[2px] border-orange-400 shadow-lg flex-1 flex flex-col justify-between items-center gap-y-6 p-4 text-center rounded-md">
      <h1
        className="text-6xl text-[#031f39] font-extrabold font-[Lato]"
        style={{ textShadow: "1px 1px 2px #031f39" }}
      >
        10
      </h1>
      <h2
        className="text-2xl text-[#031f39] font-semibold font-[Lato]"
        style={{ textShadow: "1px 1px 1px #031f39" }}
      >
        Total Clicks
      </h2>
    </div>
  );
};

export default DashboardCard;
