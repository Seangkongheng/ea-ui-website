import React from "react";
import { useNavigate } from "react-router-dom";

const Marketplace = () => {
   const navigate = useNavigate();
  return (
    <div className="marketplace-content grid grid-cols-1 md:grid-cols-3 gap-4 ">

      {/* Noted : Card 1 */}
      <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-neutral-900 rounded-lg">
        <div className="card-title">
          <h3 className="text-lg font-bold mb-2">Trading Robot</h3>
        </div>
        <div className="card-body">
          <p className="text-gray-500 line-clamp-2 mb-5">
            Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5 that
            uses dual-direction Smart Hedge technology, strong safety systems,
            and an advanced dashboard. It’s highly customizable, balancing
            aggressive profit potential with institutional-style risk management
            to suit both conservative and aggressive trading styles.
          </p>
          <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
          <p className="text-sm text-gray-300 mb-5">Monothly</p>

          <div class="border-t pt-3">
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Grid trading system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Dynamic lot sizing</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Adaptive trading</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart hedge system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart lock system</span>
              </li>
              <li class="pl-6 text-sm text-muted-foreground">
                +9 more features
              </li>
            </ul>

            <button onClick={() => navigate("/order")} class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2">
              View Details & Order
            </button>
          </div>
        </div>
      </div>
       {/* Noted : Card 1 */}
      <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-neutral-900 rounded-lg">
        <div className="card-title">
          <h3 className="text-lg font-bold mb-2">Trading Robot</h3>
        </div>
        <div className="card-body">
          <p className="text-gray-500 line-clamp-2 mb-5">
            Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5 that
            uses dual-direction Smart Hedge technology, strong safety systems,
            and an advanced dashboard. It’s highly customizable, balancing
            aggressive profit potential with institutional-style risk management
            to suit both conservative and aggressive trading styles.
          </p>
          <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
          <p className="text-sm text-gray-300 mb-5">Monothly</p>

          <div class="border-t pt-3">
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Grid trading system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Dynamic lot sizing</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Adaptive trading</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart hedge system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart lock system</span>
              </li>
              <li class="pl-6 text-sm text-muted-foreground">
                +9 more features
              </li>
            </ul>

            <button onClick={() => navigate("/order")} class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2">
              View Details & Order
            </button>
          </div>
        </div>
      </div>
       {/* Noted : Card 1 */}
      <div className="content-card flex flex-col  border border-neutral-700 hover:border-[#BAFD00] cursor-pointer p-6 bg-neutral-900 rounded-lg">
        <div className="card-title">
          <h3 className="text-lg font-bold mb-2">Trading Robot</h3>
        </div>
        <div className="card-body">
          <p className="text-gray-500 line-clamp-2 mb-5">
            Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5 that
            uses dual-direction Smart Hedge technology, strong safety systems,
            and an advanced dashboard. It’s highly customizable, balancing
            aggressive profit potential with institutional-style risk management
            to suit both conservative and aggressive trading styles.
          </p>
          <p className="text-3xl text-[#BAFD00] font-bold">$200.00</p>
          <p className="text-sm text-gray-300 mb-5">Monothly</p>

          <div class="border-t pt-3">
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Grid trading system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Dynamic lot sizing</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Adaptive trading</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart hedge system</span>
              </li>
              <li class="flex items-start gap-2 text-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-check mt-0.5 h-4 w-4 shrink-0 text-primary"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
                <span class="text-muted-foreground">Smart lock system</span>
              </li>
              <li class="pl-6 text-sm text-muted-foreground">
                +9 more features
              </li>
            </ul>

            <button onClick={() => navigate("/order")} class="mt-4 w-full  rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2">
              View Details & Order
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Marketplace;
