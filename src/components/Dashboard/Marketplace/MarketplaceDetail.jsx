import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function MarketplaceDetail() {
  const navigate = useNavigate();
  const { uuid } = useParams();
  const [marketplace, setMarketplace] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [bank_account_name, setbank_account_name] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}marketplace/${uuid}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMarketplace(res.data.marketplace);
      })

      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [uuid]);

  if (loading) return <p className="text-center text-gray-400">Loading...</p>;
  if (!marketplace)
    return <p className="text-center text-gray-400">Marketplace not found</p>;

  // Order Submit
  const handleSubmitOrder = async () => {
    if (!selectedPlan) {
      setErrors({ plan: "Please select a plan" });
      return;
    }

    if (!bank_account_name) {
      setErrors({ bank_account_name: "Please enter bank account name" });
      return;
    }
    setIsSubmitting(true);
    setErrors({});

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_URL + "order",
        {
          marketplace_id: marketplace.id,
          marketplace_plan_id: selectedPlan.id,
          bank_account_name: bank_account_name,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );

      navigate(`/order-detail/${res.data.uuid}`);

      console.log("Order submitted", res.data);
    } catch (err) {
      // If backend sends validation errors
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setErrors({
          general: err.response?.data?.error || "Something went wrong!",
        });
      }
    } finally {
      setIsSubmitting(false); // Stop loading
    }
  };

  return (
    <div className="order-detail mt-5 px-5 max-w-6xl mx-auto">
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

        <p className="text-gray-300">{marketplace.title}</p>

        <div className="card-order grid md:grid-cols-2 grid-cols-1 gap-6 mt-6">
          {/* Noted : Description */}
          <div className="card-description text-gray-300">
            <h3 className="text-xl font-bold  mb-2">Description</h3>
            <p className="text-gray-500 mb-4">{marketplace.description}</p>
            <div className="feature">
              <p className="mb-4 mb font-bold">Feature</p>
              <div className="space-y-1 text-sm text-gray-500 text-muted-foreground">
                {marketplace.feature ? (
                  <div
                    className="info-card [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-2"
                    dangerouslySetInnerHTML={{ __html: marketplace.feature }}
                  />
                ) : (
                  <p>Unknown Feature</p>
                )}
              </div>
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
            {/* <div class="grid gap-2 sm:grid-cols-2">
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
            </div> */}

            <div className="grid gap-2 sm:grid-cols-2">
              {marketplace.subscription_plans.map((item) => {
                const isActive = selectedPlan?.id === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedPlan(item)}
                    className={`w-full rounded-md border p-3 text-left transition
          ${
            isActive
              ? "border-[#A8E900] bg-muted/30"
              : "border-white/10 hover:border-[#A8E900]"
          }
        `}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-foreground capitalize">
                        {item.plan.name}
                      </span>
                      <span className="text-lg font-bold text-[#A8E900]">
                        ${item.price}
                      </span>
                    </div>

                    {isActive && (
                      <span className="mt-1 inline-flex w-fit items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-semibold uppercase text-emerald-700">
                        Selected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            {errors.plan && (
              <p className="text-red-500 text-xs mt-1">{errors.plan}</p>
            )}

            <p className="text-sm mt-3 text-gray-400">
              Final pricing is shown on the payment provider page.
            </p>

            {marketplace.note && (
              <div className="p-5 mb-4 border-[#A8E900] bg-amber-50 border-2 text-sm rounded-lg mt-4">
                <h5 className="mb-3 text-[11px] font-semibold text-amber-800">
                  Importain Noted
                </h5>
                <p className="text-xs text-amber-900">{marketplace.note}</p>
              </div>
            )}

            <h3 className="mb-2 text-sm">
              Bank Acount Name{" "}
              <span className="text-red-600  font-bold"> *</span>
            </h3>

            {/* Noted : Bank Account */}
            <input
              type="text"
              className="w-full p-2 rounded-lg bg-neutral-900 focus:ring-2 border focus:ring-amber-100"
              placeholder="Enter the bank account holder name (e.g. JOHN DOE)"
              value={bank_account_name}
              onChange={(e) => setbank_account_name(e.target.value)}
            />
            {errors.general && (
              <p className="text-red-500 text-sm mb-2">{errors.general}</p>
            )}

            {/* Noted : Order Submit */}
            <button
              onClick={handleSubmitOrder}
              disabled={isSubmitting}
              className="mt-4 w-full mb-5 rounded-md  px-4 py-2 text-sm bg-[#A8E900]  text-black/70 font-bold text-primary-foreground  focus:outline-none focus:ring-2  text-black  transition  hover:brightness-110  focus:ring-primary focus:ring-offset-2"
            >
              {isSubmitting ? "Processing..." : "Submit Order"}
            </button>

            <p className="text-center text-sm text-gray-400">
              By submitting, you agree to our terms and conditions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarketplaceDetail;
