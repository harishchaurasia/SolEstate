"use client";

import { useRouter } from "next/navigation";

export default function ChoosePaymentPlan() {
  const router = useRouter();
  const loanAmount = 100000; // Example amount

  // Payment Plans with Varying Interest and Duration
  const paymentPlans = [
    {
      id: 1,
      duration: "1 Year",
      interestRate: "12%",
      monthlyPayment: ((loanAmount * 1.12) / 12).toFixed(2),
      finalAmount: (loanAmount * 1.12).toFixed(2),
    },
    {
      id: 2,
      duration: "2 Years",
      interestRate: "6.2%",
      monthlyPayment: ((loanAmount * 1.124) / 24).toFixed(2),
      finalAmount: (loanAmount * 1.124).toFixed(2),
    },
    {
      id: 3,
      duration: "3 Years",
      interestRate: "4.1%",
      monthlyPayment: ((loanAmount * 1.125) / 36).toFixed(2),
      finalAmount: (loanAmount * 1.125).toFixed(2),
    },
    {
      id: 4,
      duration: "5 Years",
      interestRate: "2.5%",
      monthlyPayment: ((loanAmount * 1.125) / 60).toFixed(2),
      finalAmount: (loanAmount * 1.125).toFixed(2),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ef8508] via-[#b5593d] to-[#323232] text-white">
      <h2 className="text-3xl font-bold mb-6">Choose Your Payment Plan</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {paymentPlans.map((plan) => (
          <div
            key={plan.id}
            className="bg-white text-black p-6 rounded-xl shadow-lg text-center"
          >
            <h3 className="text-xl font-bold">{plan.duration}</h3>
            <p className="text-lg text-gray-700">
              Interest Rate: {plan.interestRate}
            </p>
            <p className="text-lg">Monthly Payment: ${plan.monthlyPayment}</p>
            <p className="text-lg font-semibold mt-2">
              Total Payable: ${plan.finalAmount}
            </p>

            <button
              onClick={() =>
                plan.id === 1
                  ? router.push("/blockchaindone")
                  : alert("Other plans coming soon!")
              }
              className="mt-4 w-full py-2 bg-[#ef8508] text-white font-semibold rounded-lg hover:bg-[#b5593d] transition"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
