import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function VerifyLogin() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const token = params.get("token");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleVerify = async () => {
    if (!token) {
      setError("Invalid verification token");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/verify-login`,
        { params: { token } }
      );

      // Save auth token (JWT / Sanctum)
      localStorage.setItem("token", res.data.access_token);
      navigate("/dashboard");

    } catch (err) {
      setError(
        err.response?.data?.message || "Verification failed or expired"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070C0F] text-white">
      <div className="bg-black/40 p-8 rounded-xl w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Verify Login</h1>

        <p className="text-gray-400 mb-6">
          Click heng the button below to verify your login.
        </p>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <button
          onClick={handleVerify}
          disabled={loading}
          className="w-full py-2 bg-[#A8E900] text-black rounded-lg font-medium
          hover:brightness-110 transition disabled:opacity-60"
        >
          {loading ? "Verifying..." : "Verify Login"}
        </button>
      </div>
    </div>
  );
}
