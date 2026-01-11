import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";

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
  hidden: {
    opacity: 0,
    y: 20,
  },
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

const Service = () => {
  return (
    <motion.div
      className="service w-full flex flex-col"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={item}
        className="flex flex-col items-center justify-start px-4 mb-6 mt-12"
      >
        <h1 className="text-center text-[hsl(72_100%_50%)] mb-5 font-bold text-5xl">
          Additional Service
        </h1>
        <p className="text-gray-400 mb-5">
          Maximize your trading performance with our optimized VPS solution
        </p>
      </motion.div>

      <div className="service-card w-full">
        <motion.div
          variants={container}
          className="flex justify-center items-center gap-8 md:px-8 px-3 md:flex-row flex-col w-full"
        >
          {/* Card 1 */}
<div className="service-card-item hover:cursor-pointer">
  <div className="content text-white rounded-3xl h-full w-full border border-gray-700 hover:border-[#A8E900] p-8 md:p-12 cursor-pointer transition-all duration-300 hover:-translate-y-2">
    
    {/* Top section: Icon + Title */}
    <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        role="img"
        aria-label="VPS"
      >
        <style>
          {`
            .stroke{fill:none;stroke:#BAFD00;stroke-width:5;stroke-linejoin:round;stroke-linecap:round}
            .accent{stroke:#A8E900}
            .dot{fill:#BAFD00;animation:blink .9s ease-in-out infinite}
            .ring{fill:none;stroke:#BAFD00;stroke-width:4;opacity:.25;transform-origin:92px 34px;animation:pulse 1.8s ease-in-out infinite}
            .scan{fill:#A8E900;opacity:.10;animation:scan 2.2s ease-in-out infinite}
            @keyframes blink{50%{opacity:.2}}
            @keyframes pulse{0%,100%{transform:scale(.9);opacity:.18}50%{transform:scale(1.12);opacity:.42}}
            @keyframes scan{0%{transform:translateY(-26px);opacity:0}30%{opacity:.18}70%{opacity:.18}100%{transform:translateY(48px);opacity:0}}
          `}
        </style>

        <g className="stroke">
          <rect x="24" y="24" width="72" height="18" rx="6"></rect>
          <rect x="24" y="48" width="72" height="18" rx="6"></rect>
          <rect x="24" y="72" width="72" height="18" rx="6"></rect>
          <line x1="34" y1="33" x2="46" y2="33"></line>
          <line x1="34" y1="57" x2="46" y2="57"></line>
          <line x1="34" y1="81" x2="46" y2="81"></line>
          <circle cx="86" cy="33" r="2.5" className="dot"></circle>
          <circle cx="86" cy="57" r="2.5" fill="#A8E900" opacity=".7"></circle>
          <circle cx="86" cy="81" r="2.5" fill="#96D500" opacity=".7"></circle>
        </g>

        <circle cx="92" cy="34" r="6" className="dot"></circle>
        <circle cx="92" cy="34" r="14" className="ring"></circle>

        <clipPath id="clipStack">
          <rect x="24" y="24" width="72" height="66" rx="6"></rect>
        </clipPath>

        <g clipPath="url(#clipStack)">
          <rect x="24" y="24" width="72" height="20" rx="6" className="scan"></rect>
        </g>
      </svg>

      <div className="text-gray-300 text-center md:text-left">
        <h1 className="font-bold text-xl md:text-2xl mb-2">VPS Hosting for MT5</h1>
        <p className="text-sm md:text-base">Ultra-low latency VPS optimized for forex trading</p>
      </div>
    </div>

    {/* Bottom section: Features + Benefits */}
    <div className="flex flex-col md:flex-row gap-6">
      
      {/* Key Features */}
      <ul className="flex-1">
        <p className="mb-3 font-semibold">Key Features</p>
        <li className="flex items-center text-gray-400 gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          Low latency trading servers
        </li>

        <li className="flex items-center text-gray-400 gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          99.9% uptime guarantee
        </li>

        <li className="flex items-center text-gray-400 gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          Pre-configured MT5 ready
        </li>

        <li className="mt-7 flex items-center gap-3 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 text-black font-semibold rounded-lg bg-[#A8E900] hover:bg-[#BAFD00] transition group"
          >
            View VPS Plans
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
          <span className="text-sm text-gray-400">
            Starting from <span className="text-[#A8E900] font-bold">$15/month</span>
          </span>
        </li>
      </ul>

      {/* Benefits */}
      <ul className="flex-1">
        <p className="mb-3 font-semibold">Benefits</p>
        <li className="flex items-center text-gray-400 gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          24/7 automated trading
        </li>
        <li className="flex items-center text-gray-400 gap-2 mb-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          Minimal slippage execution
        </li>
        <li className="flex items-center text-gray-400 gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#BAFD00] to-[#A8E900] flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3 h-3 text-background"
            >
              <path d="M20 6 9 17l-5-5"></path>
            </svg>
          </div>
          Dedicated technical support
        </li>
      </ul>
    </div>
  </div>
</div>

        </motion.div>
      </div>
    </motion.div>
  );
};

export default Service;
