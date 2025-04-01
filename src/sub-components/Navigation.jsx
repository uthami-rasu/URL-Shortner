import React from 'react'
import { NavLink } from "react-router-dom";
const Navigation = ({openMenu,props}) => {
  return (
    <nav className={` ${openMenu ? "opacity-100 visible translate-y-0" : "hidden"}  ${props}`}>
        <ul className="flex text-white flex-col gap-8 text-center p-3 font-semibold font-[Poppins] md:flex-row md:text-base md:gap-x-4 lg:text-lg lg:gap-x-8">
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
  )
}

export default Navigation