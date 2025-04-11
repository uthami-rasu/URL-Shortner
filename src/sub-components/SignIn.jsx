import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { customSignOut } from "../Utils/authentication";

const SignIn = ({ openMenu, isfixed }) => {
  const isLogin = useSelector((store) => store.auth.user?.isLogin);

  const navigate = useNavigate();

  const handleClick = () => {
    if (isLogin) {
      customSignOut();
    } else {
      navigate("/auth/signin");
    }
  };
  return (
    <button
      className={`${
        openMenu ? "absolute left-7/12 !bg-blue-600 text-white" : "hidden"
      } ${
        isfixed ? "bg-blue-600 text-white" : "bg-white text-[#031f39]"
      } md:block cursor-pointer  text-base shadow py-1 px-6 md:py-2 md:px-6 md:shadow-[2px_4px_6px_rgba(0,0,0,1)] border-[0.5px] md:text-base lg:text-lg rounded-xl font-[Poppins] font-semibold`}
      onClick={handleClick}
    >
      {!isLogin ? "Sign Up" : "Sign Out"}
    </button>
  );
};

export default SignIn;
