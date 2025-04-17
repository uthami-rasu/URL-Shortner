import React, { useEffect, useRef } from "react";
import { CopyIcon } from "../sub-components/SvgStore";
import { qrConfig } from "../Utils/constants";
import QRCodeStyling from "qr-code-styling";
import { copyToClibBoard } from "../Utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { updateQrPopup } from "../Utils/popupSlice";
const QrPopup = () => {
  const ref = useRef(null);

  const qrInstance = useRef(null);

  const qr = useSelector((store) => store.popups.qr);

  if (!qr.isQrOpen) {
    return;
  }
  const dispatch = useDispatch();

  useEffect(() => {
    qrConfig.height = window.innerWidth >= 728 ? 200 : 180;
    qrConfig.width = window.innerWidth >= 728 ? 200 : 180;
    qrConfig.data = "https://dev-razzly.web.app/r/" + qr.currQrLink;
    qrInstance.current = new QRCodeStyling(qrConfig);

    // Clear old QR if re-rendered
    ref.current.innerHTML = "";
    qrInstance.current.append(ref.current);
  }, []);

  const handleDownload = () => {
    if (qrInstance.current) {
      qrConfig.height = 300;
      qrConfig.width = 300;
      qrInstance.current = new QRCodeStyling(qrConfig);
      qrInstance.current.download({ name: qr.currTitle, extension: "png" });
    } else {
      console.log("not downloaed");
    }
  };

  const handleClose = () => {
    dispatch(
      updateQrPopup({
        isQrOpen: false,
        currTitle: "",
        currQrLink: "",
      })
    );
  };
  return (
    <div className="fixed  top-0 h-screen w-full bg-black/50 z-10">
      <div className="fixed top-2/6 mx-auto left-1/2 transform -translate-x-1/2 h-auto w-11/12 bg-white/97 z-10 rounded-md px-4 py-4 md:w-10/12 md:px-5 lg:w-6/12 md:top-3/12">
        <h1 className="text-xl font-medium leading-loose  font-[Lobster] md:text-3xl">
          Your QR code is just a click away! 🚀
        </h1>
        <h2 className="text-lg font-medium mt-3 font-[Poppins]">
          {qr.currTitle || "Sample Title "}
        </h2>
        <div className="md:flex w-full">
          <div className="my-3 flex md:flex-col gap-x-2 md:flex md:grow-5 md:mr-20 md:gap-x-1">
            <a
              href={"https://dev-razzly.web.app/r/" + qr.currQrLink}
              target="_blank"
              className="block text-base  px-2 py-2 font-[Poppins] border border-gray-300 w-9/12 md:h-10 md:w-full"
            >
              {"dev-razzly/" + qr.currQrLink}
            </a>
            <button
              onClick={() =>
                copyToClibBoard("https://dev-razzly.web.app/r/" + qr.currQrLink)
              }
              className="flex items-center cursor-pointer font-medium p-1 rounded-xs grow-1 md:grow-0 hover:bg-gray-300 bg-gray-200 justify-center gap-x-1 font-[Lato] md:mt-2 md:w-30"
            >
              <span>
                <CopyIcon />
              </span>
              <span className="hidden md:inline-block">Copy</span>
            </button>
          </div>
          <div className="md:relative border border-gray-200 md:top-[-20px] p-2 md:grow-1 my-3 md:my-2 mx-auto flex justify-center items-center">
            <div ref={ref} />
          </div>
        </div>
        <div className="w-full p-2 flex justify-around gap-x-10 items-center font-[Poppins] mb-3 md:w-11/12 md:mx-auto lg:mr-0 lg:w-6/12 md:justify-end">
          <button
            onClick={handleClose}
            className="text-black cursor-pointer border border-gray-300 grow-1 p-2 rounded-md px-4"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="bg-blue-700 cursor-pointer text-base text-white p-2  grow-1 rounded-md px-2"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default QrPopup;
