import React from "react";

const SignIn = ({ openMenu, isfixed }) => {
  return (
    <button
      className={`${
        openMenu ? "absolute left-7/12 !bg-blue-600 text-white" : "hidden"
      } ${
        isfixed ? "bg-blue-600 text-white" : "bg-white text-[#031f39]"
      } md:block cursor-pointer  text-base shadow py-1 px-6 md:py-2 md:px-6 md:shadow-[2px_4px_6px_rgba(0,0,0,1)] border-[0.5px] md:text-base lg:text-lg rounded-xl font-[Poppins] font-semibold`}
    >
      Sign In
    </button>
  );
};

export default SignIn;
