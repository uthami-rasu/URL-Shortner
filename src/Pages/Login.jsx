import React, { useEffect, useRef, useState } from "react";
import Logo from "../sub-components/Logo";
import { NavLink, useNavigate } from "react-router-dom";
import GoogleSvg from "../sub-components/GoogleSvg";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Utils/authentication";
import { auth, provider } from "../Utils/firebase";
import { signInWithPopup } from "firebase/auth";
import { Bounce, toast } from "react-toastify";

const Login = () => {
  const isLogin = useSelector((store) => store.auth.user?.isLogin);

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, []);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);

      navigate("/");

      // Save user to DB or state
    } catch (error) {
      console.error("Error during Google Sign-In", error);
    }
  };

  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isInputValid = (data) => {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data?.email || "");
    const isPasswordValid = !!data?.password;

    return isEmailValid && isPasswordValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (!isInputValid(userInput)) {
        console.log("invalid input");
        toast.error("please enter valid credentials", {
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

        return;
      }
      const user = await signIn(userInput.email, userInput.password);

      setTimeout(() => {
        navigate("/");
      }, 400);
      setIsError(false);
    } catch (err) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

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
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-3 md:gap-y-5">
                <div className="flex flex-col gap-y-2 mt-3 md:gap-y-3 md:mt-4">
                  <label>Email</label>
                  <input
                    style={{
                      "&focus": "box-shadow:0px 0px 2px blue",
                    }}
                    value={userInput.email}
                    type="text"
                    name="email"
                    onChange={handleInputChange}
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
                    name="password"
                    onChange={handleInputChange}
                    className="border border-gray-300 h-9 pl-2 leading-loose outline-0 rounded-md focus:border-blue-600 "
                  />
                  {/* <span>Error</span> */}
                </div>
                <div className="text-right text-md mt-5 md:mt-7">
                  <NavLink
                    to="/auth/forgot-password"
                    className="text-blue-800 underline"
                  >
                    <u>Forgot your password ?</u>
                  </NavLink>
                </div>
                {isError && (
                  <span className="text-red-600 font-medium">
                    Invalid Credentials, please check email & password
                  </span>
                )}
                <div className="w-full mt-5 ">
                  <button className="w-full bg-blue-700 p-2 cursor-pointer rounded-md text-white font-medium text-base">
                    {isLoading ? "Please wait" : "Log in"}
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-y-2 w-full mt-10 md:gap-y-3">
            <div className="bg-gray-300 h-[1px] relative">
              <h3 className="w-20 text-center text-gray-800 absolute left-1/2 transform -translate-x-1/2 top-[-13px] bg-white font-[Poppins]">
                OR
              </h3>
            </div>
            <div className="mt-7 font-[Poppins]">
              <button
                onClick={signInWithGoogle}
                className="flex w-full cursor-pointer hover:bg-gray-50 gap-x-1 gap-y-2 border h-9 rounded-md border-gray-300 py-3 justify-center items-center"
              >
                <GoogleSvg />
                <h3>Continue with Google</h3>
              </button>
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
