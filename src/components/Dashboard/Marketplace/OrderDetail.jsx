import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import WaitingVerifyModal from "../../modal/WaitingVerifyModal";
import axios from "axios";

const OrderDetail = () => {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [openModalVerify, setOpenModalVerify] = useState(false);
  const [orderDetail, setOrderDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!uuid) return; // make sure uuid exists
    setLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_URL}order-detail/${uuid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setOrderDetail(res.data["order-detail"]); // use exact API key
      })
      .catch((err) => {
        console.error(err.response?.data || err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uuid]);
  const handleConfirmPayment = async () => {
    setIsSubmitting(true);
    setErrors({}); // clear previous errors

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}confirm-payment/${uuid}`,
        {}, // if your API expects no body
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      // Show the modal after successful confirmation
      setOpenModalVerify(true);
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({
          general: err.response?.data?.error || "Something went wrong!",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {loading ? (
            <p className="text-gray-400">Loading order...</p>
          ) : orderDetail?.items?.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold text-white mb-2">
                {orderDetail.items[0].marketplace?.title ?? "Unknown Title"}
              </h2>

              <p className="text-gray-400 mb-4">
                {orderDetail.items[0].marketplace?.description ??
                  "No description available."}
              </p>
            </>
          ) : (
            <p className="text-red-500">Order not found.</p>
          )}

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

            <button
              onClick={handleConfirmPayment}
              className="w-full rounded-lg bg-[#A8E900] text-black font-bold py-3 hover:brightness-110 transition"
            >
              {isSubmitting ? "Confirming.." : "Confirm Payment"}
            </button>

            {openModalVerify && (
              <WaitingVerifyModal onClose={() => setOpenModalVerify(false)} />
            )}

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
