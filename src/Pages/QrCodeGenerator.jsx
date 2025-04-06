import React, { useDebugValue } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateQrDestination } from "../Utils/urlReducer";

const QrCodeGenerator = () => {
  const bgColor = useSelector((store) => store.colors.bgColor);

  const qrUrl = useSelector((store) => store.urlSlice?.qr_destination);

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    dispatch(updateQrDestination(e.target.value));
  };
  return (
    <section
      style={{ backgroundImage: "url(/stars.svg)" }}
      className={`mt-30 h-[100%]  bg-[${bgColor}] bg-no-repeat bg-contain bg-[50%_10%] md:bg-[50%_2%] `}
    >
      <main className="relative w-full h-full flex flex-col">
        <div className="relative top-1/9 left-1/2 p-4 transform -translate-x-1/2 w-11/12 text-white font-[Lato] text-center flex flex-col gap-6 lg:w-9/12">
          <h1
            style={{
              textShadow: "1px 1px 2px #fff",
            }}
            className="text-3xl font-extrabold md:text-4xl lg:text-5xl"
          >
            Create and Share QR Codes Effortlessly
          </h1>
          <h5 className="text-lg font-medium leading-8 text-center md:text-xl lg:text-2xl lg:font-normal md:leading-9 ">
            Generate high-quality QR codes in seconds and connect your audience
            to the right information. Customize, download, and manage your QR
            codes — all in one simple and powerful platform.
          </h5>
        </div>

        <div className={`lg:w-8/12`}>
          <h1
            className="text-2xl font-semibold text-[#031f39] lg:text-3xl"
            style={{ textShadow: "0px 1px 1px #031f39" }}
          >
            Create a QR Code
          </h1>
          <h6 className="text-lg text-[#031f39] my-2 font-medium font-[Lato] lg:text-xl">
            No credit card required.
          </h6>
          <br className="mx-1 lg:mx-4"></br>

          <h3 className="text-xl font-bold text-[#031f39] lg:font-extrabold">
            Enter your QR Code destination
          </h3>
          <form className="flex flex-col justify-center gap-5 lg:gap-7">
            <input
              type="text"
              value={qrUrl}
              placeholder="https://example.com/my-long-url"
              className={`h-14 border-2 border-gray-300 rounded-md mt-3 py-2 px-4 text-lg outline-0 
            focus:border-blue-700 focus:border-3 focus:shadow-sm focus:shadow-blue-100 
            hover:bg-gray-50 hover:border-black hover:border
            `}
              onChange={handleInputChange}
            />
            <button
              className={`flex items-center px-4 py-2 justify-between bg-blue-700 rounded-2xl text-lg text-white font-semibold text-center md:w-1/2 lg:text-xl lg:py-4 lg:w-2/6
              `}
            >
              <span className="flex-1">Get your QR Code for free</span>
              <span>
                <img src="https://docrdsfx76ssb.cloudfront.net/wp-content/themes/JointsWP-CSS-master/assets/dist/82b3e8104ca2692bef7f.svg" />
              </span>
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default QrCodeGenerator;
