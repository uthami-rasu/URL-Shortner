import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { date: "2025-04-01", clicks: 5 },
  { date: "2025-04-02", clicks: 8 },
  { date: "2025-04-03", clicks: 2 },
  { date: "2025-04-04", clicks: 10 },
  { date: "2025-04-05", clicks: 7 },
  { date: "2025-04-06", clicks: 9 },
  { date: "2025-04-07", clicks: 12 },
];

const LineChartDiagram = ({ Data }) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    console.log("running");
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setAngle(-45);
      } else {
        setAngle(0);
      }
    };

    // call at once
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [angle]);

  return (
    <div className="w-full h-[350px] lg:h-[350px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={Data ? Data : data}
          margin={{ top: 10, right: 30, left: -20, bottom: 40 }}
          className="p-2"
        >
          <CartesianGrid strokeDasharray="3 3" className="opacity-50" />
          <XAxis
            dataKey="date"
            interval={0}
            className="text-[12px] font-semibold"
            tick={{
              angle: angle,
              dy: 10,
              textAnchor: angle ? "end" : "middle",
            }}
          />
          <YAxis className="text-[15px] font-semibold" />
          <Tooltip className="font-semibold" />
          <Line
            type="linear"
            dataKey="clicks"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartDiagram;
