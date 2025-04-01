import React, { useState } from "react";

const LinkGenrators = () => {
  const [shortUrlActive, setShortUrlActive] = useState(true);

  const handleClick = () => {
    setShortUrlActive(!shortUrlActive);
  };
  return (
    <div className="relative top-2/12 left-1/2 transform -translate-x-1/2 w-11/12">
      <ul className="flex justify-center items-center gap-10">
        <li
          className={`p-2   rounded-2xl  ${shortUrlActive ? "bg-white" : ""} ${
            !shortUrlActive ? "hover:bg-white/5" : ""
          }`}
        >
          <button
            className="cursor-pointer flex justify-center gap-1 items-center"
            onClick={handleClick}
          >
            <img
              className="h-12 w-12"
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/icon_product-links.svg"
            />
            <span
              className={`hidden md:inline-block ${
                shortUrlActive ? "text-[#031f39]" : "text-white"
              } font-bold`}
            >
              Short Link
            </span>
          </button>
        </li>

        <li
          className={`p-2  rounded-2xl ${!shortUrlActive ? "bg-white" : ""} ${
            !shortUrlActive ? "" : "hover:bg-white/5"
          }`}
        >
          <button
            className="cursor-pointer flex  justify-center gap-1 items-center"
            onClick={handleClick}
          >
            <img
              className="h-12 w-12"
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/icon_product-qr-codes.svg"
            />
            <span
              className={`hidden md:inline-block font-bold ${
                !shortUrlActive ? "text-[#031f39]" : "text-white"
              }`}
            >
              Qr Code
            </span>
          </button>
        </li>
      </ul>
      <div
        className={`relative bg-white py-7 px-6 rounded-4xl font-[Lato] mt-5 lg:w-8/12 lg:left-1/2 lg:transform lg:-translate-x-1/2 
          ${!shortUrlActive ? "lg:flex lg:justify-between" : "lg:block"}
          `}
      >
        <div className={`${!shortUrlActive ? "lg:w-8/12" : ""}  `}>
          <h1
            className="text-2xl font-semibold text-[#031f39] lg:text-3xl"
            style={{ textShadow: "0px 1px 1px #031f39" }}
          >
            {shortUrlActive ? "Shorten a long link" : "Create a QR Code"}
          </h1>
          <h6 className="text-lg text-[#031f39] my-2 font-medium font-[Lato] lg:text-xl">
            No credit card required.
          </h6>
          <br className="mx-1 lg:mx-4"></br>

          <h3 className="text-xl font-bold text-[#031f39] lg:font-extrabold">
            {shortUrlActive
              ? " Paste your long link here"
              : "Enter your QR Code destination"}
          </h3>
          <form className="flex flex-col justify-center gap-5 lg:gap-7">
            <input
              type="text"
              placeholder="https://example.com/my-long-url"
              className={`h-14 border-2 border-gray-300 rounded-md mt-3 py-2 px-4 text-lg outline-0 
            focus:border-blue-700 focus:border-3 focus:shadow-sm focus:shadow-blue-100 
            hover:bg-gray-50 hover:border-black hover:border ${
              !shortUrlActive ? "lg:w-9/12" : ""
            }
            `}
            />
            <button
              className={`flex items-center px-4 py-2 justify-between bg-blue-700 rounded-2xl text-lg text-white font-semibold text-center md:w-1/2 lg:text-xl lg:py-4
              ${!shortUrlActive ? "w-12/12" : "lg:w-2/6"}
              `}
            >
              <span className="flex-1">
                {shortUrlActive
                  ? "Get your link for free"
                  : "Get your QR Code for free"}
              </span>
              <span>
                <img src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/dist/82b3e8104ca2692bef7f.svg" />
              </span>
            </button>
          </form>
        </div>
        <div
          className={`hidden lg:block lg:bg-gray-300 rounded-2xl lg:w-4/12 ${
            shortUrlActive ? "hidden" : "lg:block"
          }`}
        >
          <img
            className={`h-full w-full ${shortUrlActive ? "hidden" : "block"}`}
            src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/qr-code-card-tall.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LinkGenrators;
