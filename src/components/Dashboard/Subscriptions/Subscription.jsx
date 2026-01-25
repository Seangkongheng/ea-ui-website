import axios from "axios";
import React, { useEffect, useState } from "react";

const Subscription = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "subcription")
      .then((res) => {
        setSubscriptions(res.data.subcriptions || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Loading...</p>;
  }

  if (!subscriptions.length) {
    return <p className="text-center text-gray-400 mt-10">No subscriptions found.</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-5 space-y-8">
      {subscriptions.map((item) => {
        const plan = item.subscription_plans?.[0]?.plan || {};
        const statusColors = {
          pending: "bg-yellow-100 text-yellow-800 border-yellow-300",
          approved: "bg-green-100 text-green-800 border-green-300",
        };
        const statusColor = statusColors[item.status] || "bg-gray-100 text-gray-800 border-gray-300";

        return (
          <div
            key={item.id}
            className="bg-white rounded-3xl shadow-lg p-6 md:p-8 border hover:shadow-xl transition-all"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">{item.title}</h2>
              <span
                className={`px-4 py-1 rounded-full font-semibold text-sm border ${statusColor}`}
              >
                {item.status ? item.status.charAt(0).toUpperCase() + item.status.slice(1) : "Unknown"}
              </span>
            </div>

            {/* Description */}
            {item.description && (
              <p className="text-slate-600 text-sm md:text-base mb-4">{item.description}</p>
            )}

            {/* Subscription Plan & Price */}
            {item.subscription_plans?.[0] && (
              <div className="flex flex-col md:flex-row md:items-center md:gap-6 mb-4">
                <div className="text-3xl font-extrabold text-[#BAFD00]">${item.subscription_plans[0].price}</div>
                <div className="text-sm md:text-base text-gray-500 capitalize">{plan.name || "No Plan Name"}</div>
              </div>
            )}

            {/* Features */}
            <div className="text-slate-700 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2">
              {item.feature ? (
                <div dangerouslySetInnerHTML={{ __html: item.feature }} />
              ) : (
                <p>No features listed.</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Subscription;
