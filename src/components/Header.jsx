import React, { useEffect, useState } from "react";
import Logo from "../sub-components/Logo";
import SignIn from "../sub-components/SignIn";
import Navigation from "../sub-components/Navigation";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [openMenu,setOpenMenu] = useState(false);

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

    <header className={`bg-red-500 w-full h-dvh flex justify-between items-center p-4 transition-colors duration-200  lg:left-1/2 lg:transform lg:-translate-x-1/2
       ${isFixed ? "md:fixed top-0 bg-amber-300 text-black" : "md:absolute top-5 bg-red-500 text-white "}
      md:h-16 lg:w-10/12`}>
      <Logo />
      <Navigation openMenu={openMenu} />
      <SignIn className="sm:hidden md:block" />
      <button className="md:hidden cursor-pointer" onClick={()=> setOpenMenu(!openMenu)}>{openMenu ? "X":"O"}</button>
   
     
    </header>
  );
};

export default Header;
