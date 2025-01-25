"use client";

import React, { useState } from "react";
import Navbar from "./components/ui/Navbar";
import SkillTest from "./components/ui/SkillTest";
import QuickStats from "./components/ui/QuickStats";
import SyllabusAnalysis from "./components/ui/SyllabusAnalysis";
import ComparisonGraph from "./components/ui/ComparisonGraph";
import QuestionAnalysis from "./components/ui/QuestionAnalysis";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Skill Test");

  const renderTabContent = () => {
    switch (activeTab) {
      case "Skill Test":
        return (
          <div>
            <SkillTest />
            <QuickStats />
          </div>
        );
      case "Syllabus Analysis":
        return <SyllabusAnalysis />;
      case "Comparison Graph":
        return <ComparisonGraph />;
      case "Question Analysis":
        return <QuestionAnalysis />;
      default:
        return <SkillTest />;
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="ml-72 p-8 w-full">{renderTabContent()}</main>
    </div>
  );
}
