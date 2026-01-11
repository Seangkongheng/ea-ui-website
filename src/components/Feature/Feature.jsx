import React from "react";
import { motion } from "framer-motion";

const Feature = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.8,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Button */}
      <motion.div
        variants={item}
        className="btn flex justify-center items-center mb-5"
      >
        <button className="border-[hsl(72_100%_50%)] border px-4 py-1 text-white rounded-lg text-center">
          Feature
        </button>
      </motion.div>

      {/* Title */}
      <motion.h1
        variants={item}
        className="text-center text-[#A8E900] text-3xl font-bold md:text-5xl"
      >
        Expert Advisor Features
      </motion.h1>
      <motion.p
        variants={item}
        className="text-center text-gray-500 mb-10 mt-5"
      >
        Professional automation engineered for Gold volatility
      </motion.p>

      {/* Feature content */}
      <motion.div
        variants={item}
        className="feature-content-card px-3 grid gap-6 grid-cols-1 md:grid-cols-2"
      >
        {/* Risk Control */}
        <div className="p-10 rounded-3xl border border-lime-100 hover:border-[#BAFD00] duration-300 hover:-translate-y-1 flex flex-col h-full text-white">
          <div className="flex justify-center items-center">
            <div className="risk p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="140"
                viewBox="0 0 140 140"
              >
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#BAFD00"></stop>
                    <stop offset="1" stopColor="#A8E900"></stop>
                  </linearGradient>
                </defs>
                <path
                  d="M70 18 L108 34 V70c0 25-18 42-38 52C50 112 32 95 32 70V34Z"
                  fill="none"
                  stroke="url(#g1)"
                  strokeWidth="6"
                  strokeLinejoin="round"
                />
                <circle
                  cx="70"
                  cy="66"
                  r="18"
                  fill="none"
                  stroke="#A8E900"
                  strokeWidth="4"
                  opacity="0.35"
                >
                  <animate
                    attributeName="r"
                    values="14;22;14"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.45;0.1;0.45"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <path
                  d="M58 66 l8 8 18-20"
                  fill="none"
                  stroke="#A8E900"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <animate
                    attributeName="strokeDasharray"
                    values="0,80;80,0;0,80"
                    dur="1.6s"
                    repeatCount="indefinite"
                  />
                </path>
              </svg>
            </div>
          </div>
          <div className="description text-white mt-auto text-start">
            <h1 className="text-3xl font-bold">Risk Control</h1>
            <p className="text-sm opacity-80 mt-2">
              Built-in protection with free margin checks, spread filtering, and
              volatility pause. Optional equity limits and daily profit caps.
            </p>
          </div>
        </div>

        {/* Pip Engine and Take Profit group */}
        <div className="text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Pip Engine */}
            <div className="card flex flex-col p-4 rounded-3xl border border-lime-100 card cursor-pointer transition-all hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                >
                  <g transform="translate(70 70)">
                    <g>
                      <circle
                        r="28"
                        fill="none"
                        stroke="#BAFD00"
                        strokeWidth="6"
                      ></circle>
                      <circle
                        r="10"
                        fill="none"
                        stroke="#A8E900"
                        strokeWidth="6"
                      ></circle>
                      <g fill="#BAFD00">
                        <rect
                          x="-3"
                          y="-44"
                          width="6"
                          height="12"
                          rx="2"
                        ></rect>
                        <rect x="-3" y="32" width="6" height="12" rx="2"></rect>
                        <rect
                          x="-44"
                          y="-3"
                          width="12"
                          height="6"
                          rx="2"
                        ></rect>
                        <rect x="32" y="-3" width="12" height="6" rx="2"></rect>
                      </g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0"
                        to="360"
                        dur="2.2s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </g>
                  </g>
                  <path
                    d="M18 110 H122"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="6"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
              <div className="description mt-auto text-start">
                <h1 className="text-xl font-bold text-white">Pip Engine</h1>
                <p className="text-sm opacity-80 mt-2 text-gray-500">
                  Dynamically adjusts trade spacing using ATR and Bollinger
                  Bands.
                </p>
              </div>
            </div>

            {/* Take Profit */}
            <div className="card flex flex-col p-4 rounded-3xl border border-lime-100 card cursor-pointer transition-all hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="140"
                  height="140"
                  viewBox="0 0 140 140"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r="42"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="6"
                  />
                  <circle
                    cx="70"
                    cy="70"
                    r="26"
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="6"
                  />
                  <circle cx="70" cy="70" r="10" fill="#A8E900" opacity="0.9">
                    <animate
                      attributeName="r"
                      values="8;12;8"
                      dur="1.2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
              <div className="description mt-auto text-start">
                <h1 className="text-xl font-bold text-white">Take Profit</h1>
                <p className="text-sm opacity-80 mt-2 text-gray-500">
                  Smart basket exits with ATR smoothing for optimal timing.
                </p>
              </div>
            </div>
          </div>

          <div className="card flex items-center gap-5 p-10 border border-lime-100 rounded-3xl hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="140"
              height="140"
              viewBox="0 0 140 140"
              className="shrink-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="140"
                height="140"
                viewBox="0 0 140 140"
              >
                <g
                  fill="none"
                  stroke="#64748b"
                  stroke-width="6"
                  stroke-linejoin="round"
                >
                  <rect x="34" y="86" width="72" height="18" rx="9"></rect>
                  <rect x="38" y="64" width="64" height="18" rx="9"></rect>
                  <rect x="42" y="42" width="56" height="18" rx="9"></rect>
                </g>
                <g opacity="0.55">
                  <rect
                    x="34"
                    y="86"
                    width="72"
                    height="18"
                    rx="9"
                    fill="none"
                    stroke="#BAFD00"
                    stroke-width="6"
                  ></rect>
                  <rect
                    x="38"
                    y="64"
                    width="64"
                    height="18"
                    rx="9"
                    fill="none"
                    stroke="#BAFD00"
                    stroke-width="6"
                  ></rect>
                  <rect
                    x="42"
                    y="42"
                    width="56"
                    height="18"
                    rx="9"
                    fill="none"
                    stroke="#A8E900"
                    stroke-width="6"
                  ></rect>
                  <animateTransform
                    attributeName="transform"
                    type="translate"
                    values="0 18; 0 -10; 0 18"
                    dur="1.6s"
                    repeatCount="indefinite"
                  ></animateTransform>
                  <animate
                    attributeName="opacity"
                    values="0.15;0.65;0.15"
                    dur="1.6s"
                    repeatCount="indefinite"
                  ></animate>
                </g>
                <text
                  x="92"
                  y="34"
                  font-family="system-ui,Segoe UI,Roboto,Arial"
                  font-size="20"
                  fill="#BAFD00"
                  font-weight="700"
                >
                  2x
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="1.6s"
                    repeatCount="indefinite"
                  ></animate>
                </text>
              </svg>
            </svg>

            <div>
              <h1 className="text-xl font-bold text-white">Martingale</h1>
              <p className="text-sm text-gray-500 mt-2">
                Intelligent recovery for Gold volatility. Strategic position
                sizing manages drawdowns — not random averaging.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keep all other card sections as-is with the same structure */}
    </motion.div>
  );
};

export default Feature;
