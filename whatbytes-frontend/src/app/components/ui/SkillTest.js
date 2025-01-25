"use client";

import React, { useState } from "react";
import Modal from "./Modal";

export default function SkillTest() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="mb-8">
      <div className="bg-white shadow rounded-lg p-6 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">HTML Skill Test</h2>
          <p className="text-sm text-gray-500">Questions: 08 | Duration: 15 mins</p>
        </div>
        <button
          onClick={() => setModalOpen(true)}
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow hover:bg-blue-700"
        >
          Update
        </button>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)} />
      )}
    </div>
  );
}
