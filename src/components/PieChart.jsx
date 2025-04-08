import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const countryData = [
  { name: "India", value: 20 },
  { name: "USA", value: 15 },
  { name: "UAE", value: 15 },
];

// You can define your own colors
const COLORS = ["#6366F1", "#34D399"]; // Indigo-500 and Green-400 from Tailwind

const CountryPieChart = () => {
  return (
    <div className="w-full h-[350px] lg:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart className="p-5">
          <Pie
            data={countryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
            className="text-md font-bold "
          >
            {countryData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CountryPieChart;
