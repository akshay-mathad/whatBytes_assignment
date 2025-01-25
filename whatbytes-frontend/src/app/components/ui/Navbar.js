"use client";

import React from "react";

export default function Navbar({ activeTab, setActiveTab }) {
  const tabs = ["Skill Test", "Syllabus Analysis", "Comparison Graph", "Question Analysis"];

  return (
    <nav className="h-screen bg-white shadow-lg p-6 w-64 fixed">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <ul className="space-y-4">
        {tabs.map((tab) => (
          <li key={tab}>
            <button
              onClick={() => setActiveTab(tab)}
              className={`text-gray-700 font-semibold hover:text-blue-600 ${
                activeTab === tab ? "text-blue-600" : ""
              }`}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
