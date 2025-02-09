"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function UploadLoanAgreement() {
  const [lender, setLender] = useState("");
  const [amount, setAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [agreed, setAgreed] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed || !file) {
      alert("Please upload a document and agree to the terms.");
      return;
    }
    router.push("/finalizedeal");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white">
      <div className="bg-white text-black p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">
          Upload Loan Agreement
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Money Lender Name */}
          <div>
            <label className="block font-semibold">Money Lender Name</label>
            <input
              type="text"
              value={lender}
              onChange={(e) => setLender(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef8508]"
              required
            />
          </div>

          {/* Loan Amount */}
          <div>
            <label className="block font-semibold">Loan Amount</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef8508]"
              required
            />
          </div>

          {/* Interest Rate */}
          <div>
            <label className="block font-semibold">Interest Rate (%)</label>
            <input
              type="number"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ef8508]"
              required
            />
          </div>

          {/* File Upload */}
          <div>
            <label className="block font-semibold">
              Upload Agreement Document
            </label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full mt-1 p-2 border rounded-lg bg-gray-100"
              required
            />
          </div>

          {/* Agreement Checkbox */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="h-5 w-5 text-[#ef8508] border-gray-300 rounded"
              required
            />
            <label className="text-sm">I agree to the loan details.</label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#ef8508] text-white font-semibold rounded-lg shadow-md hover:bg-[#b5593d] transition"
          >
            Proceed to Payment Plan
          </button>
        </form>
      </div>
    </div>
  );
}
