import React, { useRef, useState } from "react";
import Logo from "../sub-components/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleSvg from "../sub-components/GoogleSvg";

import { signIn, signUp } from "./../Utils/authentication";
const Signin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  // create use ref
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setUserInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      await signUp(userInput);
      console.log("user");
      setTimeout(() => {
        navigate("/");
      }, 300);
      setIsError(false);
    } catch (err) {
      console.error(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(userInput);

  return (
    <div className="w-screen h-screen bg-white font-[Poppins] lg:flex overflow-x-hidden ">
      <div className="w-full ">
        <div className="w-11/12 mx-auto relative top-4">
          <Logo />
        </div>
        <div className="w-full mx-auto md:w-9/12 lg:w-9/12 p-7 ">
          <div className="w-full flex flex-col gap-y-2 mt-8 font-[Poppins] md:gap-y-3">
            <h1 className="text-3xl font-bold text-[#031f39] font-[Poppins]">
              Create your account
            </h1>
            <h4 className="text-md">
              Already have an account?
              <NavLink to="/auth/login" className="text-blue-800 underline">
                <u> Log in</u>
              </NavLink>
            </h4>

            <div className="flex flex-col-reverse gap-y-5 w-full mt-5 md:gap-y-10">
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
            <form onSubmit={handleFormSubmit}>
              <div className="flex flex-col gap-y-3">
                <div className="flex flex-col gap-y-2 mt-2 md:gap-y-3 ">
                  <label>User Name</label>
                  <input
                    ref={usernameRef}
                    style={{
                      "&focus": "box-shadow:0px 0px 2px blue",
                    }}
                    type="text"
                    name="username"
                    value={userInput.username}
                    onChange={handleInputChange}
                    placeholder="ex: tom-crusie"
                    className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                  />
                  {/* <span>Error</span> */}
                </div>
                <div className="flex flex-col gap-y-2  md:gap-y-3 ">
                  <label>Email</label>
                  <input
                    ref={emailRef}
                    style={{
                      "&focus": "box-shadow:0px 0px 2px blue",
                    }}
                    type="text"
                    name="email"
                    value={userInput.email}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="ex: yourname@email.com"
                    className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                  />
                  {/* <span>Error</span> */}
                </div>
                <div className="flex flex-col gap-y-2 ">
                  <label>Password</label>
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    placeholder="ex: your password"
                    onChange={handleInputChange}
                    value={userInput.password}
                    className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                  />
                  {/* <span>Error</span> */}
                </div>
                <div className="text-right text-md mt-5 md:mt-7">
                  <NavLink to="/fp" className="text-blue-800 underline">
                    <u>Forgot your password ?</u>
                  </NavLink>
                </div>
                {isError && (
                  <span className="text-red-600 font-medium">
                    User already exists, please use another email
                  </span>
                )}
                <div className="w-full mt-5 ">
                  <button className="w-full bg-blue-700 p-2 rounded-md text-white font-medium text-base">
                    {!isLoading ? " Sign in" : "Please wait"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden bg-[#edf2ff] w-full h-[110vh] lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-y-4 text-center font-medium">
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

export default Signin;
