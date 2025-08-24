"use client";

import { useState } from "react";
import TheologicalGraph from "../components/TheologicalGraph";
import HeresiesGraph from "../components/HeresiesGraph";
import IndependentChurchesGraph from "../components/IndependentChurchesGraph";
import TheologicalConceptsGraph from "../components/TheologicalConceptsGraph";
import AuthorityPyramidGraph from "../components/AuthorityPyramidGraph";
import GodArgumentsGraph from "../components/GodArgumentsGraph";
import {
  BookOpen,
  AlertTriangle,
  Church,
  Lightbulb,
  Layers,
  Brain,
} from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("denominations");

  const tabs = [
    {
      id: "denominations",
      name: "Church History & Denominations",
      icon: <Church size={20} />,
      component: <TheologicalGraph />,
    },
    {
      id: "heresies",
      name: "Historical Heresies",
      icon: <AlertTriangle size={20} />,
      component: <HeresiesGraph />,
    },
    {
      id: "independent",
      name: "Independent Churches",
      icon: <BookOpen size={20} />,
      component: <IndependentChurchesGraph />,
    },
    {
      id: "concepts",
      name: "Theological Concepts",
      icon: <Lightbulb size={20} />,
      component: <TheologicalConceptsGraph />,
    },
    {
      id: "authority",
      name: "Pyramid of Authority",
      icon: <Layers size={20} />,
      component: <AuthorityPyramidGraph />,
    },
    {
      id: "arguments",
      name: "Arguments for God",
      icon: <Brain size={20} />,
      component: <GodArgumentsGraph />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Theological Education Platform
            </h1>
            <p className="text-gray-600">
              Explore the rich history of Christianity, understand theological
              concepts, and learn about different religious movements
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 ease-in-out whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab.icon}
                <span className="hidden sm:inline">{tab.name}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              <strong>Theological Education Platform</strong> - A comprehensive
              resource for understanding Christian history and theology
            </p>
            <p className="text-sm mb-4">
              This platform is designed for educational purposes. While every
              effort has been made to ensure accuracy, users should consult
              primary sources for academic research.
            </p>
            <div className="border-t border-gray-200 pt-4">
              <p className="text-sm text-gray-500">
                Inspired by and adapted from content by{" "}
                <a
                  href="https://www.youtube.com/@redeemedzoomer6053"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Redeemed Zoomer
                </a>{" "}
                YouTube channel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
