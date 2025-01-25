"use client";

import React, { useState } from "react";
import Modal from "./Modal";
import SkillTest from "./SkillTest";
import QuickStats from "./QuickStats";
import QuestionAnalysis from "./QuestionAnalysis";

export default function Dashboard() {
  const [isModalOpen, setModalOpen] = useState(false);

  // States for parameters
  const [rank, setRank] = useState(1);
  const [percentile, setPercentile] = useState(30);
  const [score, setScore] = useState(10);

  // Handle form submission from Modal
  const handleModalSubmit = (newRank, newPercentile, newScore) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setScore(newScore);
    setModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <SkillTest onOpenModal={() => setModalOpen(true)} />
      <QuickStats rank={rank} percentile={percentile} score={score} />
      <QuestionAnalysis score={score} />
      {isModalOpen && (
        <Modal
          rank={rank}
          percentile={percentile}
          score={score}
          onSubmit={handleModalSubmit} // Pass handleModalSubmit here
          onClose={() => setModalOpen(false)}
        />
      )}
    </div>
  );
}
