import React, { useState } from "react";

/* ---------------- Referral Data ---------------- */
const referrals = [
  {
    name: "Chhoun Thongdy",
    code: "0ad7hx7oay",
    email: "chhounthongdy@gmail.com",
    link: "https://one.exnessonelink.com/a/0ad7hx7oay",
  },
  {
    name: "Seab sat",
    code: "1wgs1dunlj",
    email: "seabsat7@gmail.com",
    link: "https://one.exnessonelink.com/a/1wgs1dunlj",
  },
  {
    name: "Chhuy Vannith",
    code: "8offi2itp3",
    email: "vannithchhuy@gmail.com",
    link: "https://one.exnessonelink.com/a/8offi2itp3",
  },
];

/* ---------------- Custom Referral Select ---------------- */
const ReferralSelect = ({ onSelect }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <h5 className="mb-1">
        Referral <span className="text-red-500 font-bold">*</span>
      </h5>

      {/* Selected Box */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full bg-neutral-700 p-3 rounded-md text-left flex justify-between items-center focus:ring-2 focus:ring-gray-600"
      >
        {selected ? (
          <span className="font-medium text-white">{selected.name}</span>
        ) : (
          <span className="text-gray-400">Select referral</span>
        )}
        <span className="text-gray-400">▾</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-20 mt-2 w-full bg-neutral-800 rounded-md max-h-64 overflow-y-auto shadow-xl border border-neutral-700">
          {referrals.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setSelected(item);
                onSelect?.(item);
                setOpen(false);
              }}
              className="p-3 cursor-pointer hover:bg-neutral-700 border-b border-neutral-700 last:border-none"
            >
              <p className="font-semibold text-white">
                {item.name} – {item.code}
              </p>
              <p className="text-sm text-gray-400">{item.email}</p>
              <p className="text-xs text-gray-500 truncate">
                {item.link}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------- Membership Component ---------------- */
const Membership = () => {
  const [referral, setReferral] = useState(null);

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="bg-neutral-900 border-[#BAFD00] border w-[600px] p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2 text-white">
          Membership Referral
        </h3>

        <p className="text-gray-500 text-sm mb-4">
          Select your membership owner and join with their referral link to get
          extra benefits from our community:
        </p>

        <ul className="list-disc pl-5 text-gray-500 text-sm mb-4">
          <li>Trading ideas from our trader team</li>
          <li>Free access to a licensed trading bot</li>
        </ul>

        <form className="space-y-4">
          {/* Referral Select */}
          <ReferralSelect onSelect={setReferral} />

          {/* Email */}
          <div>
            <h5 className="mb-1">
              Email <span className="text-red-500 font-bold">*</span>
            </h5>
            <input
              type="email"
              className="w-full p-3 rounded-md bg-neutral-700 focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Trading Account */}
          <div>
            <h5 className="mb-1">
              Trading Account Numbers{" "}
              <span className="text-red-500 font-bold">*</span>
            </h5>
            <input
              type="number"
              className="w-full p-3 rounded-md bg-neutral-700 focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <button
            type="button"
            className="text-emerald-400 hover:underline w-full p-2 bg-neutral-700 rounded-lg text-sm"
          >
            + Add Another Account
          </button>

          {/* Notes */}
          <div>
            <h5 className="mb-1">Notes</h5>
            <textarea
              className="w-full p-2 h-32 rounded-md bg-neutral-700 focus:ring-2 focus:ring-gray-600"
              placeholder="Add any additional information or comment..."
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2"
          >
            Submit Membership Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership;
