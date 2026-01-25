import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import WaitingVerifyModal from "../../modal/WaitingVerifyModal";

const OrderDetail = () => {
  const navigate = useNavigate();
  const [openModalVerify, setOpenModalVerify] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-5 mt-6">
      <div className="bg-neutral-900 rounded-2xl p-6 shadow-lg">
        {/* Back */}
        <button
          onClick={() => navigate("/marketplace")}
          className="flex items-center gap-2 text-[#A8E900] mb-6 hover:underline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Marketplace Detail
        </button>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT : Service Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Trading Robot Pro
            </h2>

            <p className="text-gray-400 mb-4">
              Advanced automated trading system with risk management and smart
              hedge technology.
            </p>

            <div className="border border-white/10 rounded-xl p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Selected Plan
              </h4>

              <div className="flex items-center justify-between">
                <span className="text-white font-medium">Monthly Plan</span>
                <span className="text-[#A8E900] font-bold text-lg">$20.00</span>
              </div>
            </div>

            <div className="border border-white/10 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-gray-300 mb-2">
                Order Summary
              </h4>

              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Subtotal</span>
                <span>$20.00</span>
              </div>

              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Fee</span>
                <span>$0.00</span>
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-white">
                <span>Total</span>
                <span className="text-[#A8E900]">$20.00</span>
              </div>
            </div>
          </div>

          {/* RIGHT : Payment */}
          <div className="border border-white/10 rounded-2xl p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold text-white mb-2">Scan to Pay</h3>

            <p className="text-sm text-gray-400 mb-4 text-center">
              Scan the QR code using your banking app to complete payment
            </p>

            {/* QR CODE PLACEHOLDER */}
            <div className="w-48 h-48 bg-white rounded-xl flex items-center justify-center mb-4">
              <span className="text-black text-sm font-medium">QR CODE</span>
            </div>

            <div className="text-center mb-4">
              <p className="text-sm text-gray-400">Amount to Pay</p>
              <p className="text-2xl font-bold text-[#A8E900]">$20.00</p>
            </div>
            <div className="mt-6 rounded-lg mb-4 border border-[#A8E900]/30 bg-neutral-900 p-4 text-center">
              <p className="text-sm text-gray-400 mb-2">
                After completing the payment, please contact our administrator
                to verify your order.
              </p>

              <a
                href="https://t.me/ChhuyVannithDev"
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#A8E900] px-4 py-2 text-sm font-bold text-black hover:brightness-110 transition"
              >
                Contact Admin on Telegram
              </a>
            </div>

            <button onClick={()=>setOpenModalVerify(true)} className="w-full rounded-lg bg-[#A8E900] text-black font-bold py-3 hover:brightness-110 transition">
              Confirm Payment
            </button>

            {openModalVerify && <WaitingVerifyModal onClose={()=>setOpenModalVerify(false)} />}

            <p className="text-xs text-gray-500 mt-4 text-center">
              Payment will be check and verify it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
