import React from "react";
import { FaDownload, FaEye, FaFileAlt } from "react-icons/fa";

import { motion } from "framer-motion";

const Download = () => {
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
      <div className="mt-16 text-white max-w-6xl mx-auto px-4">
        {/* Noted : Title */}

        <motion.h1
          variants={item}
          className="py-5  bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
                           bg-clip-text text-transparent text-2xl sm:text-6xl font-bold text-center"
        >
          All Files Downlaod
        </motion.h1>

        <motion.p
          variants={item}
          className="text-center text-gray-500 mb-10 mt-5"
        >
          Professional automation engineered for Gold volatility
        </motion.p>

        {/* Noted : All cards */}

        <motion.div
          variants={item}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,233,0,0.4)] transition">
            <div className="relative h-40 bg-gray-800 flex items-center justify-center">
              <FaFileAlt className="text-5xl text-[#A8E900]" />
              <span className="absolute top-3 right-3 text-xs bg-[#A8E900] text-black px-3 py-1 rounded-full font-semibold">
                ZIP
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8E900] transition">
                Trading EA Files
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Professional EA package ready to download
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* Views */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEye />
                  <span>1,240</span>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-[#A8E900] text-black rounded-lg text-sm font-semibold
                hover:bg-[#c6ff00] transition"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,233,0,0.4)] transition">
            <div className="relative h-40 bg-gray-800 flex items-center justify-center">
              <FaFileAlt className="text-5xl text-[#A8E900]" />
              <span className="absolute top-3 right-3 text-xs bg-[#A8E900] text-black px-3 py-1 rounded-full font-semibold">
                ZIP
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8E900] transition">
                Trading EA Files
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Professional EA package ready to download
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* Views */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEye />
                  <span>1,240</span>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-[#A8E900] text-black rounded-lg text-sm font-semibold
                hover:bg-[#c6ff00] transition"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,233,0,0.4)] transition">
            <div className="relative h-40 bg-gray-800 flex items-center justify-center">
              <FaFileAlt className="text-5xl text-[#A8E900]" />
              <span className="absolute top-3 right-3 text-xs bg-[#A8E900] text-black px-3 py-1 rounded-full font-semibold">
                ZIP
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8E900] transition">
                Trading EA Files
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Professional EA package ready to download
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* Views */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEye />
                  <span>1,240</span>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-[#A8E900] text-black rounded-lg text-sm font-semibold
                hover:bg-[#c6ff00] transition"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </div>
          <div className="group bg-[#111] rounded-2xl overflow-hidden shadow-lg hover:shadow-[0_0_25px_rgba(168,233,0,0.4)] transition">
            <div className="relative h-40 bg-gray-800 flex items-center justify-center">
              <FaFileAlt className="text-5xl text-[#A8E900]" />
              <span className="absolute top-3 right-3 text-xs bg-[#A8E900] text-black px-3 py-1 rounded-full font-semibold">
                ZIP
              </span>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#A8E900] transition">
                Trading EA Files
              </h3>

              <p className="text-sm text-gray-400 mb-4">
                Professional EA package ready to download
              </p>

              {/* Footer */}
              <div className="flex items-center justify-between">
                {/* Views */}
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaEye />
                  <span>1,240</span>
                </div>

                <a
                  href="#"
                  className="flex items-center gap-2 px-4 py-2 bg-[#A8E900] text-black rounded-lg text-sm font-semibold
                hover:bg-[#c6ff00] transition"
                >
                  <FaDownload />
                  Download
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Download;
