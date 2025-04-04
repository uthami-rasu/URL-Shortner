import React from "react";

const Card = ({ imgSrc, title, desciption }) => {
  return (
    <div className="flex flex-col flex-1 justify-start items-start bg-[#eeeae3] w-full gap-y-5 pl-2 py-4 rounded-xl h-full">
      <img className="h-20 w-20" src={imgSrc} alt="card-image" />
      <h1 className="text-5xl font-extrabold text-[#031f39] lg:text-7xl">
        {title}
      </h1>
      <h4 className="text-lg font-medium mb-3 text-wrap text-center lg:text-xl lg:font-base">
        {desciption}
      </h4>
    </div>
  );
};

export default Card;
