const UrlCardShimmer = ({ styles }) => {
  return (
    <div
      className={`w-full flex flex-col lg:flex-row  mx-auto bg-white py-6 px-5 font-[Poppins] ${styles}`}
    >
      <div className="flex lg:grow-2 p-3 overflow-hidden gap-y-5">
        <div className="relative w-full md:left-10 flex px-1 flex-col pb-3 gap-y-3 border-b-2 my-5 border-gray-300 lg:border-0">
          <span className="hidden absolute shimmer md:flex items-center justify-center md:top-[-3px] md:left-[-50px] h-11 w-11 border-2 border-gray-300 rounded-[50%]"></span>
          <h1 className="h-4 shimmer w-10/12"></h1>
          <div className="shimmer h-4 w-1/2"></div>
          <div className="shimmer h-4 w-2/3"></div>

          <div className="flex flex-col gap-y-2">
            <div className="h-4  shimmer w-1/3"></div>
            <div className="h-4  shimmer w-1/3"></div>
            <div className="h-4  shimmer w-1/3"></div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-between py-1 lg:grow-1 gap-x-2 font-[Lato]  md:w-6/12 md:self-end md:basis-1 lg:self-start lg:mt-4">
        <div className="h-4  shimmer w-1/3"></div>
        <div className="h-4  shimmer w-1/3"></div>
        <div className="h-4  shimmer w-1/3"></div>
        <div className="h-4  shimmer w-1/3"></div>
      </div>
    </div>
  );
};

export default UrlCardShimmer;
