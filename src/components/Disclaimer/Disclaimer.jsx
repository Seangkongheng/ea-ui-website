import React from "react";
import { motion } from "framer-motion";

const Disclaimer = () => {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 70, damping: 18 },
    },
  };

  return (
    <motion.div
      className="relative py-10"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
    >
      <div className="text-center mt-16  text-white max-w-[1530px] mx-auto px-4">
        <motion.h1
          variants={item}
          className="bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00] bg-clip-text text-transparent py-5 text-3xl font-bold md:text-5xl"
        >
          Disclaimer
        </motion.h1>
      </div>

      <div className="content-text max-w-6xl  mx-auto   px-4 text-gray-300 space-y-4">
        <p className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <section className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p>
            The information provided on this website is for educational and
            informational purposes only and does not constitute financial,
            investment, or trading advice.
          </p>
        </section>

        <section  className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p>
            Trading in the foreign exchange market (Forex), commodities
            (including gold / XAUUSD), cryptocurrencies, and the use of
            automated trading systems (Expert Advisors / EAs) involves
            substantial risk and may not be suitable for all investors. There is
            always a possibility of losing some or all of your invested capital.
          </p>
        </section>

        <section  className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p>
            Past performance of any trading system, strategy, or Expert Advisor
            is not indicative of future results. No representation is being made
            that any account will or is likely to achieve profits or losses
            similar to those discussed or displayed on this website.
          </p>
        </section>
        <section  className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p>
            All trading examples, performance statistics, screenshots, and
            results shown (including but not limited to Myfxbook, FXBlue, or
            account statements) are provided for demonstration purposes only and
            may be based on demo accounts, cent accounts, or specific market
            conditions.
          </p>
        </section>

        <section  className="bg-gray-900/20 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p>
            By using any Expert Advisor, trading strategy, or service provided
            through this website, you acknowledge and agree that:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Trading involves risk and you may lose money.</li>
            <li>
              Automated trading systems can experience losses due to market
              volatility, slippage, spread widening, broker execution, news
              events, or technical issues.
            </li>
            <li>
              You are solely responsible for your trading decisions, account
              settings, risk management, and capital allocation.
            </li>
            <li>No guarantee of profit or performance is provided.</li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};

export default Disclaimer;
