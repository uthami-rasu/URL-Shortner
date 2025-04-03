import React from "react";

const Companies = [
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/curology-3.svg",
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/novasol-1.svg",
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/rad-bikes-3.svg",
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/marriott-1.svg",
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/new-york-times-1.svg",
  "https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/04/smalls.svg",
];

const Showcase = () => {
  return (
    <div className="mt-10 w-full p-2 mb-5">
      <div className="text-center w-9/12 mx-auto p-1">
        <h1 className="text-2xl font-[Lato] text-white font-semibold">
          Sign up for free. Your free plan includes:
        </h1>
        <ul className="flex justify-center items-center gap-x-10 mt-4 text-white font-base text-md">
          <li className="flex items-center justify-center gap-x-1">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
              alt="img"
            />
            5 short links/month
          </li>
          <li className="flex items-center justify-center gap-x-1">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
              alt="img"
            />
            3 custom back-halves/month
          </li>
          <li className="flex items-center justify-center gap-x-1">
            <img
              src="https://docrdsfx76ssb.cloudfront.net/static/1743110909/pages/wp-content/uploads/2024/03/orange-checkmark.svg"
              alt="img"
            />
            Unlimited link clicks
          </li>
        </ul>
      </div>

      {/* dummy companies */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:flex lg:flex-wrap lg:justify-between lg:items-center w-10/12 mx-auto gap-2 mt-4">
        {Companies.map((c, index) => (
          <div key={index} className="flex justify-center">
            <img src={c} alt="Company Logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
