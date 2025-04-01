import React, { useEffect, useState } from "react";
import Logo from "../sub-components/Logo";
import SignIn from "../sub-components/SignIn";
import Navigation from "../sub-components/Navigation";

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
<div className={` ${openMenu ? " h-dvh transition-all duration-500":"transition-all duration-500"} bg-black`}>
    <header className={`${openMenu ? "bg-white" :""}w-full  flex justify-between items-center p-2 transition-colors duration-200  lg:left-1/2 lg:transform lg:-translate-x-1/2
       ${isFixed ? "md:fixed top-0 bg-white text-black" : "md:absolute top-5 bg-black  text-white "}
      md:h-16 lg:w-10/12`}>
      <Logo />
      <Navigation props="hidden md:block md:-translate-y-0"/>
      <SignIn openMenu={openMenu}/>
      <button className="md:hidden cursor-pointer hover:text-orange-500" onClick={()=> setOpenMenu(!openMenu)}>{!openMenu ? <i className='bx bx-menu text-2xl'></i>:<i className='bx bx-window-close text-2xl'></i>}</button>    
    </header>
    <Navigation openMenu={openMenu} props={`transform ${openMenu? "-translate-y-[0px]":"-translate-y-[400px]"}  duration-500 block md:hidden`}/>
    </div>
  );
};

export default Header;
