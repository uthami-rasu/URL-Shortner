import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import ChartShimmer from "../sub-components/ChartShimmer";

const countryData = [
  { name: "India", value: 20 },
  { name: "USA", value: 15 },
  { name: "UAE", value: 15 },
];

// You can define your own colors

const CountryPieChart = ({ loading, data, colors }) => {
  return (
    <div className="w-full h-[350px] lg:h-[350px]">
      {loading ? (
        <ChartShimmer />
      ) : (
        <ResponsiveContainer width="100%" height="100%">
          <PieChart className="p-5">
            <Pie
              data={data || []}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              label
              className="text-md font-bold "
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors?.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CountryPieChart;
