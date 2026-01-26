import { useState, useRef, useEffect } from "react";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/SuperTradingEA_logo.png";
import { motion } from "framer-motion";
import axios from "axios";

const DashboardNavbar = ({ onLogout }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Fetch user info on mount
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const res = await axios.get(`${import.meta.env.VITE_API_URL}me`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          email: res.data.email,
        });
        console.log(res.data);
      } catch (err) {
        console.log(err.data);
        console.error("Failed to fetch user info", err);
      }
    };

    fetchUser();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Logout function
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await axios.post(
          `${import.meta.env.VITE_API_URL}logout`,
          {},
          { headers: { Authorization: `Bearer ${token}` } },
        );
      }
    } catch (err) {
      console.error("Logout API failed", err);
    } finally {
      localStorage.removeItem("token");
      navigate("/");
      if (onLogout) onLogout();
    }
  };

  return (
    <nav className="border-b  border-[hsl(59,100%,50%)] bg-gradient-to-br from-[#070C0F] via-[#0A1219] to-[#070C0F] px-6 py-4">
      <div className="flex items-center  mx-auto max-w-[1512px] justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <motion.img
            src={logo}
            alt="Logo"
            className="w-10"
            animate={{ rotate: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
          <span className="text-white font-bold text-xl">
            SmartTradingEA 🤖
          </span>
        </div>

        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center transition-all duration-200 hover:shadow-lg"
          >
            <div className="relative">
              <div className="w-8 h-8 rounded-full bg- flex items-center justify-center text-white font-semibold text-sm shadow-md">
                {user.first_name ? user.first_name.charAt(0).toUpperCase() : "U"}
              </div>
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-800"></div>
            </div>
            <FiChevronDown
              className={`text-gray-400 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              size={18}
            />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-[#A8E900] rounded-xl shadow-2xl border border-gray-700 overflow-hidden z-50 animate-fadeIn">
              {/* User Info */}
              <div className="p-4 bg-gradient-to-br from-gray-800 to-gray-900 border-b border-gray-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-[#A8E900] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {user.first_name ? user.first_name.charAt(0).toUpperCase() : "U"}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-semibold text-sm truncate">
                      {user.first_name} {user.last_name }
                    </p>
                    <p className="text-gray-400 text-xs truncate">
                      {user.email}
                    </p>
                  </div>
                </div>
              </div>

              {/* Logout */}
              <div className="py-2">
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-left text-red-400 hover:bg-red-500 hover:bg-opacity-10 transition-colors duration-150 flex items-center gap-3 group"
                >
                  <FiLogOut
                    size={16}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                  <span className="text-sm font-medium">Logout</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </nav>
  );
};

export default DashboardNavbar;
