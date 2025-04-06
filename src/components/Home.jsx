import React from "react";
import LinkGenrators from "./LinkGenrators";
import Showcase from "./Showcase";
import CardsSection from "./CardsSection";

const Home = () => {
  return (
    <section
      style={{ backgroundImage: "url(/stars.svg)" }}
      className="mt-30 h-[100%]  bg-[#031f39] bg-no-repeat bg-contain bg-[50%_10%] md:bg-[50%_2%] "
    >
      <main className="relative w-full h-full flex flex-col">
        <div className="relative top-1/9 left-1/2 p-4 transform -translate-x-1/2 w-11/12 text-white font-[Lato] text-center flex flex-col gap-6 lg:w-9/12">
          <h1
            style={{
              textShadow: "1px 1px 2px #fff",
            }}
            className="text-3xl font-extrabold md:text-4xl lg:text-5xl"
          >
            Build stronger digital connections
          </h1>
          <h5 className="text-lg font-medium leading-8 text-center md:text-xl lg:text-2xl lg:font-normal md:leading-9 ">
            Use our URL shortener, QR Codes, and landing pages to engage your
            audience and connect them to the right information. Build, edit, and
            track everything inside the Razzly Connections Platform.
          </h5>
        </div>

        <LinkGenrators />

        <Showcase />
        <CardsSection />
      </main>
    </section>
  );
};

export default Home;
