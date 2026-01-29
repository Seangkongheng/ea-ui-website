import React, { useState } from "react";
import { useAuthModal } from "../../context/AuthModalContext";
import { useNavigate } from "react-router-dom";
import Modal from "../Login/Modal";
import { Turnstile } from "@marsidev/react-turnstile";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("monthly");
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div id="plan" className="max-w-5xl mx-auto py-10 px-4 mt-16">
      <h1
        className="text-center md:text-5xl bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
             bg-clip-text text-transparent font-bold text-3xl"
      >
        Choose Your License Plan
      </h1>
      <p className="text-center text-gray-500 mb-10 mt-5">
        Professional XAUUSD automation bot with secure licensing, ongoing
        updates, and dedicated support.
      </p>

      {/* Tabs */}

      <div className="flex justify-center mb-12 relative bg-gray-800 rounded-full p-1 w-max mx-auto">
        {/* Monthly Tab */}
        <button
          onClick={() => handleTabClick("monthly")}
          className={`px-6 py-2 rounded-full font-semibold transition ${
            activeTab === "monthly"
              ? "bg-[hsl(59,100%,50%)] hover:bg-[#BAFD00] hover:brightness-110 transition" // inactive style
              : "text-gray-400 hover:text-white"
          }`}
        >
          Monthly
        </button>

        {/* Yearly Tab */}
        <div className="relative">
          <button
            onClick={() => handleTabClick("yearly")}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "yearly"
                ? "bg-[hsl(59,100%,50%)] hover:bg-[#BAFD00] hover:brightness-110 transition" // active highlight
                : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
          </button>

          {/* Discount Badge */}
          {activeTab === "yearly" && (
            <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs font-bold px-2 py-0.5 rounded-full shadow">
              -17%
            </span>
          )}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        {/* Monthly Card */}
        <div
          className={`cursor-pointer p-6 rounded-3xl border  transition-shadow ${
            activeTab === "monthly"
              ? " border-[hsl(72_100%_50%)] shadow-2xl "
              : " border-gray-300 hover:shadow-lg"
          }`}
        >
          <div className="flex items-center justify-between gap-6 mb-4">
            <div className="description">
              <h2 className="text-2xl font-bold mb-2   text-white">
                Monthly Plan
              </h2>
              <p className=" text-gray-500 text-sm mb-4">
                $49/month — Access all features, updates, and support.
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
            >
              <circle
                cx="48"
                cy="48"
                r="14"
                fill="none"
                stroke="#BAFD00"
                strokeWidth="4"
              ></circle>
              <g
                className="spin"
                stroke="#A8E900"
                strokeWidth="4"
                strokeLinecap="round"
              >
                <line x1="48" y1="8" x2="48" y2="18"></line>
                <line x1="48" y1="78" x2="48" y2="88"></line>
                <line x1="8" y1="48" x2="18" y2="48"></line>
                <line x1="78" y1="48" x2="88" y2="48"></line>
              </g>
              <style>
                {`
        .spin {
          transform-origin: 48px 48px;
          animation: spin 1.8s linear infinite;
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}
              </style>
            </svg>
          </div>

          <ul>
            <h1 className="mb-5 text-5xl font-bold text-[hsl(59,100%,50%)] ">
              $20<span className="text-lg text-gray-500">/month</span>
            </h1>

            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Full Access to all SuperTradingEA bots
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Up to 10 trading accounts licensed to use the bots
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Dual-Hedged & Adaptive Strategy Access
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              License Key Management
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Regular Updates & Improvements
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Standard Customer Support
            </li>
          </ul>
          <button
            onClick={() => {
              handleTabClick("monthly");
              setIsModalOpen(true);
            }}
            disabled={activeTab !== "monthly"}
            className={`w-full py-2 rounded-lg mt-10 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === "monthly"
                ? "flex justify-center items-center w-full  bg-gray-800 text-[hsl(59,100%,50%)] font-bold border-2 border-[hsl(59,100%,50%)] rounded-md transition hover:brightness-110"
                : "border text-[hsl(72_100%_50%)]"
            }`}
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
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Yearly Card */}
        <div
          className={`relative cursor-pointer rounded-3xl border p-6 transition-all duration-300 ${
            activeTab === "yearly"
              ? "border-transparent text-white hover:brightness-110 shadow-[0_0_28px_4px_hsla(59,100%,50%,0.25)]"
              : "border-gray-300 hover:shadow-lg"
          }`}
        >
          {/* Recommended Badge */}
          {activeTab === "yearly" && (
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-lime-400 text-black  px-3 py-1 rounded-full text-sm shadow-lg">
              ⭐ Recommended
            </div>
          )}

          <div className="flex items-center justify-between gap-6 mb-4">
            <div className="description">
              <h2 className="text-2xl font-bold mb-2  text-white">
                Yearly Plan
              </h2>
              <p className=" text-gray-500 text-sm mb-4">
                Best value for serious XAUUSD traders
              </p>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              viewBox="0 0 96 96"
            >
              <style>{`
    .lock {
      fill: none;
      stroke: #BAFD00;
      stroke-width: 4;
    }
    .glow {
      stroke: #A8E900;
      stroke-width: 3;
      opacity: .5;
      animation: fade 2s infinite;
    }
    @keyframes fade {
      50% { opacity: .9; }
    }
  `}</style>

              <rect
                x="28"
                y="44"
                width="40"
                height="32"
                rx="6"
                className="lock"
              />

              <path d="M36 44v-8a12 12 0 0 1 24 0v8" className="lock" />

              <circle cx="48" cy="60" r="30" className="glow" fill="none" />
            </svg>
          </div>

          <ul>
            <h1 className="mb-5 text-5xl font-bold text-[hsl(59,100%,50%)] ">
              $200<span className="text-lg text-gray-500">/year</span>
            </h1>

            {activeTab === "yearly" && (
              <li className="mb-3">
                <span className="text-[hsl(59,100%,50%)]">
                  💡 Save $40 — get 2 months FREE
                </span>
              </li>
            )}

            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Full access to SuperTradingEA (MT5) with all features enabled
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Optimized for XAUUSD M1 with dual-hedged execution
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Smart martingale recovery, adaptive pip step & basket take profit
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-3">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)] flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Use on up to 10 authorized trading accounts
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Priority support and faster assistance
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Ongoing updates, improvements, and optimizations
            </li>
            <li className="flex items-center  text-gray-400 gap-2 mb-2">
              {" "}
              <div class="w-5 h-5 rounded-full bg-[hsl(59,100%,50%)]  flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check w-3 h-3 text-background"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              Stable, uninterrupted license for long-term automated trading
            </li>
          </ul>

          {/* Noted : Button  */}
          <button
            // onClick={() => handleTabClick("monthly")}

            onClick={() => {
              handleTabClick("monthly");
              setIsModalOpen(true);
            }}
            disabled={activeTab !== "yearly"}
            className={`w-full py-2 rounded-lg mt-10 font-semibold flex items-center justify-center gap-2 transition ${
              activeTab === "yearly"
                ? "bg-[hsl(72_100%_50%)] text-black "
                : " flex justify-center items-center w-full  bg-gray-800 text-[hsl(59,100%,50%)] font-bold border-2 border-[hsl(59,100%,50%)] rounded-md transition hover:brightness-110"
            }`}
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
              className="w-4 h-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
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
    </div>
  );
};

export default Plan;
