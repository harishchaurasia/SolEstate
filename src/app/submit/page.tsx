"use client";

import React, { useState } from "react";

const SubmitProject = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    fundingGoal: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Submit to backend or blockchain here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold mb-6">Submit Your Project</h1>

        {/* Title */}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Project Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
        />

        {/* Description */}
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-4"
        ></textarea>

        {/* Funding Goal */}
        <label
          htmlFor="fundingGoal"
          className="block text-sm font-medium text-gray-700"
        >
          Funding Goal (in SOL)
        </label>
        <input
          type="number"
          id="fundingGoal"
          name="fundingGoal"
          value={formData.fundingGoal}
          onChange={handleChange}
          required
          className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mb-6"
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
};

export default SubmitProject;
