import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Sector,
} from "recharts";
import ChartShimmer from "../sub-components/ChartShimmer";

const dummyData = [
  { name: "India", value: 20 },
  { name: "USA", value: 15 },
  { name: "UAE", value: 15 },
  { name: "UK", value: 7 },
];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="end"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
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
              // label={
              //   window.innerWidth < 568
              //     ? false
              //     : ({ name, percent }) =>
              //         `${name} (${(percent * 100).toFixed(0)}%)`
              // }
              label={renderCustomizedLabel}
              className="text-md font-bold z-40 "
              // Optional: Disable the active segment highlight border
              labelLine={false}
            >
              {data?.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors?.length]}
                />
              ))}
            </Pie>
            <Tooltip cursor={{ fill: "#ffffff00" }} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default CountryPieChart;
