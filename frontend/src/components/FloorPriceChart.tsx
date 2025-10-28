"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from "recharts";

const data = [
  { date: "2024-01", price: 300 },
  { date: "2024-02", price: 1200 },
  { date: "2024-03", price: 6200 },
  { date: "2024-04", price: 2500 },
  { date: "2024-06", price: 1300 },
  { date: "2024-09", price: 2000 },
  { date: "2024-12", price: 1100 },
  { date: "2025-03", price: 800 },
  { date: "2025-06", price: 900 },
  { date: "2025-09", price: 700 },
];

export function FloorPriceChart() {
  return (
    <ChartContainer
      className="h-80 w-full"
      config={{
        price: {
          label: "Floor Price",
          color: "#d946ef",
        },
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            dataKey="date"
            tick={{ fill: "#aaa", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fill: "#aaa", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
          />
          <ChartTooltip
            cursor={{ stroke: "#333", strokeWidth: 1 }}
            content={<ChartTooltipContent />}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#d946ef"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 2, stroke: "#fff" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
