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

const referrerData = [
  { country: "India", clicks: 12 },
  { country: "USA", clicks: 12 },
];

const COLORS = ["#6366F1", "#34D399"]; // Indigo-500 and Green-400

const CustomBarChart = () => {
  return (
    <div className="w-full h-[350px] lg:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={referrerData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis
            dataKey="country"
            className="text-[12px] lg:text-[15px] font-medium"
          />
          <YAxis className="text-[12px] lg:text-[15px] font-medium" />
          <Tooltip />
          <Bar dataKey="clicks" radius={[3, 3, 0, 0]}>
            {referrerData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
