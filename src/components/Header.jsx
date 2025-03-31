import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../sub-components/Logo";
import SignIn from "../sub-components/SignIn";
const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // function for update Header Position
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY > 18) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // add EventLister for scroll
    window.addEventListener("scroll", handleScroll);

    //cleanup actions
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={` flex p-5 justify-between items-center transition-colors duration-200 h-16 w-10/12  left-1/2 transform -translate-x-1/2
      ${isFixed ? "fixed top-0 bg-amber-300 text-black" : "absolute top-5 bg-red-500 text-white "}
       md:w-full  lg:w-10/12`}
    >
      <Logo />
      <nav className="sm:hidden md:block">
        <ul className="flex font-semibold font-[Poppins] md:text-base md:gap-x-4 lg:text-lg lg:gap-x-8">
        <li>
          <NavLink to="/" className="hover:text-orange-600 ">  Home </NavLink>
        
        </li>
        <li>
        <NavLink to="/generate" className="hover:text-orange-600 ">  Generate </NavLink>
          
        </li>
        <li>
          <NavLink to="/analytics" className="hover:text-orange-600 ">
          Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-orange-600 ">
          About us
          </NavLink>
        </li>
        </ul>
       
      </nav>
      <SignIn className="sm:hidden md:block" />
    </header>
  );
};

export default Header;
