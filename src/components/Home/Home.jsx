import React from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../Service/AnimatedBackground"; // optional

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      damping: 18,
      mass: 0.8,
    },
  },
};

const Home = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="home w-full min-h-screen flex justify-center items-center px-7 sm:px-6"
    >
      <AnimatedBackground />

      <div className="text-center mt-16 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div variants={item} className="home-title">
          <h1 className="mb-6 text-[hsl(59,100%,50%)] text-3xl sm:text-6xl font-bold text-center">
            Engineered for Gold Volatility
          </h1>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 max-w-md sm:max-w-3xl mx-auto">
            Trade XAUUSD Without Choosing a Direction
          </h2>
        </motion.div>

        {/* Description */}
        <motion.div variants={item} className="home-description mb-10">
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-500 leading-relaxed">
            Fully automated dual-hedged trading system. Set it up once, let
            SuperTradingEA handle the rest.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="home-button flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full"
        >
          <a
            href="#"
            className="group flex justify-center items-center w-full sm:w-auto px-6 py-2 bg-[hsl(59,100%,50%)] text-black rounded-md transition hover:brightness-110 "
          >
            BUY NOW
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a
            href="#"
            className="flex justify-center items-center w-full sm:w-auto px-10 py-2 bg-gray-800 text-[hsl(59,100%,50%)] font-bold border-2 border-[hsl(59,100%,50%)] rounded-md transition hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)]"
          >
            Get Started Free
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
