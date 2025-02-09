"use client";

import React from "react";

const Marketplace = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sample Investment Listings */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">Project {index + 1}</h2>
            <p className="text-gray-600 mt-2">
              A brief description of the project goes here.
            </p>
            <button className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-lg">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
