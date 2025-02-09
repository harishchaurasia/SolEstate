"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/NavBar";
import { useRouter } from "next/navigation";

export default function FinalizeDeal() {
  const router = useRouter();

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
          <div className="bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white rounded-xl p-8 shadow-lg max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">
              Deal Finalized!
            </h1>

            <div className="space-y-4">
              <p className="text-lg">
                Congratulations! Your deal has been successfully finalized.
                Here's a summary of what's been completed:
              </p>

              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>All necessary documents have been signed and processed.</li>
                <li>The agreed-upon funds have been sent to the builder.</li>
                <li>Your loan account has been officially activated.</li>
              </ul>

              <p className="text-lg mt-6">
                <strong>Next Steps:</strong> To maintain your loan in good
                standing, please remember to make your monthly payments on time.
              </p>

              <div className="mt-8 text-center">
                <button
                  onClick={() => router.push("/makepayment")}
                  className="px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
                >
                  Go to Make Payment Page
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
