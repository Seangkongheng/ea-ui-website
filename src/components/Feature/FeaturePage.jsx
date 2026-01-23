import React from "react";
import { motion } from "framer-motion";

const FeaturePage = () => {
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
  const RealtimeIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
      class="shrink-0"
    >
      <rect
        x="20"
        y="28"
        width="100"
        height="70"
        rx="10"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
      ></rect>
      <path
        d="M55 112h30"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
        stroke-linecap="round"
      ></path>
      <path
        d="M70 98v14"
        fill="none"
        stroke="#64748b"
        stroke-width="6"
        stroke-linecap="round"
      ></path>
      <path
        d="M28 72 C38 72, 38 52, 48 52 C58 52, 58 84, 68 84 C78 84, 78 60, 88 60 C98 60, 98 78, 108 78 C116 78, 116 72, 124 72"
        fill="none"
        stroke="#BAFD00"
        stroke-width="6"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-dasharray="260"
        stroke-dashoffset="260"
      >
        <animate
          attributeName="strokeDashoffset"
          values="260;0;0;260"
          dur="1.4s"
          repeatCount="indefinite"
        ></animate>
      </path>
      <circle cx="112" cy="40" r="6" fill="#A8E900">
        <animate
          attributeName="opacity"
          values="1;0.15;1"
          dur="0.8s"
          repeatCount="indefinite"
        ></animate>
      </circle>
    </svg>
  );

  const FrequencyIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="140"
      height="140"
      viewBox="0 0 140 140"
    >
      <circle
        cx="70"
        cy="70"
        r="50"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.3"
      ></circle>
      <circle
        cx="70"
        cy="70"
        r="35"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.5"
      ></circle>
      <circle
        cx="70"
        cy="70"
        r="20"
        fill="none"
        stroke="#64748b"
        stroke-width="4"
        opacity="0.7"
      ></circle>
      <g>
        <path
          d="M70 20 L70 40"
          stroke="#BAFD00"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="0.4s"
            repeatCount="indefinite"
          ></animate>
        </path>
        <path
          d="M70 100 L70 120"
          stroke="#BAFD00"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="1;0.3;1"
            dur="0.4s"
            repeatCount="indefinite"
          ></animate>
        </path>
        <path
          d="M20 70 L40 70"
          stroke="#A8E900"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="0.5;1;0.5"
            dur="0.4s"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </path>
        <path
          d="M100 70 L120 70"
          stroke="#A8E900"
          stroke-width="6"
          stroke-linecap="round"
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur="0.4s"
            repeatCount="indefinite"
            begin="0.1s"
          ></animate>
        </path>
      </g>
      <circle cx="70" cy="70" r="8" fill="#BAFD00">
        <animate
          attributeName="r"
          values="6;10;6"
          dur="0.8s"
          repeatCount="indefinite"
        ></animate>
      </circle>
      <text
        x="70"
        y="75"
        font-family="monospace"
        font-size="10"
        fill="#070C0F"
        text-anchor="middle"
        font-weight="700"
      >
        M1
      </text>
    </svg>
  );

  const HedgedIcon = (
    <svg
      width="140"
      height="140"
      viewBox="0 0 140 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="hedgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#BAFD00" />
          <stop offset="100%" stopColor="#A8E900" />
        </linearGradient>

        <style>
          {`
            .orbit {
              stroke-dasharray: 120 80;
              animation: orbit 2.6s linear infinite;
            }
            .orbit.reverse {
              animation-direction: reverse;
            }
            .core {
              animation: corePulse 1.8s ease-in-out infinite;
            }
            @keyframes orbit {
              to { stroke-dashoffset: -200; }
            }
            @keyframes corePulse {
              0%,100% { r: 7; opacity: .6; }
              50% { r: 11; opacity: 1; }
            }
          `}
        </style>
      </defs>

      <circle
        cx="70"
        cy="70"
        r="42"
        fill="none"
        stroke="#64748b"
        strokeWidth="3"
        opacity="0.25"
      />

      <path
        d="M70 28 A42 42 0 0 1 112 70"
        fill="none"
        stroke="url(#hedgeGrad)"
        strokeWidth="6"
        strokeLinecap="round"
        className="orbit"
      />

      <path
        d="M28 70 A42 42 0 0 1 70 112"
        fill="none"
        stroke="#A8E900"
        strokeWidth="6"
        strokeLinecap="round"
        className="orbit reverse"
        opacity="0.9"
      />

      <circle cx="70" cy="70" r="9" fill="#BAFD00" className="core" />
    </svg>
  );
  const Card = ({ children, big }) => (
    <motion.div
      variants={item}
      className={`border-lime-100 border
        group relative overflow-hidden rounded-3xl border border-white/10
        hover:border-lime-400 transition-all
        ${big ? "p-10" : "p-6"}
        bg-gradient-to-b from-white/5 to-transparent
      `}
    >
      {children}
    </motion.div>
  );

  return (
    <motion.div
      className="relative mt-16" // ensure some space
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="text-center text-white max-w-6xl mx-auto px-4">
        <motion.h1
          variants={item}
          className=" bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
                           bg-clip-text text-transparent py-5 text-3xl font-bold md:text-5xl"
        >
          Features
        </motion.h1>
        <motion.p variants={item} className="text-gray-300 mb-10 mt-5">
          Professional automation engineered for Gold volatility
        </motion.p>

        {/* Feature content */}
        <motion.div
          variants={item}
          className="feature-content-card px-3 grid gap-6 grid-cols-1 md:grid-cols-2"
        >
          {/* Risk Control */}
          <div className="p-10 rounded-3xl border bg-gradient-to-b from-white/5 to-transparent border-lime-100 hover:border-[#BAFD00] duration-300 hover:-translate-y-1 flex flex-col h-full text-white">
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
                Built-in protection with free margin checks, spread filtering,
                and volatility pause. Optional equity limits and daily profit
                caps.
              </p>
            </div>
          </div>

          {/* Pip Engine and Take Profit group */}
          <div className="text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pip Engine */}
              <div className="card flex flex-col p-4 bg-gradient-to-b from-white/5 to-transparent rounded-3xl border border-lime-100 card cursor-pointer transition-all hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
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
                          <rect
                            x="-3"
                            y="32"
                            width="6"
                            height="12"
                            rx="2"
                          ></rect>
                          <rect
                            x="-44"
                            y="-3"
                            width="12"
                            height="6"
                            rx="2"
                          ></rect>
                          <rect
                            x="32"
                            y="-3"
                            width="12"
                            height="6"
                            rx="2"
                          ></rect>
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
              <div className="card bg-gradient-to-b from-white/5 to-transparent flex flex-col p-4 rounded-3xl border border-lime-100 card cursor-pointer transition-all hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
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

            <div className="card bg-gradient-to-b from-white/5 to-transparent flex items-center gap-5 p-10 border border-lime-100 rounded-3xl hover:border-[#BAFD00] duration-300 hover:-translate-y-1">
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

        <motion.div
          variants={container}
          className="grid grid-cols-1 mt-5 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Realtime */}
          <Card>
            <div className="flex justify-center mb-4">{RealtimeIcon}</div>
            <h4 className="text-lg font-semibold text-white">Realtime</h4>
            <p className="text-sm text-gray-500 mt-2">
              Live execution and position control on every tick.
            </p>
          </Card>

          {/* High Frequency */}
          <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
            {/* ICON */}
            <div className="flex justify-center mb-5">{FrequencyIcon}</div>

            {/* TEXT */}
            <h4 className="text-lg font-semibold text-white text-center">
              High Frequency
            </h4>

            <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
              M1 timeframe optimized for fast-moving Gold sessions.
            </p>
          </Card>

          {/* Dual Hedged */}
          <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
            {/* ICON */}
            <div className="flex justify-center mb-5">{HedgedIcon}</div>

            {/* TEXT */}
            <h4 className="text-lg font-semibold text-white text-center">
              Dual-Hedged Engine
            </h4>

            <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
              Buy &amp; sell positions every M1 candle.Opens both buy and sell
              positions on every M1 candle for direction-neutral trading.
            </p>
          </Card>

          {/* Configurable Risk */}
          <Card className="p-6 bg-slate-900/70 border border-slate-800 rounded-2xl">
            {/* ICON */}
            <div className="flex justify-center mb-5">
              <svg
                width="140"
                height="140"
                viewBox="0 0 140 140"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="riskGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#BAFD00" />
                    <stop offset="100%" stopColor="#A8E900" />
                  </linearGradient>

                  <style>
                    {`
                    .fillArc {
                      stroke-dasharray: 160;
                      animation: riskFill 3s ease-in-out infinite;
                    }
                    .needle {
                      transform-origin: 70px 84px;
                      animation: needleMove 3s ease-in-out infinite;
                    }
                    .capital {
                      animation: capPulse 1.6s ease-in-out infinite;
                    }
                    @keyframes riskFill {
                      0% { stroke-dashoffset: 140; }
                      50% { stroke-dashoffset: 30; }
                      100% { stroke-dashoffset: 140; }
                    }
                    @keyframes needleMove {
                      0%,100% { transform: rotate(-55deg); }
                      50% { transform: rotate(30deg); }
                    }
                    @keyframes capPulse {
                      0%,100% { opacity: .6; }
                      50% { opacity: 1; }
                    }
                  `}
                  </style>
                </defs>

                <path
                  d="M30 90 A40 40 0 0 1 110 90"
                  fill="none"
                  stroke="#64748b"
                  strokeWidth="6"
                  strokeLinecap="round"
                  opacity="0.25"
                />

                <path
                  d="M30 90 A40 40 0 0 1 110 90"
                  fill="none"
                  stroke="url(#riskGrad)"
                  strokeWidth="6"
                  strokeLinecap="round"
                  className="fillArc"
                />

                <circle
                  cx="70"
                  cy="90"
                  r="10"
                  fill="#0b0f14"
                  stroke="#BAFD00"
                  strokeWidth="3"
                />

                <line
                  x1="70"
                  y1="90"
                  x2="70"
                  y2="56"
                  stroke="#BAFD00"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="needle"
                />
              </svg>
            </div>

            {/* TEXT */}
            <h4 className="text-lg font-semibold text-white text-center">
              Configurable Risk
            </h4>

            <p className="text-sm text-gray-400 mt-2 text-center leading-relaxed">
              Adjust risk parameters for any account size. Works from $50 / 5000
              cents upward.
            </p>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturePage;
