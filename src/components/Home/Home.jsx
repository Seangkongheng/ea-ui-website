import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "../Service/AnimatedBackground"; // optional
import { useAuthModal } from "../../context/AuthModalContext";
import Modal from "../Login/Modal";
import { useNavigate } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

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
  const { openLogin } = useAuthModal();
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
      variants={container}
      initial="hidden"
      animate="show"
      className="home w-full h-[750px] flex justify-center items-center px-7 sm:px-6"
    >
      <AnimatedBackground />

      <div className="text-center mt-16 max-w-5xl mx-auto">
        {/* Title */}
        <motion.div variants={item} className="home-title">
          <h1 className="mb-6 bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00] bg-clip-text text-transparent text-4xl sm:text-7xl font-bold text-center">
            Professional Expert Advisor built for Gold (XAUUSD)
          </h1>

          <h1 className="text-3xl sm:text-5xl lg:text-4xl font-semibold text-white mb-8 max-w-5xl  sm:max-w-8xl mx-auto">
            Built-In Safety & Risk Filters, Intelligent Adaptive Entry System
            (Volatility-Aware)
          </h1>
        </motion.div>

        {/* Description */}
        <motion.div variants={item} className="home-description mb-10">
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto text-gray-500 leading-relaxed">
            Our EA Designed to handle volatility with intelligent risk control,
            adaptive trade spacing, and real-time execution.
          </p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="home-button flex flex-col sm:flex-row justify-center items-center gap-4 mt-6 w-full"
        >
          <button
            onClick={() => {
              setIsModalOpen(true);
              setIsMenuOpen(false);
            }}
            href="#"
            className="flex justify-center items-center w-full sm:w-auto px-10 py-2 bg-gray-800 text-[hsl(59,100%,50%)] font-bold border-2 border-[hsl(59,100%,50%)] rounded-md transition hover:brightness-110"
          >
            Get Started
          </button>
          <button
            onClick={() => {
              const planSection = document.getElementById("plan");
              if (planSection) {
                planSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="gap-2 group flex justify-center items-center w-full sm:w-auto px-4 py-2 text-black font-semibold rounded-lg bg-[hsl(59,100%,50%)] hover:bg-[#BAFD00] hover:brightness-110 transition"
          >
            View Pricing
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
          </button>
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
                <button onClick={()=>navigate('/terms-conditions')} href="">Terms and Conditions</button>
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

export default Home;
