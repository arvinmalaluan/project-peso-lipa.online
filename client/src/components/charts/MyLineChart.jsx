import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { line_data } from "../../assets/dummy/dummy_data_charts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="p-4 bg-white border border-gray-300 rounded">
        <p className="mb-2 font-semibold">{`Job Post: ${payload[0].payload.job_post}`}</p>
        <p className="text-sm">{`Applicants: ${payload[0].payload.applicants}`}</p>
        <p className="text-sm ">{`Views: ${payload[0].payload.views}`}</p>
      </div>
    );
  }

  return null;
};

export const MyLineChart = () => {
  const data = line_data;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 30,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Tooltip content={<CustomTooltip />} />

        <Line
          type="monotone"
          dataKey="views"
          stroke="rgba(212, 37, 30, 1)"
          dot={false}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="applicants"
          stroke="rgba(18, 9, 73, 1)"
          dot={false}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
