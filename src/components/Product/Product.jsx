import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const Product = () => {
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg animate-pulse">Loading Data...</p>
      </div>
    );
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="py-10 "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className=" mt-16 text-white max-w-6xl mx-auto px-5">
        {/* Noted : Title */}

        <motion.h1
          variants={item}
          className="mb-6  bg-gradient-to-r from-[#FFD700] via-[#BAFD00] to-[#9EFF00]
                   bg-clip-text text-transparent text-2xl sm:text-6xl font-bold text-center"
        >
          Our Products
        </motion.h1>

        <motion.p
          variants={item}
          className="text-center text-gray-500 mb-10 mt-5"
        >
          Professional automation engineered for Gold volatility
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {marketplace.map((item) => (
          <div
            className="content-card flex flex-col  cursor-pointer p-6  group relative overflow-hidden border border-white/10
        hover:border-lime-400 transition-all
        bg-gradient-to-b from-white/5 to-transparent rounded-3xl"
          >
            <div className="card-title">
              <h3 className="text-lg font-bold mb-2 text-white">
                {item.title ?? "Unknow Title"}
              </h3>
            </div>
            <div className="card-body">
              <p className="text-gray-500 line-clamp-2 mb-5">
                {item.description ?? "Unknow Title"}
              </p>

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

              {/* <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
              <p className="text-sm text-gray-300 mb-5">Monothly</p> */}

              <div class="border-t pt-3">
                <div className="info-card line-clamp-6 text-gray-500 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mb-2">
                  {item.feature ? (
                    <div dangerouslySetInnerHTML={{ __html: item.feature }} />
                  ) : (
                    <p>Unknown Feature</p>
                  )}
                </div>

                <button
                  onClick={() => navigate("/order")}
                  class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[hsl(59,100%,50%)]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition  hover:brightness-110  focus:ring-primary focus:ring-offset-2"
                >
                  View Details & Order
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Product;
