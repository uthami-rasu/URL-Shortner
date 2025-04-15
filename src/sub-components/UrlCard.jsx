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

const UrlCard = () => {
  return (
    <div className="w-full mx-auto bg-white py-5 px-5 font-[Poppins]">
      <div className="flex flex-col gap-y-3">
        <h1 className="text-2xl font-semibold ">Title of The Link</h1>
        <a className="text-base text-blue-700 font-medium underline">
          <u> razzly/xyhjaaz</u>
        </a>
        <a className="text-base  font-medium">https://razz.com</a>

        <div className="flex flex-col gap-y-3">
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
            Apr 12, 2025
          </h4>
          <h4 className="text-md flex items-center p-1 rounded-xs  text-gray-600 gap-x-1">
            <span>
              <TagIcon fill={"black"} height={18} width={18} />
            </span>
            No tags
          </h4>
        </div>
      </div>

      <div className="flex items-center justify-between py-2  gap-x-2 font-[Lato]">
        <button className="flex items-center font-medium p-1 rounded-xs grow-1 bg-gray-200 justify-center gap-x-1 font-[Lato]">
          <span>
            <CopyIcon />
          </span>
          Copy
        </button>
        <button className="flex items-center p-1 rounded-xs border border-gray-300 justify-center gap-x-1">
          <span>
            <ShareIcon />
          </span>
          Share
        </button>
        <button className="flex items-center p-2 rounded-xs  border border-gray-300 justify-center gap-x-1">
          <EditIcon />
        </button>
        <button className="flex items-center p-2 rounded-xs  border border-gray-300 justify-center gap-x-1">
          <span>
            <DotsIcon />
          </span>
        </button>
      </div>
    </div>
  );
};

export default UrlCard;
