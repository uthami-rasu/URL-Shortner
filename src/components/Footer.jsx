import React from "react";
import Logo from "../sub-components/Logo";
import { useSelector } from "react-redux";

const Footer = () => {
  const bgColor = useSelector((store) => store.colors.bgColor);
  return (
    <div className={`"w-full h-20 bg-[${bgColor}]`}>
      <div className="flex flex-col gap-y-1 text-sm text-center md:flex-row md:w-8/12 mx-auto gap-x-5 items-center justify-center p-3">
        <Logo />
        <h3 className="text-white font-medium">
          © 2025 Razzly | Handmade in Tenkasi City, Tamilnadu, India, and all
          over the world.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
