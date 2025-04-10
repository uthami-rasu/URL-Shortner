import React, { useEffect } from "react";
import ChartWrapper from "./ChartWrapper";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import {
  BAR_COLORS,
  COLORS_PALETTE_1,
  COLORS_PALETTE_2,
} from "../Utils/constants";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../Utils/api";

import { useDispatch, useSelector } from "react-redux";
import { updateData } from "../Utils/analysis";

const Analytics = () => {
  const lineChartDataSelector = useSelector(
    (store) => store.analysis.lineChartData
  );

  const dataSelector = useSelector((store) => store.analysis.data);
  console.log("lineChartData", lineChartDataSelector);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery({
    queryKey: ["visits"],
    queryFn: fetchData,
  });

  useEffect(() => {
    if (data?.data?.data) {
      dispatch(updateData(data?.data?.data));
    }
  }, [data, dispatch]);

  // if (isLoading) {
  //   return <h1>Loading</h1>;
  // }
  if (error) {
    return <h1>Error Occured</h1>;
  }
  console.log(data);
  return (
    <section
      style={{
        backgroundImage: "url(/stars.svg)",
        animation: "bgScale 1s infinite alternate",
      }}
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
            Track, Analyze, and Optimize Your Links
          </h1>
          <h5 className="text-lg font-medium leading-8 text-center md:text-xl lg:text-2xl lg:font-normal md:leading-9 ">
            Gain deep insights with real-time analytics on clicks, locations,
            devices, and referrers. Make smarter decisions and grow your
            audience faster with Razzly Analytics.
          </h5>
        </div>
        <div className="w-full bg-white/95 py-3 px-3 ">
          <div className="w-full mx-auto p-1 grid grid-cols-1 xl:grid-cols-2 gap-x-5 gap-y-20 ">
            <ChartWrapper Title={"Total Clicks by last 7 days"}>
              <LineChart
                loading={isLoading}
                Data={dataSelector?.lineChartData}
                colors=""
              />
            </ChartWrapper>
            <ChartWrapper Title={"Top Platforms Visitors Came From"}>
              <PieChart
                loading={isLoading}
                data={dataSelector?.referrerData}
                colors={COLORS_PALETTE_2}
              />
            </ChartWrapper>
            <ChartWrapper Title={"Top Visitors By Countries"}>
              <BarChart
                loading={isLoading}
                data={dataSelector?.countryData}
                colors={BAR_COLORS.slice(5, 10)}
              />
            </ChartWrapper>
            <ChartWrapper Title={"Device Type"}>
              <PieChart
                loading={isLoading}
                data={dataSelector?.deviceTypeData}
                colors={COLORS_PALETTE_1}
              />
            </ChartWrapper>
            <ChartWrapper Title={"Browser Type"}>
              <BarChart
                loading={isLoading}
                data={dataSelector?.browserTypeData}
                colors={BAR_COLORS.slice(1, 15)}
              />
            </ChartWrapper>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Analytics;
