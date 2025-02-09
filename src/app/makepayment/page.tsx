"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

export default function MakePayment() {
  const router = useRouter();
  const [paymentAmount, setPaymentAmount] = useState("1500.00");

  const handlePayment = () => {
    // Here you would typically handle the payment processing
    alert(`Payment of $${paymentAmount} processed successfully!`);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActiveTab={() => {}} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar Fixed */}
        <NavBar />

        {/* Content Below Navbar */}
        <div className="p-8 pt-16 ml-64">
          <div className="bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">
              Make Payment
            </h1>

            <div className="space-y-6">
              <div className="bg-white bg-opacity-20 rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-2">Payment Due</h2>
                <p className="text-3xl font-bold">${paymentAmount}</p>
                <p className="text-sm mt-2">Due on: July 15, 2023</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="paymentAmount"
                    className="block text-sm font-medium mb-1"
                  >
                    Payment Amount
                  </label>
                  <input
                    type="text"
                    id="paymentAmount"
                    value={paymentAmount}
                    onChange={(e) => setPaymentAmount(e.target.value)}
                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white placeholder-gray-300"
                    placeholder="Enter amount"
                  />
                </div>

                <div>
                  <label
                    htmlFor="paymentMethod"
                    className="block text-sm font-medium mb-1"
                  >
                    Payment Method
                  </label>
                  <select
                    id="paymentMethod"
                    className="w-full px-3 py-2 bg-white bg-opacity-20 rounded-md text-white"
                  >
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="bank">Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handlePayment}
                  className="px-6 py-3 mx-8 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-green-700 hover:text-white transition duration-100"
                >
                  Pay Now
                </button>
                <button
                  onClick={handlePayment}
                  className="px-6 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-200 hover:text-black transition duration-100"
                >
                  Pay Later
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
