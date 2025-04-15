import React from "react";
import {
  AnalyticsBar,
  CalenderIcon,
  TagIcon,
  CopyIcon,
  ShareIcon,
  EditIcon,
  DotsIcon,
} from "./SvgStore";

const UrlCard = ({ shortUrl, originalUrl, name, createdAt, styles }) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row  mx-auto bg-white py-4 px-5 font-[Poppins] ${styles}`}
    >
      <div className="flex lg:grow-2 p-1 ">
        {/* <div className="h-11  w-11 bg-red-500 rounded-[50%] flex items-start justify-start border-2 border-gray-300">
          <img
            className=" h-10 "
            src="https://www.google.com/s2/favicons?domain=uthami-rasu.web.app"
          />
        </div> */}
        <div className="relative w-full left-10 flex px-1 flex-col pb-3 gap-y-3 border-b-2 my-5 border-gray-300 lg:border-0">
          <span className="absolute flex items-center justify-center top-[-3px] left-[-50px] h-11 w-11 border-2 border-gray-300 rounded-[50%]">
            <img
              className=" h-9 "
              src="https://www.google.com/s2/favicons?domain=uthami-rasu.web.app"
            />
          </span>
          <h1 className="text-2xl font-semibold">{name || "No Title"}</h1>
          <a
            className="text-base text-blue-700 font-medium underline"
            href=""
            target="_blank"
          >
            <u> {"razzly/" + shortUrl}</u>
          </a>
          <a
            className="text-base text-wrap text-left font-medium"
            href={originalUrl}
            target="_blank"
          >
            {originalUrl.slice(0, 30)}
          </a>

          <div className="flex flex-col gap-y-1">
            <h3 className="text-md flex items-center p-1 rounded-xs  gap-x-1">
              <span>
                <AnalyticsBar height={19} width={19} />
              </span>
              Click Data
            </h3>
            <h4 className=" flex items-center p-1 rounded-xs  gap-x-1 text-base">
              <span>
                <CalenderIcon height={17} width={17} />
              </span>
              {createdAt}
            </h4>
            <h4 className="text-md flex items-center p-1 rounded-xs  text-gray-600 gap-x-1">
              <span>
                <TagIcon fill={"black"} height={18} width={18} />
              </span>
              No tags
            </h4>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between py-1 lg:grow-1 gap-x-2 font-[Lato]  md:w-6/12 md:self-end md:basis-1 lg:self-start lg:mt-4">
        <button className="flex items-center font-medium p-1 rounded-xs grow-1 hover:bg-gray-300 bg-gray-200 justify-center gap-x-1 font-[Lato]">
          <span>
            <CopyIcon />
          </span>
          Copy
        </button>
        <button className="flex items-center p-1 rounded-xs border md:grow-1 hover:bg-gray-100 border-gray-300 justify-center gap-x-1">
          <span>
            <ShareIcon />
          </span>
          Share
        </button>
        <button className="flex items-center p-2 rounded-xs  border md:grow-0.5 hover:bg-gray-100 border-gray-300 justify-center gap-x-1">
          <EditIcon />
        </button>
        <button className="flex items-center p-2 rounded-xs  border md:grow-0.5 hover:bg-gray-100 border-gray-300 justify-center gap-x-1">
          <span>
            <DotsIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UrlCard;
