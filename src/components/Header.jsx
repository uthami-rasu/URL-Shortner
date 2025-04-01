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
    if(openMenu){
      document.body.style.overflowY = "hidden";
    }else{
      document.body.style.overflowY = "auto";
    }

    // add EventLister for scroll
    window.addEventListener("scroll", handleScroll);

    //cleanup actions
    return () => {
      document.body.style.overflowY = "auto"
      window.removeEventListener("scroll", handleScroll);}
  }, [openMenu]);

  return (
<div className={`z-3 absolute h-16 w-full  ${openMenu ? "h-dvh bg-white":""} md:flex md:flex-col md:justify-center md:items-center  ${isFixed ? "fixed overflow-hidden top-0 md:py-9 bg-white text-black" : "md:absolute md:top-5 md:left-0  text-white "}`}>
    <header className={`w-full  flex justify-between items-center p-2 
      md:h-16 lg:w-10/12`}>
      <Logo />
      <Navigation props="hidden md:block md:-translate-y-0" isfixed={isFixed}/>
      <SignIn openMenu={openMenu} isfixed={isFixed}/>
      <button className="md:hidden cursor-pointer hover:text-orange-500" onClick={()=> setOpenMenu(!openMenu)}>{!openMenu ? <i className='bx bx-menu text-2xl'></i>:<i className='bx bx-window-close text-2xl text-[#031f39]'></i>}</button>    
    </header>
    <Navigation openMenu={openMenu} props={`transform ${openMenu? "-translate-y-[0px]":"-translate-y-[400px]"}  duration-500 block md:hidden`}/>
    </div>
  );
};

export default Header;
