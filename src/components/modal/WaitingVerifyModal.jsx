import { useNavigate } from "react-router-dom";

const WaitingVerifyModal = ({ onClose }) => {
     const navigate = useNavigate();
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-md rounded-xl bg-neutral-900 p-6 text-center shadow-lg">

        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#A8E900]/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="text-[#A8E900]"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </div>

        <h3 className="text-lg font-bold text-white mb-2">
          Payment Submitted
        </h3>

        <p className="text-sm text-gray-400 mb-4">
          Please wait while our administrator verifies your payment.
          This usually takes a short time.
        </p>

        <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700 mb-4">
          Status: Waiting for admin verification
        </span>

        <button
          onClick={()=>navigate('/dashbaord')}
          className="mt-4 w-full rounded-md border border-[#A8E900]/40 px-4 py-2 text-sm text-[#A8E900] hover:bg-[#A8E900]/10 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WaitingVerifyModal;
