"use client";

import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const donutData = {
  labels: ["Correct", "Incorrect", "Unattempted"],
  datasets: [
    {
      data: [10, 3, 2],
      backgroundColor: ["#4caf50", "#f44336", "#ffc107"],
      hoverOffset: 4,
    },
  ],
};

export default function QuestionAnalysis() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Question Analysis</h3>
      <div className="flex justify-center">
        <Doughnut data={donutData} />
      </div>
    </div>
  );
}
