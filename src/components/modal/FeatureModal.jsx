import { motion } from "framer-motion"; // <-- You were missing this!

const FeatureModal = ({ open, onClose, title, description }) => {
  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        transition={{ type: "spring", damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="max-w-xl w-full bg-slate-900 border border-white/10 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
        <button
          onClick={onClose}
          className="mt-6 px-5 py-2 rounded-lg bg-lime-400 text-black font-semibold hover:bg-lime-300 transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default FeatureModal; // <-- make sure this line exists
