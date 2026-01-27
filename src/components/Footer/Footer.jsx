import React, { useState, useEffect } from "react";
import telegramIcon from "../../assets/images/telegram.png";
import logo from "../../assets/images/SuperTradingEA_logo.png";

import {
  FaFacebook,
  FaDiscord,
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
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
            <h3 className="font-bold text-lg sm:text-xl">Our Links</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm sm:text-base">
              <li className="hover:text-white cursor-pointer"><a onClick={()=>navigate('/disclaimer')} href="">Disclaimer</a></li>
              <li className="hover:text-white cursor-pointer"><a onClick={()=>navigate('/terms-conditions')} href="">Terms & Conditions</a>
                
              </li>
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
                  <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />
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
                  <FaTelegramPlane className="w-4 h-4 sm:w-5 sm:h-5" />
                  Telegram
                </a>
              </li>

              {/* YouTube */}
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />
                  YouTube
                </a>
              </li>

              {/* discord */}
              <li className="flex items-center gap-2 hover:text-white cursor-pointer">
                <a
                  href="https://discord.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FaDiscord className="w-4 h-4 sm:w-5 sm:h-5" />
                  discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <p className="text-center py-6 sm:py-10  border-t border-b border-gray-800 text-gray-400 text-sm sm:text-base">
          © {new Date().getFullYear()} SuperTradingEA. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
