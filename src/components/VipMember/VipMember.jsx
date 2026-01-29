import React, { useState } from "react";
import Modal from "../Login/Modal";
import { useAuthModal } from "../../context/AuthModalContext";
import { useNavigate } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";
import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaUserCheck,
  FaClock,
  FaGift,
  FaRocket,
  FaCrown,
  FaChartLine,
  FaSignal,
  FaUsers,
} from "react-icons/fa";

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

const VipMember = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [captchaToken, setCaptchaToken] = useState("");
  const handleCaptchaChange = (token) => {
    setCaptchaToken(token);
  };
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError({});
    setSuccess("");
    setLoading(true);

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}register`,
        {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
          password: form.password,
          password_confirmation: form.password_confirmation,
          captcha: captchaToken,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      setSuccess(res.data.message);

      setForm({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
      });

      setIsSignUp(false);
      setCaptchaToken(""); // reset captcha token if needed
    } catch (err) {
      console.error("REGISTER ERROR:", err.response || err);

      if (err.response?.status === 422) {
        setError(err.response.data.errors);
      } else if (err.response?.status === 500) {
        alert("Server error. Please try again later.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Noted : Start Login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});
    setSuccess("");

    // if (!turnstileToken) {
    //   setError({ general: "Please complete the captcha first." });
    //   setLoading(false);
    //   return;
    // }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}user/login`,
        {
          email: form.email,
          password: form.password,
          captcha: captchaToken,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        },
      );

      setSuccess(res.data.message);
      setIsModalOpen(false);
      navigate("/waiting-verify");
    } catch (err) {
      if (err.response?.status === 401) {
        setError({ general: err.response.data.message });
      } else if (err.response?.status === 422) {
        setError({ general: err.response.data.message });
      } else {
        setError({ general: "Something went wrong" });
        console.error(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      className="max-w-[1570px] px-4 mx-auto  md:px-12"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        variants={item}
        className="flex flex-col items-center justify-start px-4 mb-6 mt-12"
      >
        <h1
          className="text-center bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
             bg-clip-text text-transparent  mb-5 font-bold text-3xl ld:text-5xl md:text-5xl"
        >
          Become Our VIP Membership
        </h1>
        <p className="text-gray-400 mb-5">
          Register with our partners broker and unlock exclusive benefits
        </p>
      </motion.div>

      <div className="service-card w-full">
        <motion.div
          variants={container}
          className="flex justify-center items-center gap-8 md:px-8 px-3 md:flex-row flex-col w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* HOW TO JOIN */}
            <div className="join-cotent content text-white rounded-3xl h-full w-full border border-gray-700 hover:border-[#A8E900] p-6 sm:p-8 md:p-12 cursor-pointer transition-all duration-300 hover:-translate-y-2">
              <h1 className="text-center text-2xl font-semibold mb-6">
                How to Join
              </h1>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <FaUserPlus className="text-[#A8E900] text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">
                      Register with a Partner Broker
                    </h4>
                    <p className="text-sm text-gray-400">
                      Sign up with Exness, LiteFinance, or Investizo using our
                      referral codes (available on broker cards above)
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaUserCheck className="text-[#A8E900] text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Create Your Account</h4>
                    <p className="text-sm text-gray-400">
                      Sign up with our platform and submit your membership
                      application
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaClock className="text-[#A8E900] text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Wait for Approval</h4>
                    <p className="text-sm text-gray-400">
                      Our team will verify your registration and approve your
                      membership within 24–48 hours
                    </p>
                  </div>
                </li>

                <li className="flex gap-4">
                  <FaGift className="text-[#A8E900] text-xl mt-1" />
                  <div>
                    <h4 className="font-semibold">Claim Your Benefits</h4>
                    <p className="text-sm text-gray-400">
                      Access your VIP dashboard and claim all exclusive benefits
                    </p>
                  </div>
                </li>
              </ul>

              <div className=" w-full sm:flex-row justify-center gap-4 mt-8">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="gap-2 group flex justify-center items-center w-full sm:w-auto px-4 py-2 text-black font-semibold rounded-lg bg-[hsl(59,100%,50%)] hover:bg-[#BAFD00] hover:brightness-110 transition"
                >
                  Get Started
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
                </button>
              </div>
            </div>

            {/* MEMBER BENEFITS */}
            <div className="member-content grid gap-4 grid-cols-1 sm:grid-cols-2">
              <div className="member-card rounded-3xl text-white h-full w-full border border-gray-700 p-6 hover:border-[#A8E900] transition flex flex-col items-center justify-center text-center">
                <FaCrown className="text-[#A8E900] text-5xl sm:text-6xl mb-3" />
                <h1 className="font-semibold text-xl mb-2">
                  Exclusive Giveaways
                </h1>
                <p className="text-sm text-gray-400">
                  Participate in monthly prize draws and competitions
                </p>
              </div>

              <div className="member-card rounded-3xl text-white h-full w-full border border-gray-700 p-6 hover:border-[#A8E900] transition flex flex-col items-center justify-center text-center">
                <FaChartLine className="text-[#A8E900] text-5xl sm:text-6xl mb-3" />
                <h1 className="font-semibold text-xl mb-2">
                  Premium Trading Plan
                </h1>
                <p className="text-sm text-gray-400">
                  Access to VIP trading plans and strategies
                </p>
              </div>

              <div className="member-card rounded-3xl text-white h-full w-full border border-gray-700 p-6 hover:border-[#A8E900] transition flex flex-col items-center justify-center text-center">
                <FaSignal className="text-[#A8E900] text-5xl sm:text-6xl mb-3" />
                <h1 className="font-semibold text-xl mb-2">Premium Signals</h1>
                <p className="text-sm text-gray-400">
                  Access to VIP trading signals and market analysis
                </p>
              </div>

              <div className="member-card rounded-3xl text-white h-full w-full border border-gray-700 p-6 hover:border-[#A8E900] transition flex flex-col items-center justify-center text-center">
                <FaUsers className="text-[#A8E900] text-5xl sm:text-6xl mb-3" />
                <h1 className="font-semibold text-xl mb-2">
                  Private Community
                </h1>
                <p className="text-sm text-gray-400">
                  Join our exclusive Discord server for members only
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal show Login and Sign Up */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl font-semibold text-white dark:text-white mb-2">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>
        <div className="modal-content w-full">
          {isSignUp ? (
            // ---------------- SIGN UP ----------------
            <form onSubmit={handleSubmit}>
              <p className="mb-4 text-sm text-gray-500">
                Please register an account to purchase and join us. Fill your
                info in the form bellow.
              </p>

              {/* Name Input */}
              <div className="relative mb-4 grid grid-cols-2 gap-4">
                <div className="div">
                  <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="John"
                    className={`w-full pl-3 h-10 text-white rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      error.first_name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error.first_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.first_name[0]}
                    </p>
                  )}
                </div>
                <div className="div">
                  <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    placeholder="Doe"
                    className={`w-full text-white pl-3 h-10 rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                      error.last_name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error.last_name && (
                    <p className="text-red-500 text-sm mt-1">
                      {error.last_name[0]}
                    </p>
                  )}
                </div>
              </div>

              {/* Email Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`w-full pl-3 h-10 text-white  rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    error.email ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {error.email && (
                  <p className="text-red-500 text-sm mt-1">{error.email[0]}</p>
                )}
              </div>

              {/* Password Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full pl-3 h-10 text-white rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    error.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {error.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {error.password[0]}
                  </p>
                )}
              </div>

              {/* Confirm Password Input */}
              <div className="relative mb-4">
                <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  className={`w-full pl-3 h-10 text-white rounded-lg border bg-black/20  focus:ring-2 focus:ring-blue-500 focus:outline-none ${
                    error.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {error.password_confirmation && (
                  <p className="text-red-500 text-sm mt-1">
                    {error.password_confirmation[0]}
                  </p>
                )}
              </div>

              {/* Notd : Captcha Token */}
              <div className="flex items-center justify-center">
                <Turnstile
                  siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                  onSuccess={(token) => setCaptchaToken(token)}
                  onExpire={() => setCaptchaToken("")}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-2 mt-2 font-medium bg-[#A8E900] text-black rounded-md   flex items-center justify-center gap-2  disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? "Processing..." : "Sign Up"}
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
              <p className="text-center text-primary text-sm mt-4">
                <button onClick={() => navigate("/terms-conditions")} href="">
                  Terms and Conditions
                </button>
              </p>
            </form>
          ) : (
            // ---------------- SIGN IN ----------------
            <>
              <form onSubmit={handleLogin}>
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
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full text-white pl-3 h-10 rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                {/* Password Input */}
                <div className="relative mb-4">
                  <label className="block mb-1 text-sm font-medium dark:text-gray-200">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full pl-3 h-10 text-white rounded-lg border bg-black/20 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>

                <div className="flex justify-between mb-4 text-sm">
                  <span></span>
                  <button
                    onClick={() => alert("Please contact the admin")}
                    href="#"
                    className="text-[#A8E900] hover:underline"
                  >
                    Forgot your password?
                  </button>
                </div>

                {/* Notd : Captcha Token */}
                <div className="flex items-center justify-center">
                  <Turnstile
                    siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
                    onSuccess={(token) => setCaptchaToken(token)}
                    onExpire={() => setCaptchaToken("")}
                  />
                </div>

                {/* Notd : messags show  */}
                {error.general && (
                  <div className="mb-3 text-sm text-red-500">
                    {error.general}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-2 mt-2  font-medium bg-[#A8E900] text-black rounded-md  hover:brightness-110 transition"
                >
                  {loading ? "Processing..." : "Login"}
                </button>

                {/* Noted:  Switch to Sign Up */}
                <p className="text-center text-sm mt-4">
                  Don't have an account?{" "}
                  <span
                    className="text-[#BAFD00] font-semibold hover:underline cursor-pointer"
                    onClick={() => setIsSignUp(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </form>
            </>
          )}
        </div>
      </Modal>
    </motion.div>
  );
};

export default VipMember;
