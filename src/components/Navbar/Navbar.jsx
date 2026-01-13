import React, { useEffect, useState } from "react";
import logo from "../../assets/images/SuperTradingEA_logo.png";
import Modal from "../Login/Modal";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";

const menuItem =
  "relative px-1 py-2 text-sm font-medium tracking-wide transition";

const underline = {
  initial: { width: 0 },
  hover: { width: "100%" },
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-[hsl(59,100%,50%)] transition-all duration-300
        ${
          isScrolled
            ? "backdrop-blur-lg bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F]"
            : "bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F]"
        }`}
      >
        <div className="mx-auto max-w-[1512px] px-4">
          <div className="flex h-16 items-center justify-between text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <motion.img
                src={logo}
                alt="Logo"
                className="w-10"
                animate={{ rotate: [-10, 10, -10] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              />
              <h1 className="text-white text-2xl font-bold">
                <Link to="/">SmartTradingEA 🤖</Link>
              </h1>
            </div>

            {/* DESKTOP MENU  */}
            <ul className="hidden md:flex items-center gap-8">
              {[
                { name: "Home", path: "/" },
                { name: "Features", path: "/feature" },
                { name: "Products", path: "/product" },
                { name: "Download", path: "/download" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <motion.li
                  key={i}
                  className={menuItem}
                  initial="initial"
                  whileHover="hover"
                >
                  <Link
                    to={item.path}
                    className="text-white uppercase hover:text-[hsl(59,100%,50%)]"
                  >
                    {item.name}
                  </Link>

                  {/* underline */}
                  <motion.span
                    variants={underline}
                    className="absolute left-0 bottom-0 h-[2px] bg-[#BAFD00] rounded-full"
                  />
                </motion.li>
              ))}
            </ul>

            {/* Desktop Action */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 border border-[hsl(59,100%,50%)] text-white  rounded-lg  text-sm transform transition 
      duration-300
      hover:scale-105 hover:brightness-110
      active:scale-95"
              >
                Sign in
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-2xl"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* ===== MOBILE MENU ===== */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 rounded-xl bg-black/80 backdrop-blur-lg p-4 space-y-3 border border-white/10"
            >
              {[
                { name: "Home", path: "/" },
                { name: "Features", path: "/feature" },
                { name: "Products", path: "/product" },
                { name: "Download", path: "/download" },
                { name: "Contact", path: "/contact" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block uppercase rounded-lg px-4 py-3 text-white
                  hover:text-[#BAFD00] hover:bg-white/5 transition"
                >
                  {item.name}
                </Link>
              ))}

              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full mt-2 py-3 bg-[#A8E900] text-black rounded-md
                shadow-[0_0_20px_rgba(168,233,0,0.45)]
                hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] transition"
              >
                Sign in
              </button>
            </motion.div>
          )}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal-content w-full">
          {isSignUp ? (
            // ---------------- SIGN UP ----------------
            <>
              <p className="mb-4 text-sm text-gray-500">
                Create your account by filling the form below.
              </p>

              {/* Name Input */}
              <div className="relative mb-4 grid grid-cols-2 gap-4">
                <div className="div">
                  <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jonh"
                    className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div className="div">
                  <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <label className="text-sm mt-1">
                  Must be at least 8 characters long
                </label>
              </div>

              {/* Confirm Password Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <button className="w-full py-2 mt-2 font-medium bg-[#A8E900] text-black rounded-md  shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] transition">
                Sign Up
              </button>

              {/* Switch to Sign In */}
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <span
                  className="text-[#BAFD00] font-semibold hover:underline cursor-pointer"
                  onClick={() => setIsSignUp(false)}
                >
                  Sign In
                </span>
              </p>
            </>
          ) : (
            // ---------------- SIGN IN ----------------
            <>
              <p className="mb-4 text-sm  text-gray-500">
                Enter your email and password to access your account.
              </p>

              {/* Email Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Password Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="flex justify-between mb-4 text-sm">
                <span></span>
                <a href="#" className="text-[#A8E900] hover:underline">
                  Forgot your password?
                </a>
              </div>

              {/* Submit Button */}
              <button
                onClick={() => {
                  setIsModalOpen(false); // close modal
                  navigate("/dashboard"); // go to dashboard
                }}
                className="w-full py-2 mt-2  font-medium bg-[#A8E900] text-black rounded-md  shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] transition"
              >
                Sign In
              </button>

              {/* Switch to Sign Up */}
              <p className="text-center text-sm mt-4">
                Don't have an account?{" "}
                <span
                  className="text-[#BAFD00] font-semibold hover:underline cursor-pointer"
                  onClick={() => setIsSignUp(true)}
                >
                  Sign Up
                </span>
              </p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Navbar;
