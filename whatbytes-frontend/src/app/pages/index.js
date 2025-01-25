"use client";

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
import { Card, CardHeader, CardContent } from "@/app/components/ui/card";

// Register Chart.js components
ChartJS.register(
  CategoryScale, // For the X-axis
  LinearScale,   // For the Y-axis (linear scale)
  BarElement,    // For Bar charts
  ArcElement,    // For Pie charts
  Tooltip,       // For tooltips
  Legend         // For chart legends
);

const SkillWise = () => {
  const barData = {
    labels: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
    datasets: [
      {
        label: "Proficiency",
        data: [80, 90, 75, 85],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { beginAtZero: true },
      y: { beginAtZero: true },
    },
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h2 className="text-xl font-semibold">Skill-wise Analysis</h2>
      </CardHeader>
      <CardContent className="h-64">
        <Bar data={barData} options={barOptions} />
      </CardContent>
    </Card>
  );
};

const QuestionAnalysis = () => {
  const pieData = {
    labels: ["Correct", "Incorrect", "Unattempted"],
    datasets: [
      {
        data: [60, 30, 10],
        backgroundColor: ["#4caf50", "#f44336", "#ffeb3b"],
      },
    ],
  };

  return (
    <Card className="p-4">
      <CardHeader>
        <h2 className="text-xl font-semibold">Question Analysis</h2>
      </CardHeader>
      <CardContent className="h-64">
        <Pie data={pieData} />
      </CardContent>
    </Card>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <SkillWise />
        </div>
        <div className="flex-1">
          <QuestionAnalysis />
        </div>
      </div>
    </div>
  );
}
