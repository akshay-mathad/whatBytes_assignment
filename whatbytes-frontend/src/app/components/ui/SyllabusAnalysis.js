"use client";

import React from "react";

const syllabusData = [
  { title: "HTML Tools, Forms, History", percentage: 80, color: "bg-blue-600" },
  { title: "Tags & References in HTML", percentage: 60, color: "bg-orange-500" },
  { title: "Tables & References in HTML", percentage: 24, color: "bg-red-500" },
  { title: "Tables & CSS Basics", percentage: 96, color: "bg-green-600" },
];

export default function SyllabusAnalysis() {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Syllabus-Wise Analysis</h3>
      {syllabusData.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="text-sm text-gray-600">{item.title}</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
            <div
              className={`${item.color} h-2 rounded-full`}
              style={{ width: `${item.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
