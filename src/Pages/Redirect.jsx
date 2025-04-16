import React, { useEffect } from "react";
import Logo from "../sub-components/Logo";
import { HashLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import axios from "axios";

const RAZZLY_ENDPOINT = import.meta.env.VITE_RAZZLY_BACKEND_ENDPOINT;

const Redirect = () => {
  const { shorturl } = useParams();

  // useEffect(() => {
  //   const getOriginalUrl = async () => {
  //     try {
  //       const response = await axios.post(
  //         `${RAZZLY_ENDPOINT}/api/v1/redirect/${shorturl}`
  //       );
  //       if (response?.data?.originalurl) {
  //         window.location.href = response.data.originalurl;
  //       } else {
  //         console.error("Invalid response:", response);
  //       }
  //     } catch (error) {
  //       console.error("Redirection failed:", error);
  //     }
  //   };

  //   getOriginalUrl();
  // }, [shorturl]);

  console.log(shorturl);
  useEffect(() => {
    if (shorturl) {
      // window.location.href = `${RAZZLY_ENDPOINT}/api/v1/redirect/${shorturl}`;

      window.location.href = RAZZLY_ENDPOINT + "/api/redirect/" + shorturl;
    }
  }, []);

  return (
    <div className="w-full p-5 bg-white h-screen">
      <Logo />
      <div className="w-full flex text-center h-3/4 justify-center gap-2 items-center">
        <HashLoader size={35} color="orange" />
        <h1 className="text-4xl font-[Lato]">Please wait...</h1>
      </div>
    </div>
  );
};

export default Redirect;
