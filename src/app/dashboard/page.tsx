"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import LoanCard from "@/components/card";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("browse_loans");

  // Sample Loan Data
  const loanOffers = [
    {
      imageUrl: "/assets/17453.jpg",
      name: "Global Finance Ltd.",
      loanAmount: "$50,000",
      interestRate: "5.2% APR",
      duration: "5 Years",
      description: "Reliable real estate funding for large-scale projects.",
    },
    {
      imageUrl: "/images/user2.jpg",
      name: "John Doe",
      loanAmount: "$20,000",
      interestRate: "4.8% APR",
      duration: "3 Years",
      description: "Helping first-time homebuyers with secure financing.",
    },
    {
      imageUrl: "/images/company3.jpg",
      name: "Swift Loans Corp.",
      loanAmount: "$100,000",
      interestRate: "6.5% APR",
      duration: "10 Years",
      description: "High-value real estate investments with low risk.",
    },
    {
      imageUrl: "/src/assets/17453.jpg",
      name: "Global Finance Ltd.",
      loanAmount: "$50,000",
      interestRate: "5.2% APR",
      duration: "5 Years",
      description: "Reliable real estate funding for large-scale projects.",
    },
    {
      imageUrl: "/images/user2.jpg",
      name: "John Doe",
      loanAmount: "$20,000",
      interestRate: "4.8% APR",
      duration: "3 Years",
      description: "Helping first-time homebuyers with secure financing.",
    },
    {
      imageUrl: "/images/company3.jpg",
      name: "Swift Loans Corp.",
      loanAmount: "$100,000",
      interestRate: "6.5% APR",
      duration: "10 Years",
      description: "High-value real estate investments with low risk.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar setActiveTab={setActiveTab} />

      {/* Main Content */}
      <div className="flex-1 p-8 ml-64">
        <h1 className="text-3xl font-bold text-gray-800">Browse Loan Offers</h1>
        <p className="text-gray-600 mt-2">
          Find the best loan offers that match your needs.
        </p>

        {/* Loan Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {loanOffers.map((loan, index) => (
            <LoanCard key={index} {...loan} />
          ))}
        </div>
      </div>
    </div>
  );
}
