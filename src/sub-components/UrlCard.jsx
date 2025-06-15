import React, { useEffect, useState } from "react";
import {
  AnalyticsBar,
  CalenderIcon,
  TagIcon,
  CopyIcon,
  ShareIcon,
  EditIcon,
  DotsIcon,
} from "./SvgStore";
import { copyToClibBoard, naNodify } from "../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateQrPopup } from "../Utils/popupSlice";
import { useNavigate } from "react-router-dom";
import { setSelectedOptions } from "../Utils/filterSlice";
import { label } from "framer-motion/client";

const UrlCard = ({ shortUrl, originalUrl, name, createdAt, styles }) => {
  const [copy, setIsCopy] = useState("Copy");

  const [isDotsOpen, setIsDotsOpen] = useState(false);

  const navigate = useNavigate();

  const qr = useSelector((store) => store.popups.qr);

  const [localQr, setLocalQr] = useState(false);

  const dispatch = useDispatch();

  const hanldeCopy = () => {
    setIsCopy("Copied");
    copyToClibBoard("https://dev-razzly.web.app/r/" + shortUrl);
    setTimeout(() => {
      setIsCopy("Copy");
    }, 2000);
  };

  const handleQrOpen = () => {
    dispatch(
      updateQrPopup({
        isQrOpen: true,
        currTitle: name,
        currQrLink: shortUrl,
      })
    );
    setIsDotsOpen(false);
  };
  const handleDotsOpen = () => {
    setIsDotsOpen(!isDotsOpen);
  };

  const redirectToAnalytics = (data) => {
    dispatch(setSelectedOptions(data));
    navigate("/analytics");
  };

  useEffect(() => {
    if (!localQr) {
      return;
    }

    dispatch(
      updateQrPopup({
        isQrOpen: true,
        currTitle: qr.currTitle,
        currQrLink: "https://dev-razzly.web.app/r/" + shortUrl,
      })
    );
  }, [localQr]);
  return (
    <div
      className={`relative w-full flex flex-col lg:flex-row  mx-auto bg-white py-4 px-5 font-[Poppins] ${styles}`}
    >
      <div className="flex p-1 lg:w-9/12">
        <div className="relative w-full left-10 flex text-wrap px-1 flex-col pb-1 gap-y-3  my-2 border-gray-300 lg:border-0 ">
          <span className="absolute flex items-center justify-center top-[-3px] left-[-50px] h-11 w-11 border-2 border-gray-300 rounded-[50%]">
            <img
              className=" h-9 "
              src="https://www.google.com/s2/favicons?domain=uthami-rasu.web.app"
            />
          </span>
          <h1 className="text-2xl font-semibold">{name || "No Title"}</h1>
          <a
            className="text-base text-blue-700 font-medium underline"
            href={`http://dev-razzly.web.app/r/${shortUrl}`}
            target="_blank"
          >
            <u> {"razzly/" + shortUrl}</u>
          </a>
          <p className="w-11/12">
            <a
              className="block w-full break-all text-base text-left font-medium"
              href={originalUrl}
              target="_blank"
            >
              {/* {originalUrl.slice(0, 30) + ".."} */}
              {originalUrl}
            </a>
          </p>

          <div className="flex flex-col gap-y-1">
            <h3
              className="text-md flex items-center p-1 rounded-xs  gap-x-1 cursor-pointer"
              onClick={() =>
                redirectToAnalytics({
                  value: shortUrl,
                  label: name ?? "No Title",
                })
              }
            >
              <span>
                <AnalyticsBar height={19} width={19} />
              </span>
              Click to view Data
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
      <hr className="bg-gray-300 border border-gray-300 my-3 lg:hidden" />

      <div className="w-full flex items-center justify-between py-1 lg:grow-1 gap-x-2 font-[Lato]  md:w-6/12 md:self-end md:basis-1 lg:self-start lg:mt-4">
        <button
          onClick={hanldeCopy}
          className="flex items-center cursor-pointer font-medium p-1 rounded-xs grow-1 hover:bg-gray-300 bg-gray-200 justify-center gap-x-1 font-[Lato]"
        >
          <span>
            <CopyIcon />
          </span>
          {copy}
        </button>
        <button
          onClick={naNodify}
          className="flex items-center p-1 cursor-pointer rounded-xs border md:grow-1 hover:bg-gray-100 border-gray-300 justify-center gap-x-1"
        >
          <span>
            <ShareIcon />
          </span>
          Share
        </button>
        <button
          onClick={naNodify}
          className="flex items-center p-2 rounded-xs  border md:grow-0.5 hover:bg-gray-100 border-gray-300 justify-center gap-x-1"
        >
          <EditIcon />
        </button>
        <button
          onClick={handleDotsOpen}
          className="flex cursor-pointer items-center p-2 rounded-xs  border md:grow-0.5 hover:bg-gray-100 border-gray-300 justify-center gap-x-1"
        >
          <span>
            <DotsIcon />
          </span>
        </button>
      </div>
      {isDotsOpen && (
        <div className="absolute bottom-18 h-20 right-5 flex flex-col w-3/12 bg-white/98 border text-center mx-auto border-gray-300 p-1 lg:top-20 lg:bottom-30 lg:w-2/12">
          <button
            onClick={handleQrOpen}
            className="border-b hover:bg-gray-100 cursor-pointer text-black p-1 border-gray-300"
          >
            View Qr Code
          </button>
          <button
            onClick={naNodify}
            className="border-0 p-1 cursor-pointer text-black border-gray-300"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default UrlCard;
