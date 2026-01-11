import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import Modal from "../Login/Modal";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const toggleModalType = () => setIsSignUp(!isSignUp);

  // Scroll blur
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark mode init
  useEffect(() => {
    const dark = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(dark);
    document.documentElement.classList.toggle("dark", dark);
  }, []);

  // Dark mode toggle
  const toggleDarkMode = () => {
    const next = !isDarkMode;
    setIsDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("darkMode", next);
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0  right-0 bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F]  border-[#BAFD00] border-b z-50 transition-all duration-300 ${
          isScrolled ? "bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F] backdrop-blur-lg" : "bg-black/95 "
        }`}
      >
        <div className="mx-auto max-w-[1512px] px-4">
          <div className="flex h-16  items-center justify-between text-white">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 750 684"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="text-foreground drop-shadow-lg"
                >
                  <path
                    d="M 560.00,402.00 L 478.00,438.00 L 460.00,451.00 L 448.00,468.00 L 445.00,487.00 L 447.00,683.00 L 483.00,654.00 L 489.00,644.00 L 581.00,569.00 L 576.00,543.00 L 579.00,537.00 L 577.00,532.00 L 493.00,589.00 L 489.00,585.00 L 489.00,568.00 L 486.00,564.00 L 499.00,543.00 L 570.00,497.00 L 569.00,486.00 L 564.00,477.00 L 509.00,509.00 L 505.00,507.00 L 492.00,514.00 L 485.00,507.00 L 486.00,489.00 L 498.00,473.00 L 569.00,435.00 Z M 170.00,264.00 L 162.00,287.00 L 163.00,314.00 L 179.00,355.00 L 188.00,370.00 L 208.00,388.00 L 228.00,397.00 L 258.00,402.00 L 291.00,402.00 L 293.00,400.00 L 289.00,391.00 L 277.00,377.00 L 233.00,356.00 L 217.00,343.00 L 207.00,324.00 L 203.00,297.00 Z M 579.00,263.00 L 544.00,299.00 L 542.00,322.00 L 530.00,344.00 L 511.00,358.00 L 478.00,373.00 L 466.00,385.00 L 460.00,400.00 L 462.00,402.00 L 491.00,402.00 L 523.00,396.00 L 548.00,383.00 L 559.00,373.00 L 570.00,357.00 L 586.00,316.00 L 587.00,284.00 Z M 378.00,255.00 Z M 373.00,255.00 Z M 696.00,238.00 L 663.00,270.00 L 678.00,325.00 L 676.00,334.00 L 681.00,357.00 L 664.00,360.00 L 657.00,366.00 L 629.00,377.00 L 614.00,390.00 L 604.00,409.00 L 603.00,466.00 L 609.00,550.00 L 651.00,518.00 L 653.00,486.00 L 658.00,479.00 L 666.00,474.00 L 686.00,469.00 L 707.00,483.00 L 749.00,440.00 Z M 691.00,401.00 L 698.00,412.00 L 695.00,425.00 L 670.00,442.00 L 652.00,448.00 L 646.00,441.00 L 645.00,432.00 L 649.00,410.00 L 667.00,398.00 Z M 50.00,237.00 L 0.00,450.00 L 2.00,458.00 L 213.00,605.00 L 216.00,611.00 L 301.00,671.00 L 305.00,670.00 L 308.00,666.00 L 306.00,630.00 L 294.00,608.00 L 115.00,466.00 L 78.00,428.00 L 77.00,420.00 L 64.00,402.00 L 66.00,397.00 L 71.00,396.00 L 168.00,436.00 L 238.00,473.00 L 286.00,507.00 L 289.00,505.00 L 287.00,487.00 L 280.00,465.00 L 251.00,437.00 L 223.00,422.00 L 167.00,402.00 L 65.00,372.00 L 62.00,367.00 L 84.00,271.00 Z M 39.00,1.00 L 32.00,16.00 L 26.00,52.00 L 28.00,114.00 L 44.00,168.00 L 75.00,217.00 L 117.00,255.00 L 132.00,250.00 L 118.00,238.00 L 96.00,204.00 L 79.00,171.00 L 65.00,132.00 L 59.00,103.00 L 57.00,65.00 L 65.00,47.00 L 74.00,43.00 L 105.00,65.00 L 108.00,72.00 L 263.00,227.00 L 259.00,231.00 L 186.00,232.00 L 184.00,235.00 L 222.00,266.00 L 227.00,265.00 L 277.00,308.00 L 302.00,334.00 L 314.00,354.00 L 326.00,391.00 L 338.00,459.00 L 322.00,568.00 L 381.00,641.00 L 429.00,548.00 L 415.00,477.00 L 414.00,457.00 L 427.00,387.00 L 438.00,355.00 L 447.00,339.00 L 472.00,311.00 L 560.00,235.00 L 568.00,235.00 L 559.00,230.00 L 491.00,232.00 L 487.00,228.00 L 530.00,183.00 L 530.00,178.00 L 627.00,81.00 L 656.00,56.00 L 664.00,55.00 L 684.00,43.00 L 689.00,46.00 L 691.00,53.00 L 691.00,88.00 L 679.00,145.00 L 658.00,193.00 L 622.00,247.00 L 633.00,252.00 L 654.00,236.00 L 677.00,211.00 L 693.00,188.00 L 705.00,164.00 L 717.00,129.00 L 723.00,89.00 L 723.00,53.00 L 712.00,3.00 L 707.00,0.00 L 657.00,25.00 L 652.00,23.00 L 578.00,67.00 L 531.00,104.00 L 470.00,163.00 L 466.00,159.00 L 465.00,147.00 L 458.00,142.00 L 303.00,141.00 L 293.00,142.00 L 285.00,148.00 L 285.00,163.00 L 279.00,167.00 L 219.00,110.00 L 170.00,72.00 L 102.00,30.00 L 53.00,5.00 Z M 431.00,148.00 L 435.00,153.00 L 435.00,165.00 L 426.00,191.00 L 392.00,256.00 L 381.00,255.00 L 386.00,259.00 L 392.00,258.00 L 394.00,262.00 L 386.00,291.00 L 375.00,303.00 L 369.00,298.00 L 359.00,263.00 L 363.00,256.00 L 370.00,255.00 L 360.00,257.00 L 334.00,207.00 L 319.00,171.00 L 318.00,153.00 L 325.00,147.00 L 338.00,145.00 L 419.00,145.00 Z"
                    fill="#FFFFFF"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    d="M 384.00,257.00 L 386.00,258.00 Z M 321.00,150.00 L 319.00,153.00 L 319.00,167.00 L 324.00,183.00 L 361.00,257.00 L 363.00,254.00 L 392.00,255.00 L 429.00,181.00 L 434.00,165.00 L 433.00,151.00 L 419.00,146.00 L 338.00,146.00 Z"
                    fill="#FBDC01"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </span>
              <h1 className="text-[hsl(72_100%_50%)] text-2xl font-bold">
                <Link to="/">SuperTradingEA</Link>
              </h1>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-6">
              <li className="hover:text-[#BAFD00] cursor-pointer">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-[#BAFD00] cursor-pointer">
                <Link to="/about">About</Link>
              </li>
              <li className="hover:text-[#BAFD00] cursor-pointer">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2  bg-[#A8E900]  text-black rounded-md transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] text-sm"
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

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-4 text-white">
              <ul className="space-y-3">
                <li className="hover:text-[#BAFD00] cursor-pointer">
                  <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#BAFD00] cursor-pointer">
                  <Link to="/about">About</Link>
                </li>
                <li className="hover:text-[#BAFD00] cursor-pointer">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => {
                    setIsModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="bg-[#A8E900] py-2 text-black rounded-md  shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)]"
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {/* Modal */}
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
