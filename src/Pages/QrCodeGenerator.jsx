import React, { useDebugValue, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addUrlLists,
  updateError,
  updateQrDestination,
  updateShortLinkDestination,
} from "../Utils/urlSlice";
import DashboardCard from "../sub-components/DashboardCard";
import { useLocation, useNavigate } from "react-router-dom";
import { isValidUrl } from "../Utils/utils";
import { auth } from "../Utils/firebase";
import { createShortUrl, fetchShortLinks } from "../Utils/api";
import { print as MessagePrint } from "../Utils/print";
import ListView from "../components/ListView";
import { useQuery } from "@tanstack/react-query";
import ListViewShimmer from "../components/ListViewShimmer";
import { Bounce, toast } from "react-toastify";
import QrPopup from "../components/QrPopup";
import { updateQrPopup } from "../Utils/popupSlice";
const QrCodeGenerator = () => {
  // make an api call
  const [dateRange, setDateRange] = useState({
    fromDate: new Date(0),
    toDate: new Date(),
  });
  const { data, isLoading, error } = useQuery({
    queryKey: ["shortLinks", dateRange],
    queryFn: () => fetchShortLinks(dateRange.fromDate, dateRange.toDate),
  });
  const userObj = useSelector((store) => store.auth.user);
  const bgColor = useSelector((store) => store.colors.bgColor);

  const qr = useSelector((store) => store.popups.qr);
  const inputRef = useRef();
  const shortDestination = useSelector(
    (store) => store.urls?.short_link_destination
  );
  const qrDestination = useSelector((store) => store.urls?.qr_destination);
  const location = useLocation();

  const isQrPage = location.pathname === "/qrcode-generator";

  const qrError = useSelector((store) => store.urls?.qr_error);
  const ShortLinkError = useSelector((store) => store.urls?.short_link_error);

  const [title, setTitle] = useState({
    qrTitle: "",
    shortLinkTitle: "",
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isUrlValid = (url) => {
    const hasError = isValidUrl(url);

    dispatch(
      updateError({
        error: hasError ? hasError.error : "",
        isQr: !isQrPage ? null : true,
      })
    );
  };
  const handleInputChange = (e) => {
    if (!isQrPage) {
      isUrlValid(e.target.value);
      dispatch(updateShortLinkDestination(e.target.value));
      return;
    }
    isUrlValid(e.target.value);
    dispatch(updateQrDestination(e.target.value));
  };

  const handleCreateQrCode = async (idToken) => {
    try {
      // Call createShortUrl and wait for the response (this will trigger the toast)
      const response = await toast.promise(
        createShortUrl(qrDestination, idToken, title.qrTitle, "qr"),
        {
          pending: "Creating QR Code...", // Text while the promise is pending
          success: "QR Code created successfully!", // Text when the promise resolves successfully
          error: "Failed to create QR Code", // Text when the promise is rejected
        }
      );

      dispatch(
        updateQrPopup({
          isQrOpen: true,
          currTitle: title.qrTitle,
          currQrLink: response.shortUrl,
        })
      );

      console.log(response);
    } catch (error) {
      console.error(error);
    }
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

      if (!isQrPage && !ShortLinkError) {
        if (!shortDestination) {
          dispatch(
            updateError({
              error: "urlfield should not be empty",
              isQr: !isQrPage ? null : true,
            })
          );
          return;
        }
        const result = await createShortUrl(
          shortDestination,
          idToken,
          title.shortLinkTitle,
          "short_link"
        );

        // pop up message
        MessagePrint();
        return;
      }
      if (isQrPage && !qrError) {
        if (!qrDestination) {
          dispatch(
            updateError({
              error: "urlfield should not be empty",
              isQr: !isQrPage ? null : true,
            })
          );
          return;
        }

        handleCreateQrCode(idToken);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // console.log("URL", url);
    if (inputRef.current && !isQrPage) {
      inputRef.current.style.borderColor = ShortLinkError ? "red" : "blue";
    }
    if (inputRef.current && isQrPage) {
      inputRef.current.style.borderColor = qrError ? "red" : "blue";
    }
  }, [ShortLinkError, qrError, isQrPage]);

  useEffect(() => {
    console.log("Razz", data);

    dispatch(addUrlLists(data));
  }, [data]);
  return (
    <section
      style={{
        backgroundImage: "url(/stars.svg)",
        animation: "bgScale 1s infinite alternate",
      }}
      className={`relative mt-30 h-[100%]  bg-[${bgColor}] bg-no-repeat bg-contain bg-[50%_10%] md:bg-[50%_2%] `}
    >
      <main className="relative w-full h-full flex flex-col">
        <div className="relative top-1/9 left-1/2 p-4 transform -translate-x-1/2 w-11/12 text-white font-[Lato] text-center flex flex-col gap-6 lg:w-9/12">
          <h1
            style={{
              textShadow: "1px 1px 2px #fff",
            }}
            className="text-3xl font-extrabold md:text-4xl lg:text-5xl"
          >
            {isQrPage
              ? "Create and Share QR Codes Effortlessly"
              : "Shorten and Share Links Instantly"}
          </h1>
          <h5 className="text-lg font-medium leading-8 text-center md:text-xl lg:text-2xl lg:font-normal md:leading-9 ">
            {isQrPage
              ? `Generate high-quality QR codes in seconds and connect your audience
            to the right information. Customize, download, and manage your QR
            codes — all in one simple and powerful platform.`
              : `Turn long URLs into sleek, easy-to-share links in seconds. Customize, manage, and track your short links — all from one fast and intuitive platform.`}
          </h5>
        </div>

        <div
          className={`relative bg-white w-11/12 mx-auto py-4 px-3 md:px-5 rounded-4xl font-[Lato] mt-5 xl:w-8/12
          ${
            isQrPage ? "lg:flex lg:justify-between lg:items-center" : "lg:block"
          }
          mb-10`}
        >
          <div className={`bg-white py-6 mx-auto p-3 rounded-2xl flex-1 `}>
            <h1
              className="text-2xl font-semibold text-[#031f39] lg:text-3xl"
              style={{ textShadow: "0px 1px 1px #031f39" }}
            >
              {isQrPage ? "Create a QR Code" : "Shorten a long link"}
            </h1>
            <h6 className="text-lg text-[#031f39] my-2 font-medium font-[Lato] lg:text-xl">
              No credit card required.
            </h6>
            <br className="mx-1 lg:mx-4"></br>

            <h3 className="text-xl font-bold text-[#031f39] lg:font-extrabold">
              {isQrPage
                ? "Enter your QR Code destination"
                : "Paste your long link here"}
            </h3>
            <form
              className="flex flex-col justify-center gap-x-5 gap-y-4 lg:gap-7"
              onSubmit={handleFormSubmit}
            >
              <input
                type="text"
                ref={inputRef}
                value={isQrPage ? qrDestination : shortDestination}
                placeholder="https://example.com/my-long-url"
                className={`h-14 border-2 border-gray-300 rounded-md mt-3 py-2 px-4 text-lg outline-0 
            focus:border-blue-700 focus:border-3 focus:shadow-sm focus:shadow-blue-100 
            hover:bg-gray-50 hover:border-black hover:border
            ${
              !isQrPage
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
                {!isQrPage ? ShortLinkError : qrError}
              </span>
              <label className="text-xl font-bold text-[#031f39] lg:font-extrabold">
                Title <span className="font-medium">(optional)</span>
              </label>
              <input
                type="text"
                value={isQrPage ? title.qrTitle : title.shortLinkTitle}
                placeholder="ex: linkedin post"
                className={`h-14 border-2 border-gray-300 rounded-md mt-1 py-2 px-4 text-lg outline-0 
            focus:border-blue-700 focus:border-3 focus:shadow-sm focus:shadow-blue-100 
            hover:bg-gray-50 hover:border-black hover:border
            
            `}
                onChange={(e) =>
                  setTitle((prev) => {
                    return isQrPage
                      ? { ...prev, qrTitle: e.target.value }
                      : { ...prev, shortLinkTitle: e.target.value };
                  })
                }
              />
              <button
                className={`flex items-center cursor-pointer px-4 py-2 justify-between bg-blue-700 rounded-2xl text-lg text-white font-semibold text-center md:w-1/2 lg:text-xl lg:py-4 lg:${
                  isQrPage ? "w-4/6" : "w-2/6"
                }
              `}
              >
                <span className="flex-1">
                  {isQrPage
                    ? "Get your QR Code for free"
                    : "Get your link for free"}
                </span>
                <span>
                  <img src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/dist/82b3e8104ca2692bef7f.svg" />
                </span>
              </button>
            </form>
          </div>
          <div
            className={`hidden lg:bg-gray-300 rounded-2xl lg:w-4/12 lg:h-8/12  ${
              !isQrPage ? "hidden" : "lg:block"
            }`}
          >
            <img
              className={`h-full w-full `}
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/05/qr-code-card-tall.png"
            />
          </div>
        </div>
      </main>
      {/* <section className="bg-white w-full p-10">
        <h1
          className="text-4xl text-center font-semibold mb-5 lg:text-5xl"
          style={{ textShadow: "1px 1px 2px #031f39" }}
        >
          Details
        </h1>
        <main className="w-full bg-white flex flex-col gap-y-10 mx-auto justify-center items-center p-3 md:grid md:grid-cols-2 md:place-content-center place-items-center md:gap-10 lg:flex lg:flex-row lg:w-10/12">
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
          <DashboardCard />
        </main>
      </section> */}
      <main className="w-full bg-gray-200">
        {isLoading || error ? <ListViewShimmer /> : <ListView />}
      </main>
      {qr.isQrOpen && <QrPopup />}
    </section>
  );
};

export default QrCodeGenerator;
