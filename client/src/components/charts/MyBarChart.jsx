import React from "react";
import {
  FunnelChart,
  ResponsiveContainer,
  Legend,
  Funnel,
  LabelList,
  Tooltip,
} from "recharts";

const data = [
  {
    value: 120,
    name: "Application Received",
    fill: "#9b1c31",
  },
  {
    value: 90,
    name: "Reference Check",
    fill: "#cc3d56",
  },
  {
    value: 90,
    name: "Resume Screening",
    fill: "#e5707e",
  },
  {
    value: 60,
    name: "Phone Screening",
    fill: "#ff919d",
  },
  {
    value: 60,
    name: "Offer Extended",
    fill: "#ffb1b8",
  },
  {
    value: 50,
    name: "Interview Scheduled",
    fill: "#d86f78",
  },
  {
    value: 50,
    name: "Offer Accepted",
    fill: "#ffcccc", // Lightest shade of red
  },
  {
    value: 30,
    name: "Interview Conducted",
    fill: "#ff7f91", // Medium-light shade of red
  },
  {
    value: 30,
    name: "Onboarding",
    fill: "#ff5a6b", // Medium-dark shade of red
  },
];

export const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <FunnelChart width={730} height={250}>
        <Tooltip />
        <Funnel dataKey="value" data={data} isAnimationActive>
          <LabelList
            position="insideEnd"
            fill="#000"
            stroke="none"
            dataKey="name"
            fontSize={14}
          />
        </Funnel>
      </FunnelChart>
    </ResponsiveContainer>
  );
};
