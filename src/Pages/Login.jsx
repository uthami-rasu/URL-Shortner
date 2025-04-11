import React from "react";
import Logo from "../sub-components/Logo";
import { NavLink } from "react-router-dom";
import GoogleSvg from "../sub-components/GoogleSvg";

const Login = () => {
  return (
    <div className="w-screen h-screen bg-white font-[Poppins] lg:flex overflow-x-hidden ">
      <div className="w-full ">
        <div className="w-11/12 mx-auto relative top-4">
          <Logo />
        </div>
        <div className="w-full mx-auto md:w-11/12 lg:w-9/12 p-7">
          <div className="w-full flex flex-col gap-y-2 mt-15 font-[Poppins] md:gap-y-3">
            <h1 className="text-3xl font-bold text-[#031f39] font-[Poppins]">
              Log in and start sharing
            </h1>
            <h4 className="text-md">
              Don't have an account?
              <NavLink to="/auth/signin" className="text-blue-800 underline">
                <u> Sign up</u>
              </NavLink>
            </h4>
            <div className="flex flex-col gap-y-3 md:gap-y-5">
              <div className="flex flex-col gap-y-2 mt-3 md:gap-y-3 md:mt-4">
                <label>Email</label>
                <input
                  style={{
                    "&focus": "box-shadow:0px 0px 2px blue",
                  }}
                  type="text"
                  placeholder="ex: yourname@email.com"
                  className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                />
                {/* <span>Error</span> */}
              </div>
              <div className="flex flex-col gap-y-2 ">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="ex: your password"
                  className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                />
                {/* <span>Error</span> */}
              </div>
              <div className="text-right text-md mt-5 md:mt-7">
                <NavLink to="/fp" className="text-blue-800 underline">
                  <u>Forgot your password ?</u>
                </NavLink>
              </div>
            </div>
            <div className="w-full mt-5 ">
              <button className="w-full bg-blue-700 p-2 rounded-md text-white font-medium text-base">
                Log in
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full mt-10 md:gap-y-3">
            <div className="bg-gray-300 h-[1px] relative">
              <h3 className="w-20 text-center text-gray-800 absolute left-1/2 transform -translate-x-1/2 top-[-13px] bg-white font-[Poppins]">
                OR
              </h3>
            </div>
            <div className="mt-7 font-[Poppins]">
              <div className="flex gap-x-1 gap-y-2 border h-9 rounded-md border-gray-300 py-3 justify-center items-center">
                <GoogleSvg />
                <h3>Continue with Google</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden bg-[#edf2ff] w-full h-full lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-4 text-center font-medium">
        <img
          alt="image"
          className="h-6/12"
          src="https://d1ayxb9ooonjts.cloudfront.net/web_sign_up_sign_in/374c5267-c885-4bea-bd52-7e96276a7428/images/analytics-illustration.png"
        />
        <h3 className="w-9/12 mx-auto text-xl">
          Analyze your links and QR Codes as easily as creating them
        </h3>
      </div>
    </div>
  );
};

export default Login;
