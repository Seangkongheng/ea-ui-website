import React, { useState, useEffect } from "react";
import telegramIcon from "../../assets/images/telegram.png";
import logo from "../../assets/images/SuperTradingEA_logo.png";

const Footer = () => {
  const [showContact, setShowContact] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContact(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="footer  mt-16 ">
      {/* Footer Contact - Fixed Button */}
      <div
        className={`footer-contact flex items-center gap-2 fixed bottom-4 right-4 sm:bottom-8 sm:right-10 text-blue-400 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out ${
          showContact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <img
          src={telegramIcon}
          alt="Telegram"
          className="h-3 w-3 sm:h-3 sm:w-3"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://t.me/ChhuyVannithDev"
          className="text-white md:text-[10px] text-sm font-semibold"
        >
          Need help?
        </a>
      </div>

      {/* Footer Component */}
      <div className="footer-content  border-t border-b border-gray-800 text-white">
        <div className="flex flex-wrap justify-around gap-16 py-12">
          {/* Column 1 - Logo & Description */}
          <div className="flex flex-col gap-4 max-w-lg text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <img src={logo} className="h-10" alt="Logo" />
              <h3 className="text-white font-medium text-lg sm:text-xl">
                SmartTradingEA 🤖
              </h3>
            </div>
            <p className="text-gray-500 text-sm sm:text-base">
              SmartTradingEA is a professional Expert Advisor built for Gold
              (XAUUSD), designed to handle volatility with intelligent risk
              control, adaptive trade spacing, and real-time execution.
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4 max-w-xs text-center md:text-left">
            <h3 className="font-bold text-lg sm:text-xl">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
            </ul>
          </div>

          {/* Column 3 - Community */}
          <div className="flex flex-col gap-4 max-w-xs text-center md:text-left">
            <h3 className="font-bold text-lg sm:text-xl">Community</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm sm:text-base">
              {/* Facebook */}
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <a
                  href="https://www.facebook.com/ChhuyVannith"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 5.002 3.657 9.128 8.438 9.876v-6.988h-2.54v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.876C18.343 21.128 22 17.002 22 12z" />
                  </svg>
                  Facebook
                </a>
              </li>

              {/* Telegram */}
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <a
                  href="https://t.me/ChhuyVannithDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.12.099.154.232.17.326.016.094.037.308.02.475z" />
                  </svg>
                  Telegram
                </a>
              </li>

              {/* Instagram */}
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <a
                  href="https://www.instagram.com/chhuyvannithdev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.976.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.332 2.633-1.308 3.608-.975.976-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.332-3.608-1.308-.976-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.332-2.633 1.308-3.608.975-.976 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.775.13 4.603.384 3.68 1.307c-.923.923-1.177 2.095-1.235 3.372C2.014 6.332 2 6.741 2 12s.014 5.668.072 6.948c.058 1.277.312 2.449 1.235 3.372.923.923 2.095 1.177 3.372 1.235C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.449-.312 3.372-1.235.923-.923 1.177-2.095 1.235-3.372C23.986 17.668 24 17.259 24 12s-.014-5.668-.072-6.948c-.058-1.277-.312-2.449-1.235-3.372-.923-.923-2.095-1.177-3.372-1.235C15.668.014 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zM18.406 4.594a1.44 1.44 0 1 0 0 2.879 1.44 1.44 0 0 0 0-2.879z" />
                  </svg>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center py-6 sm:py-10  border-t border-b border-gray-800 text-gray-400 text-sm sm:text-base">
          © 2026 SuperTradingEA. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
