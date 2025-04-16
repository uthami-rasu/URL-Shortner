import React from "react";
import {
  CalenderIcon,
  FilterIcon,
  SearchIcon,
} from "../sub-components/SvgStore";
import UrlCard from "../sub-components/UrlCard";
import { useSelector } from "react-redux";

const ListView = () => {
  const urlLists = useSelector((store) => store?.urls.urlLists);

  return (
    <div className="w-full lg:w-11/12 mx-auto p-5 flex flex-col items-center">
      <div className="w-full flex flex-col justify-between gap-x-2 gap-y-4 ">
        <h1 className="text-3xl font-[poppins] font-semibold">Razzly Links</h1>
        <div className="w-full flex flex-col gap-y-3 gap-x-3 border-b-2 border-gray-300 pb-7 md:flex-row md:justify-between md:items-center ">
          <div className="w-full flex justify-start bg-white text-black items-center border rounded-xs border-gray-300 px-2 py-1 hover:border-blue-700 md:grow-1">
            <SearchIcon className="text-gray-700 " />
            <input
              className="flex w-full font-[Lato]  pl-2 py-1.5 outline-0 font-medium "
              type="search"
              placeholder="Search Links..."
            />
          </div>

          <div className="flex w-full justify-between  items-center lg:justify-start gap-x-1 lg:gap-x-3">
            <button className="flex justify-center font-semibold rounded-xs gap-x-2 items-center p-2 px-3 border-2 border-gray-300 bg-white hover:bg-transparent">
              <CalenderIcon />
              Filter by created date
            </button>
            <button className="flex justify-center font-semibold rounded-xs gap-x-2 items-center p-2 px-3 border-2 border-gray-300 bg-white hover:bg-transparent">
              <FilterIcon />
              Add filters
            </button>
          </div>
        </div>
      </div>
      <div className="w-full p-2 flex flex-col gap-y-7 ">
        {urlLists && urlLists.length > 0
          ? urlLists.map((u) => {
              return <UrlCard {...u} styles={"mt-5"} />;
            })
          : "Nothing to Display"}
      </div>
    </div>
  );
};

export default ListView;
