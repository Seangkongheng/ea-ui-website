import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
  const navigate = useNavigate();
  const [marketplace, setMarketplace] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "marketplace")

      .then((res) => {
        setMarketplace(res.data.marketplaces || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400">Loading...</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
      {marketplace.map((item) => (
        <div
          key={item.id}
          className="content-card p-6 rounded-3xl border border-white/10 hover:border-lime-400 transition-all bg-gradient-to-b from-white/5 to-transparent"
        >
          <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>

          <p className="text-gray-500 line-clamp-2 mb-5">{item.description}</p>

          {item.subscription_plans?.[0] && (
            <>
              <p className="text-3xl text-[#BAFD00] font-bold">
                ${item.subscription_plans[0].price}
              </p>
              <p className="text-sm text-gray-300 mb-5 capitalize">
                {item.subscription_plans[0].plan?.name}
              </p>
            </>
          )}

          <div className="border-t pt-3">
            <ul className="space-y-2 text-gray-500">
              {item.feature?.split(",").map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 mt-0.5 text-[#A8E900]"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span>{feature.trim()}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate(`/marketplace/${item.id}`)}
              className="mt-4 w-full rounded-md px-4 py-2 text-sm bg-[#A8E900] font-bold hover:brightness-110 transition"
            >
              View Details & Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Marketplace;
