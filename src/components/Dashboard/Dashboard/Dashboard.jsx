import React, { useState } from "react";
import Marketplace from "../Marketplace/Marketplace";
import Membership from "../Membership/Membership";
import Subscription from "../Subscriptions/Subscription";
import Reward from "../Rewards/Reward";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Marketplace");

  const tabs = [
    {
      id: "Marketplace",
      label: "Marketplace",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
      ),
    },
    {
      id: "Membership",
      label: "Membership",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: "Subscriptions",
      label: "Subscriptions",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
          <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
          <path d="M12 17.5v-11" />
        </svg>
      ),
    },
    {
      id: "Rewards",
      label: "Rewards",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="M12 2l2.39 4.84L20 7.64l-4 3.89L17.18 18 12 15.27 6.82 18 8 11.53l-4-3.89 5.61-.8L12 2z" />
        </svg>
      ),
    },
    {
      id: "Settings",
      label: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c0 .65.39 1.24 1 1.51.3.13.64.2 1 .2H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="text-white mt-32 px-4">
      {/* Header Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
        <div className="h-32 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 flex items-center justify-center">
          Card 1
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-sky-500 to-blue-700 flex items-center justify-center">
          Card 2
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-600 flex items-center justify-center">
          Card 3
        </div>
        <div className="h-32 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center">
          Card 4
        </div>
      </div>

      {/* Tabs (NO SCROLLBAR) */}
      <div className="relative mb-6 border-b border-neutral-800">
        <div className="flex space-x-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-3 font-medium transition-all whitespace-nowrap
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
              >
                {tab.icon}
                {tab.label}

                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-[#BAFD00] rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === "Marketplace" && <Marketplace />}
        {activeTab === "Membership" && <Membership />}
        {activeTab === "Subscriptions" && <Subscription />}
        {activeTab === "Rewards" && <Reward />}
        {activeTab === "Settings" && <p>Settings content goes here...</p>}
      </div>
    </div>
  );
};

export default Dashboard;
