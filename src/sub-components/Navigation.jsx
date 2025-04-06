import React from "react";
import { NavLink } from "react-router-dom";
const Navigation = ({ openMenu, props, isfixed }) => {
  return (
    <nav
      className={`duration-300 ${
        openMenu ? "opacity-100 visible translate-y-0" : "hidden"
      }  ${props}`}
    >
      <ul
        className={`flex text-[#031f39] flex-col gap-8 text-center p-3 ${
          !isfixed ? "md:text-white" : "md:text-[#031f39]"
        } font-semibold font-[Poppins] md:flex-row md:text-base md:gap-x-4 lg:text-lg lg:gap-x-8`}
      >
        <li>
          <NavLink to="/" className="hover:text-orange-600 duration-300">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/qrcode-generator"
            className="hover:text-orange-600 duration-300"
          >
            Qr Code
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/analytics"
            className="hover:text-orange-600 duration-300"
          >
            Analytics
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-orange-600 duration-300">
            About us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
