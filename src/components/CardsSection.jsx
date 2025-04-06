import React from "react";
import Card from "../sub-components/Card";
import { title } from "framer-motion/client";

import { cardData } from "../Utils/constants";

const CardsSection = () => {
  
  return (
    <div className="w-full h-full bg-white text-3xl mt-2 p-8 text-[#031f39] mx-auto">
      <h1 className="text-3xl font-bold w-11/12 mx-auto text-center mt-3 md:text-4xl lg:text-5xl lg:w-8/12">
        Adopted and loved by millions of users for over a decade
      </h1>
      <div className=" mx-auto flex flex-col gap-3 gap-y-6  sm:flex-row justify-between items-center mt-10 mb-5 font-[Lato ] md:grid md:grid-cols-2 md:gap-5 lg:flex lg:w-9/12 lg:h-[45vh] ">
        {cardData &&
          cardData.map((card) => {
            return <Card {...card} />;
          })}
      </div>
    </div>
  );
};

export default CardsSection;
