import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateError,
  updateQrDestination,
  updateShortLinkDestination,
} from "../Utils/urlSlice";
import { isValidUrl } from "../Utils/utils";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { createShortUrl } from "../Utils/api";

import { print as MessagePrint } from "../Utils/print";
import { Bounce, toast } from "react-toastify";
const LinkGenrators = () => {
  const shortDestination = useSelector(
    (store) => store.urls?.short_link_destination
  );
  const qrDestination = useSelector((store) => store.urls?.qr_destination);
  const qrError = useSelector((store) => store.urls?.qr_error);
  const ShortLinkError = useSelector((store) => store.urls?.short_link_error);

  const userObj = useSelector((store) => store.auth.user);
  const dispatch = useDispatch();
  console.log("Urls", shortDestination, qrDestination);
  const [shortUrlActive, setShortUrlActive] = useState(true);

  const navigate = useNavigate();

  const [url, setUrl] = useState("");
  const inputRef = useRef("");
  const handleClick = () => {
    setShortUrlActive(!shortUrlActive);
  };

  const isUrlValid = (url) => {
    const hasError = isValidUrl(url);

    dispatch(
      updateError({
        error: hasError ? hasError.error : "",
        isQr: shortUrlActive ? null : true,
      })
    );
  };

  const handleInputChange = (e) => {
    if (shortUrlActive) {
      isUrlValid(e.target.value);
      dispatch(updateShortLinkDestination(e.target.value));
      return;
    }
    isUrlValid(e.target.value);
    dispatch(updateQrDestination(e.target.value));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!userObj?.isLogin) {
      toast.error("please login first", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      setTimeout(() => {
        navigate("/auth/login");
      }, 1000);
    }

    try {
      const idToken = await auth.currentUser.getIdToken();

      if (!idToken) {
        navigate("/auth/login");
      }

      console.log(idToken, "Token");

      if (shortUrlActive && !ShortLinkError) {
        if (!shortDestination) {
          dispatch(
            updateError({
              error: "please enter url",
              isQr: shortUrlActive ? null : true,
            })
          );
          return;
        }

        const result = await createShortUrl(
          shortDestination,
          idToken,
          "",
          "short_link"
        );

        // pop up message
        MessagePrint();

        setTimeout(() => {
          navigate("/short-url-link");
        }, 1000);
        return;
      }
      if (!shortUrlActive && !qrError) {
        if (!qrDestination) {
          dispatch(
            updateError({
              error: "url field should not be empty",
              isQr: shortUrlActive ? null : true,
            })
          );
          return;
        }
        const result = await createShortUrl(qrDestination, idToken, "", "qr");

        // pop up message
        MessagePrint();

        setTimeout(() => {
          navigate("/qrcode-generator");
        }, 1000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log("URL", url);
    if (inputRef.current && shortUrlActive) {
      inputRef.current.style.borderColor = ShortLinkError ? "red" : "blue";
    }
    if (inputRef.current && !shortUrlActive) {
      inputRef.current.style.borderColor = qrError ? "red" : "blue";
    }
  }, [ShortLinkError, qrError, shortUrlActive]);
  return (
    <div className="mx-auto w-11/12 mt-5">
      <ul className="flex justify-center items-center gap-10">
        <li
          className={`p-2   rounded-2xl  ${shortUrlActive ? "bg-white" : ""} ${
            !shortUrlActive ? "hover:bg-white/5" : ""
          }`}
        >
          <button
            className="cursor-pointer flex justify-center gap-1 items-center"
            onClick={() => setShortUrlActive(true)}
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
            onClick={() => setShortUrlActive(false)}
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
        className={`relative bg-white py-7 px-6 rounded-4xl font-[Lato] mt-5 xl:w-8/12 xl:left-1/2 xl:transform xl:-translate-x-1/2 
          ${!shortUrlActive ? "lg:flex lg:justify-between" : "xl:block"}
          `}
      >
        <div className={`flex-1 ${!shortUrlActive ? "xl:w-8/12" : ""}  `}>
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
          <form
            className="flex flex-col justify-center gap-5 lg:gap-7"
            onSubmit={handleFormSubmit}
          >
            <input
              ref={inputRef}
              type="text"
              value={shortUrlActive ? shortDestination : qrDestination}
              placeholder="https://example.com/my-long-url"
              className={`h-14 border-2 border-gray-300 rounded-md mt-3 py-2 px-4 text-lg outline-0 
            focus:border-blue-700 focus:border-2
            hover:bg-gray-50 hover:border-black hover:border ${
              !shortUrlActive ? "lg:w-9/12" : ""
            } ${
                shortUrlActive
                  ? ShortLinkError
                    ? "shadow-[0_0_5px_red]"
                    : "focus:shadow-[0_0_3px_blue]"
                  : qrError
                  ? "shadow-[0_0_5px_red]"
                  : "focus:shadow-[0_0_3px_blue]"
              }
            `}
              onChange={handleInputChange}
            />
            <span className="mx-2 text-lg font-semibold text-red-600 font-[Lato]">
              {shortUrlActive ? ShortLinkError : qrError}
            </span>
            <button
              className={`flex items-center px-4 py-2 cursor-pointer justify-between bg-blue-700 rounded-2xl text-lg text-white font-semibold text-center md:w-1/2 lg:text-xl lg:py-4
              ${!shortUrlActive ? "w-12/12" : "lg :w-4/6"}
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
