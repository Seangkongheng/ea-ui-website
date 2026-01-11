import React from "react";

const Reward = () => {
  return (
    <div className="reward bg-neutral-900 p-6 rounded-xl border-[#BAFD00] border  shadow-lg w-full">
      
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
          🎁
        </div>
        <div>
          <h1 className="text-white font-bold text-lg">
            Monthly Giveaway
          </h1>
          <span className="text-sm text-gray-400">
            Exclusive giveaway for VIP members
          </span>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-neutral-800 my-4" />

      {/* Body */}
      <div className="reward-body w-full bg-neutral-800 rounded-xl flex flex-col items-center justify-center py-6">
        <span className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
          Status
        </span>

        <h2 className="text-white text-xl font-semibold">
          Coming Soon 🚀
        </h2>

        <p className="text-sm text-gray-400 mt-2 text-center">
          Stay tuned! Exciting rewards are on the way for our VIP community.
        </p>
      </div>
    </div>
  );
};

export default Reward;
