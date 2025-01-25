"use client";

import React from "react";

export default function QuickStats() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Statistics</h3>
      <div className="flex justify-between">
        <div className="text-center">
          <p className="text-2xl font-bold text-yellow-500">1</p>
          <p className="text-sm text-gray-500">Your Rank</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-500">30%</p>
          <p className="text-sm text-gray-500">Percentile</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-green-500">10 / 15</p>
          <p className="text-sm text-gray-500">Correct Answers</p>
        </div>
      </div>
    </div>
  );
}
