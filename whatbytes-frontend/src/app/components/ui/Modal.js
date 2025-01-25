"use client";

import React, { useState } from "react";

export default function Modal({ rank, percentile, score, onSubmit, onClose }) {
  const [newRank, setNewRank] = useState(rank);
  const [newPercentile, setNewPercentile] = useState(percentile);
  const [newScore, setNewScore] = useState(score);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onSubmit === "function") {
      onSubmit(newRank, newPercentile, newScore); // Pass updated values
    } else {
      console.error("onSubmit is not a function");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
        >
          ✕
        </button>
        <h3 className="text-xl font-bold text-gray-800 mb-4">Update Scores</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Rank</label>
            <input
              type="number"
              value={newRank}
              onChange={(e) => setNewRank(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-2 border-blue-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Percentile</label>
            <input
              type="number"
              value={newPercentile}
              onChange={(e) => setNewPercentile(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-2 border-blue-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Current Score</label>
            <input
              type="number"
              value={newScore}
              onChange={(e) => setNewScore(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-2 border-blue-900 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="flex justify-end mt-4 space-x-4">
            <button
              type="button"
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
