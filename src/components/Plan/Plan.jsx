import React, { useState } from "react";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  const [showText, setShowText] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1
        className="text-center md:text-5xl bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
             bg-clip-text text-transparent font-bold text-3xl"
      >
        Choose Your License Plan
      </h1>
      <p className="text-center text-gray-500 mb-10 mt-5">
        Professional XAUUSD automation bot with secure licensing, ongoing
        updates, and dedicated support.
      </p>

      {/* Tabs */}

      <div className="flex justify-center mb-12 relative bg-gray-800 rounded-full p-1 w-max mx-auto">
        {/* Monthly Tab */}
        <button
          onClick={() => handleTabClick("monthly")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "monthly"
              ? "bg-lime-400 text-black" // inactive style
              : "text-gray-400 hover:text-white"
          }`}
        >
          Monthly
        </button>

        {/* Yearly Tab */}
        <div className="relative">
          <button
            onClick={() => handleTabClick("yearly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "yearly"
                ? "bg-lime-400 text-black" // active highlight
                : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
          </button>

          {/* Discount Badge */}
          {activeTab === "yearly" && (
            <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
              -17%
            </span>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Monthly Card */}
        <div
          className={`cursor-pointer p-6 rounded-3xl border  transition-shadow ${
            activeTab === "monthly"
              ? " border-[hsl(72_100%_50%)] shadow-2xl "
              : " border-gray-300 hover:shadow-lg"
          }`}
        >
          <div className="flex items-center justify-between gap-6 mb-4">
            <div className="description">
              <h2 className="text-2xl font-bold mb-2   text-white">
                Monthly Plan
              </h2>
              <p className=" text-gray-500 text-sm mb-4">
                $49/month — Access all features, updates, and support.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
            >
              <circle
                cx="48"
                cy="48"
                r="14"
                fill="none"
                stroke="#BAFD00"
                strokeWidth="4"
              ></circle>
              <g
                className="spin"
                stroke="#A8E900"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <line x1="48" y1="8" x2="48" y2="18"></line>
                <line x1="48" y1="78" x2="48" y2="88"></line>
                <line x1="8" y1="48" x2="18" y2="48"></line>
                <line x1="78" y1="48" x2="88" y2="48"></line>
              </g>
              <style>
                {`
        .spin {
          transform-origin: 48px 48px;
          animation: spin 1.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
              </style>
            </svg>
          </div>

          <ul>
            <h1 className="mb-5 text-5xl font-bold text-[hsl(59,100%,50%)] ">
              $20<span className="text-lg text-gray-500">/month</span>
            </h1>

            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Full Access to all SuperTradingEA bots
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Up to 10 trading accounts licensed to use the bots
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Dual-Hedged & Adaptive Strategy Access
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              License Key Management
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Regular Updates & Improvements
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Standard Customer Support
            </li>
          </ul>
          <button
            onClick={() => handleTabClick("monthly")}
            disabled={activeTab !== "monthly"}
            className={`w-full py-2 rounded-lg mt-10 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === "monthly"
                ? "border text-[hsl(72_100%_50%)]"
                : "border text-[hsl(72_100%_50%)]"
            }`}
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Yearly Card */}
        <div
          className={`relative cursor-pointer rounded-3xl border p-6 transition-all duration-300 ${
            activeTab === "yearly"
              ? "border-transparent text-white hover:brightness-110 shadow-[0_0_28px_4px_hsla(59,100%,50%,0.25)]"
              : "border-gray-300 hover:shadow-lg"
          }`}
        >
          {/* Recommended Badge */}
          {activeTab === "yearly" && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black  px-3 py-1 rounded-full text-sm shadow-lg">
              ⭐ Recommended
            </div>
          )}

          <div className="flex items-center justify-between gap-6 mb-4">
            <div className="description">
              <h2 className="text-2xl font-bold mb-2  text-white">
                Yearly Plan
              </h2>
              <p className=" text-gray-500 text-sm mb-4">
                Best value for serious XAUUSD traders
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
            >
              <style>{`
    .lock {
      fill: none;
      stroke: #BAFD00;
      stroke-width: 4;
    }
    .glow {
      stroke: #A8E900;
      stroke-width: 3;
      opacity: .5;
      animation: fade 2s infinite;
    }
    @keyframes fade {
      50% { opacity: .9; }
    }
  `}</style>

              <rect
                x="28"
                y="44"
                width="40"
                height="32"
                rx="6"
                className="lock"
              />

              <path d="M36 44v-8a12 12 0 0 1 24 0v8" className="lock" />

              <circle cx="48" cy="60" r="30" className="glow" fill="none" />
            </svg>
          </div>

          <ul>
            <h1 className="mb-5 text-5xl font-bold text-[hsl(59,100%,50%)] ">
              $200<span className="text-lg text-gray-500">/year</span>
            </h1>

            {activeTab === "yearly" && (
              <li className="mb-3">
                <span className="text-[hsl(59,100%,50%)]">
                  💡 Save $40 — get 2 months FREE
                </span>
              </li>
            )}

            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Full access to SuperTradingEA (MT5) with all features enabled
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Optimized for XAUUSD M1 with dual-hedged execution
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Smart martingale recovery, adaptive pip step & basket take profit
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Use on up to 10 authorized trading accounts
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Priority support and faster assistance
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Ongoing updates, improvements, and optimizations
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Stable, uninterrupted license for long-term automated trading
            </li>
          </ul>

          {/* Noted : Button  */}
          <button
            onClick={() => handleTabClick("monthly")}
            disabled={activeTab !== "yearly"}
            className={`w-full py-2 rounded-lg mt-10 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === "yearly"
                ? "bg-[hsl(72_100%_50%)] text-black "
                : " border text-white border-[hsl(72_100%_40%)]"
            }`}
          >
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
