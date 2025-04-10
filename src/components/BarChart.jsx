import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import ChartShimmer from "../sub-components/chartShimmer";

const referrerData = [
  { country: "India", clicks: 12 },
  { country: "USA", clicks: 12 },
  { country: "India", clicks: 12 },
  { country: "USA", clicks: 12 },
  { country: "India", clicks: 12 },
];

const COLORS = ["#14B8A6", "#FACC15", "#A855F7", "#F43F5E"]; // Indigo-500 and Green-400

const CustomBarChart = ({ isLoading, data, colors }) => {
  return (
    <div className="w-full h-[350px] lg:h-[350px]">
      {isLoading ? (
        <ChartShimmer />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis
              dataKey="name"
              className="text-[12px] lg:text-[15px] font-medium"
            />
            <YAxis className="text-[12px] lg:text-[15px] font-medium" />
            <Tooltip />
            <Bar dataKey="value" radius={[3, 3, 0, 0]}>
              {referrerData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors?.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CustomBarChart;
