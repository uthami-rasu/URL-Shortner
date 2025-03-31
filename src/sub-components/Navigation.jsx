import React from 'react'
import { NavLink } from "react-router-dom";
const Navigation = ({openMenu}) => {
  return (
    <nav className={!openMenu ? "hidden md:block":"absoulte"}>
        <ul className="flex flex-col font-semibold font-[Poppins] md:flex-row md:text-base md:gap-x-4 lg:text-lg lg:gap-x-8">
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