"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const graphData = {
  labels: [0, 25, 50, 75, 100],
  datasets: [
    {
      label: "Number of Students",
      data: [5, 10, 25, 50, 90],
      borderColor: "#4c51bf",
      backgroundColor: "rgba(76, 81, 191, 0.2)",
      fill: true,
    },
  ],
};

export default function ComparisonGraph() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Comparison Graph</h3>
      <Line data={graphData} />
    </div>
  );
}
