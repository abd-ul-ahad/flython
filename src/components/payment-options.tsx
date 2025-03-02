"use client";

import { useState } from "react";

export function PaymentOptions() {
  const [paymentOption, setPaymentOption] = useState<"pay-now" | "hold-order">(
    "pay-now"
  );

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <label
        className={`border rounded-lg p-6 cursor-pointer ${
          paymentOption === "pay-now" ? "bg-teal-50 border-teal-200" : ""
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-6 h-6 rounded-full border flex items-center justify-center ${
              paymentOption === "pay-now"
                ? "border-teal-500 bg-teal-100"
                : "border-gray-300"
            }`}
          >
            {paymentOption === "pay-now" && (
              <div className="w-4 h-4 rounded-full bg-teal-500"></div>
            )}
          </div>
          <span className="text-lg font-medium">Pay now</span>
          <input
            type="radio"
            name="paymentOption"
            value="pay-now"
            checked={paymentOption === "pay-now"}
            onChange={() => setPaymentOption("pay-now")}
            className="sr-only"
          />
        </div>
        <div className="ml-9 text-gray-600">
          Pay now and confirm seat and baggage selection
        </div>
      </label>

      <label
        className={`border rounded-lg p-6 cursor-pointer ${
          paymentOption === "hold-order" ? "bg-gray-50 border-gray-200" : ""
        }`}
      >
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-6 h-6 rounded-full border flex items-center justify-center ${
              paymentOption === "hold-order"
                ? "border-gray-500 bg-gray-100"
                : "border-gray-300"
            }`}
          >
            {paymentOption === "hold-order" && (
              <div className="w-4 h-4 rounded-full bg-gray-500"></div>
            )}
          </div>
          <span className="text-lg font-medium">Hold order</span>
          <input
            type="radio"
            name="paymentOption"
            value="hold-order"
            checked={paymentOption === "hold-order"}
            onChange={() => setPaymentOption("hold-order")}
            className="sr-only"
          />
        </div>
        <div className="ml-9 text-gray-600">
          Hold price and space and pay at a later date
        </div>
      </label>
    </div>
  );
}
