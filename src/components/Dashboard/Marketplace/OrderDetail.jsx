import React from "react";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="order-detail mt-20">
      <div className="order-detail-content  mx-auto p-6 bg-neutral-900 rounded-xl shadow-sm">
        <div className="flex items-center text-[#A8E900] hover:underline cursor-pointer py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-chevron-left font-bold"
            aria-hidden="true"
          >
            <path d="m15 18-6-6 6-6"></path>
          </svg>

          <h5 className="text-md font-medium line-clamp-1 text-[#A8E900">
            <button onClick={() => navigate("/dashboard")}>
              {" "}
              Order Production | Dashboard
            </button>
          </h5>
        </div>

        <p className="text-gray-300">Trading Robot</p>

        <div className="card-order grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
          {/* Noted : Description */}
          <div className="card-description text-gray-300">
            <h3 className="text-xl font-bold  mb-2">Description</h3>
            <p className="text-gray-500 mb-4">
              Sn1P3r Flip is a pro-level Grid Martingale EA for MetaTrader 5
              that uses dual-direction Smart Hedge technology, strong safety
              systems, and an advanced dashboard. It’s highly customizable,
              balancing aggressive profit potential with institutional-style
              risk management to suit both conservative and aggressive trading
              styles.
            </p>
            <div className="feature">
              <p className="mb-4 mb font-bold">Feature</p>
              <ul class="space-y-1 text-sm text-gray-500 text-muted-foreground">
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Grid trading system</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Dynamic lot sizing</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Adaptive trading</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Smart hedge system</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Smart lock system</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Equity protection</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Safety features</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Time filters</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>News filter</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Daily profit management</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Break-even management</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Partial close system</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Pivot point analysis</span>
                </li>
                <li class="flex items-start">
                  <span class="mr-2">•</span>
                  <span>Statistics tracking</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Noted : Order Information */}
          <div className="card-order-information text-gray-300">
            <h3 className="text-xl  mb-2 font-bold">Order Information</h3>
            <p className="mb-4 text-sm text-gray-500">
              Please enter your details and check the confirmation box to
              complete your order.
            </p>
            <h3 className="text-sm font-semibold mb-3">Payment Options</h3>
            <div class="grid gap-2 sm:grid-cols-2">
              <button
                type="button"
                class="w-full rounded-md border p-3 text-left transition hover:border-primary border-[#A8E900] text-foreground"
              >
                <div class="flex items-center justify-between text-sm">
                  <span class="font-semibold text-foreground">Monthly</span>
                  <span class="text-lg font-bold text-[#A8E900] text-foreground">
                    $20.00
                  </span>
                </div>
              </button>
              <button
                type="button"
                class="w-full rounded-md border p-3 text-left transition hover:border-primary border-[#A8E900] bg-muted/30 text-muted-foreground"
              >
                <div class="flex items-center justify-between text-sm">
                  <span class="font-semibold text-foreground">Lifetime</span>
                  <span class="text-lg font-bold text-[#A8E900] text-foreground">
                    $200.00
                  </span>
                </div>
                <span class="mt-1 inline-flex w-fit items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-emerald-700">
                  Recommended
                </span>
              </button>
            </div>
            <p className="text-sm mt-3 text-gray-400">
              Final pricing is shown on the payment provider page.
            </p>
            <div className="p-5 mb-4 border-[#A8E900] bg-amber-50 border-2 text-sm rounded-lg mt-4">
              <h5 className="mb-3 text-[11px] font-semibold text-amber-800">
                Importain Noted
              </h5>
              <p className="text-xs text-amber-900">
                Risk Warning: Trading forex and CFDs involves significant risk
                and can result in the loss of your invested capital. You should
                not invest more than you can afford to lose. Past performance
                does not guarantee future results. This software is provided for
                educational purposes only and does not constitute financial
                advice. The developer assumes no liability for trading losses.
                By using this software, you accept full responsibility for your
                trading decisions.
              </p>
            </div>
            <h3 className="mb-2 text-sm">
              Bank Acount Name{" "}
              <span className="text-red-600  font-bold"> *</span>
            </h3>
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-neutral-900 focus:ring-2 border focus:ring-amber-100 "
              placeholder="Enter the bank account holder name (e.g. JOHN DOE)"
            />
            <button className="mt-4 w-full mb-5 rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition shadow-[0_0_20px_rgba(168,233,0,0.45)] hover:brightness-110 hover:shadow-[0_0_35px_rgba(168,233,0,0.85)] focus:ring-primary focus:ring-offset-2">
              Summit Order
            </button>
            <p className="text-center text-sm text-gray-400">
              By submitting, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
