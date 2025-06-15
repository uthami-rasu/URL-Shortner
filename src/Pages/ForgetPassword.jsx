import { NavLink } from "react-router-dom";
import sadIcon from "../assets/sad.png";

export default function ForgetPassword() {
  return (
    <div className="flex flex-col item-scenter justify-center text-center h-screen">
      <div className="flex items-center justify-center">
        <img src={sadIcon} alt="not-found" className="h-25 w-25 " />
      </div>

      <h1 className="text-2xl md:text-5xl font-[Lato] text-white">
        Sorry, Currently the Functionality is unavailable :(
      </h1>

      <NavLink to="/" className="">
        <button className="cursor-pointer rounded-3xl border-r-3  border-black text-lg  md:text-xl font-[Poppins] font-semibold px-5 py-3 m-10 text-black bg-orange-500">
          Go Home
        </button>
      </NavLink>
    </div>
  );
}
